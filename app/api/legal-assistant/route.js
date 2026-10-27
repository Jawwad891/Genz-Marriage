import { GROQ_MODEL, MAX_CHARS, MAX_MESSAGES, SYSTEM_PROMPT } from '../../../lib/legal-assistant'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Small in-memory rate limit per IP (resets when the server instance restarts).
// Keeps one visitor from using up the Groq quota.
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 25
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 })
    if (hits.size > 5000) hits.clear()
    return false
  }
  entry.count += 1
  return entry.count > LIMIT
}

const json = (body, status) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

export async function POST(request) {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return json({ error: 'The legal assistant is not configured yet. Please message us on WhatsApp.' }, 503)

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) return json({ error: 'Bohat zyada sawal ek saath. Thori der baad try karein ya WhatsApp par message karein.' }, 429)

  let body
  try { body = await request.json() } catch { return json({ error: 'Invalid request.' }, 400) }

  const messages = Array.isArray(body?.messages) ? body.messages : []
  const clean = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, m.role === 'user' ? MAX_CHARS : 4000) }))
  if (!clean.length || clean.at(-1).role !== 'user') return json({ error: 'Please type a question.' }, 400)

  let upstream
  try {
    upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...clean],
        temperature: 0.3,
        max_tokens: 700,
        stream: true,
      }),
    })
  } catch {
    return json({ error: 'Assistant se rabta nahi ho saka. WhatsApp par message karein.' }, 502)
  }

  if (!upstream.ok || !upstream.body) {
    const status = upstream.status === 429 ? 429 : 502
    return json({ error: status === 429 ? 'Assistant abhi busy hai. Thori der baad try karein.' : 'Assistant abhi available nahi. WhatsApp par message karein.' }, status)
  }

  // Turn Groq's server-sent events into a plain text stream for the browser.
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ''
  const stream = upstream.body.pipeThrough(new TransformStream({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop()
      for (const line of lines) {
        const data = line.trim()
        if (!data.startsWith('data:')) continue
        const payload = data.slice(5).trim()
        if (payload === '[DONE]') continue
        try {
          const text = JSON.parse(payload).choices?.[0]?.delta?.content
          if (text) controller.enqueue(encoder.encode(text))
        } catch { /* ignore partial lines */ }
      }
    },
  }))

  return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } })
}

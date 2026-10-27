'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp, MessageCircle, RotateCcw, Scale } from 'lucide-react'
import { whatsappLink } from '../lib/site'

const STARTER_QUESTIONS = [
  'Court marriage ke liye kaun se documents chahiye?',
  'Karachi mein court marriage ki fees kitni hai?',
  'Main Dubai mein hoon, online nikah kaise hoga?',
  'Purana nikah register nahi hua, ab kya karein?',
]

const GREETING = 'Assalam o Alaikum! Main GenZ Legal Assistant hoon. Court marriage, online nikah, Nikah Nama, NADRA marriage certificate, khula ya talaq ke baare mein sawal poochein — Roman Urdu, Urdu ya English mein.'

// **bold** → <strong>, keeps everything else as plain text (no HTML injection).
function inline(text, keyBase) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith('**') && part.endsWith('**') && part.length > 4
    ? <strong key={`${keyBase}-${i}`}>{part.slice(2, -2)}</strong>
    : part)
}

function FormattedText({ text }) {
  const blocks = []
  let list = null
  text.split('\n').forEach((raw, i) => {
    const line = raw.trimEnd()
    const item = line.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/)
    if (item) {
      if (!list) { list = { ordered: /^\s*\d/.test(line), items: [] }; blocks.push(list) }
      list.items.push(item[1])
      return
    }
    list = null
    if (line.trim()) blocks.push(line.replace(/^#+\s*/, ''))
  })
  return blocks.map((block, i) => typeof block === 'string'
    ? <p key={i}>{inline(block, i)}</p>
    : block.ordered
      ? <ol key={i}>{block.items.map((t, j) => <li key={j}>{inline(t, `${i}-${j}`)}</li>)}</ol>
      : <ul key={i}>{block.items.map((t, j) => <li key={j}>{inline(t, `${i}-${j}`)}</li>)}</ul>)
}

export default function LegalAssistantChat({ compact = false, autoFocus = false }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => { if (autoFocus) inputRef.current?.focus() }, [autoFocus])
  useEffect(() => { const el = listRef.current; if (el) el.scrollTop = el.scrollHeight }, [messages, busy])

  async function ask(question) {
    const text = question.trim()
    if (!text || busy) return
    setError('')
    setInput('')
    const history = [...messages, { role: 'user', content: text }]
    setMessages([...history, { role: 'assistant', content: '' }])
    setBusy(true)
    try {
      const res = await fetch('/api/legal-assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history }) })
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Assistant abhi available nahi.')
      }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        setMessages([...history, { role: 'assistant', content: answer }])
      }
      if (!answer.trim()) throw new Error('Jawab nahi mila. Dobara try karein.')
    } catch (err) {
      setMessages(history)
      setError(err.message)
    } finally {
      setBusy(false)
      inputRef.current?.focus()
    }
  }

  const lastQuestion = [...messages].reverse().find((m) => m.role === 'user')?.content
  const handoff = whatsappLink(`Assalam o Alaikum, mujhe legal guidance chahiye.${lastQuestion ? `\nMera sawal: ${lastQuestion}` : ''}`)

  return <div className={`la-chat ${compact ? 'la-compact' : ''}`}>
    <div className="la-messages" ref={listRef} aria-live="polite">
      <div className="la-msg la-assistant"><span className="la-avatar" aria-hidden="true"><Scale size={15} /></span><div className="la-bubble"><p>{GREETING}</p></div></div>
      {messages.map((m, i) => <div key={i} className={`la-msg ${m.role === 'user' ? 'la-user' : 'la-assistant'}`}>
        {m.role === 'assistant' && <span className="la-avatar" aria-hidden="true"><Scale size={15} /></span>}
        <div className="la-bubble">{m.content ? (m.role === 'assistant' ? <FormattedText text={m.content} /> : <p>{m.content}</p>) : <span className="la-typing" aria-label="Typing"><i /><i /><i /></span>}</div>
      </div>)}
      {!messages.length && <div className="la-starters">{STARTER_QUESTIONS.map((q) => <button key={q} type="button" onClick={() => ask(q)}>{q}</button>)}</div>}
      {error && <p className="la-error" role="alert">{error}</p>}
    </div>
    <form className="la-form" onSubmit={(e) => { e.preventDefault(); ask(input) }}>
      <label className="sr-only" htmlFor={compact ? 'la-input-widget' : 'la-input-page'}>Apna legal sawal likhein</label>
      <textarea id={compact ? 'la-input-widget' : 'la-input-page'} ref={inputRef} rows={1} maxLength={1200} value={input} placeholder="Apna sawal likhein…" onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(input) } }} />
      <button type="submit" className="la-send" disabled={busy || !input.trim()} aria-label="Send question"><ArrowUp size={18} /></button>
    </form>
    <div className="la-footer">
      <a href={handoff} target="_blank" rel="noopener"><MessageCircle size={14} /> Advocate se WhatsApp par baat karein</a>
      {messages.length > 0 && <button type="button" onClick={() => { setMessages([]); setError('') }} disabled={busy}><RotateCcw size={13} /> Nayi chat</button>}
    </div>
    <p className="la-disclaimer">AI assistant — general legal information, legal advice nahi. Apne case ke liye hamare advocate se rabta karein.</p>
  </div>
}

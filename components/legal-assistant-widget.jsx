'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Scale, X } from 'lucide-react'

// The chat code only downloads after the visitor opens the assistant,
// so it adds nothing to the first page load (PageSpeed stays the same).
const LegalAssistantChat = dynamic(() => import('./legal-assistant-chat'), { ssr: false, loading: () => <p className="la-loading">Loading…</p> })

export default function LegalAssistantWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // The dedicated page already shows the full chat.
  if (pathname === '/legal-assistant') return null

  return <>
    <div className={`la-panel ${open ? 'la-panel-open' : ''}`} role="dialog" aria-modal="false" aria-label="GenZ Legal Assistant" hidden={!open}>
      <div className="la-panel-head">
        <div><strong>GenZ Legal Assistant</strong><span>AI se free legal information</span></div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close legal assistant"><X size={18} /></button>
      </div>
      {opened && <LegalAssistantChat compact autoFocus={open} />}
    </div>
    <button type="button" className={`la-launcher ${open ? 'la-launcher-hidden' : ''}`} onClick={() => { setOpened(true); setOpen(true) }} aria-label="Open free AI legal assistant" aria-expanded={open}>
      <Scale size={20} /> <span>Free Legal Assistant</span>
    </button>
  </>
}

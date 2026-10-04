'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '../lib/site'

const serviceOptions = ['Court Marriage', 'Online Nikah', 'Marriage Certificate', 'Nikah Registration', 'MOFA Attestation / Translation', 'Other']

// Without a backend, the form opens WhatsApp with the enquiry pre-filled,
// so every submission reaches the business instead of being lost.
export default function ContactForm({ defaultLocation = '', defaultService = '', locationLabel = 'City' }) {
  const [sent, setSent] = useState(false)
  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const text = [
      'Assalam o Alaikum, I would like guidance from GenZ Marriages.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `${locationLabel}: ${data.get('location') || '-'}`,
      `Service: ${data.get('service') || '-'}`,
      data.get('message') ? `Message: ${data.get('message')}` : '',
    ].filter(Boolean).join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
    setSent(true)
  }
  return <form className="contact-form" onSubmit={onSubmit}>
    <div className="field-row"><label>Full Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Phone Number<input name="phone" required type="tel" autoComplete="tel" placeholder="03XX XXXXXXX" /></label></div>
    <div className="field-row"><label>{locationLabel}<input name="location" defaultValue={defaultLocation} placeholder="e.g. Lahore" /></label><label>Service Required<select name="service" defaultValue={defaultService}><option value="" disabled>Select a service</option>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label></div>
    <label>Message<textarea name="message" rows="4" placeholder="How can we help?"></textarea></label>
    <button className="button button-primary" type="submit">Send on WhatsApp <ArrowUpRight size={17} /></button>
    {sent && <p className="form-note" role="status">WhatsApp has opened with your details — press send to reach us.</p>}
  </form>
}

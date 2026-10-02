import Link from 'next/link'
import { ArrowUpRight, Quote } from 'lucide-react'

// Add only client-approved reviews. Do not publish invented quotes or ratings.
const reviews = []

export default function HappyClients() {
  return <section className="section-pad happy-clients-section" id="happy-clients" aria-labelledby="happy-clients-title">
    <div className="section-intro centered"><p className="eyebrow">Client experiences</p><h2 id="happy-clients-title">Our Happy Clients</h2><p className="intro-text">Personal stories from the couples and families we support.</p></div>
    {reviews.length > 0 ? <div className="happy-clients-grid">{reviews.map(review => <figure className="client-review-card" key={review.id}><Quote size={30} strokeWidth={1.3} aria-hidden="true" /><blockquote>{review.text}</blockquote><figcaption><span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span><div><strong>{review.name}</strong><span>{review.location}</span></div></figcaption></figure>)}</div> : <div className="client-review-invitation"><div className="review-quote-mark"><Quote size={42} strokeWidth={1.2} aria-hidden="true" /></div><div><p className="eyebrow">Your experience matters</p><h3>Have a story to share?</h3><p>Client reviews will be published here with permission. If we have helped with your marriage or documentation, we would love to hear about your experience.</p><Link href="/#contact" className="text-link">Share Your Experience <ArrowUpRight size={16} /></Link></div></div>}
  </section>
}

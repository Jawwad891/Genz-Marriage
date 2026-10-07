import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import ContactForm from '../../components/contact-form'
import OfficeMap from '../../components/office-map'
import { JsonLd, breadcrumbSchema } from '../../components/json-ld'
import { pageMetadata } from '../../lib/seo'
import { BUSINESS, MAP_LINK, SITE_NAME, SITE_URL, WHATSAPP_NUMBER, whatsappLink } from '../../lib/site'
import { ArrowUpRight, MapPin, MessageCircle, Phone, Mail } from 'lucide-react'

export const metadata = pageMetadata({
  title: 'Contact Us – Court Marriage & Nikah Office in Karachi',
  description: 'Contact GenZ Marriages for court marriage, online nikah and NADRA marriage certificate (MRC) support. Visit our office in Landhi Town, Karachi or message us on WhatsApp.',
  path: '/contact-us',
})

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact-us#webpage`,
  url: `${SITE_URL}/contact-us`,
  name: `Contact ${SITE_NAME}`,
  about: { '@id': `${SITE_URL}/#organization` },
}

const formatWhatsapp = (n) => `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5)}`

export default function ContactUsPage() {
  const address = [BUSINESS.streetAddress, BUSINESS.addressLocality, BUSINESS.postalCode].filter(Boolean).join(', ')
  return <div className="site-shell"><JsonLd data={breadcrumbSchema([['Home', '/'], ['Contact Us', '/contact-us']])} /><JsonLd data={contactPageSchema} /><SiteNav /><main>
    <section id="contact" className="contact-section section-pad contact-page"><div className="contact-grid"><div>
      <div className="section-intro"><p className="eyebrow">Contact us</p><h1>Let&apos;s Talk About <em>Your Requirements</em></h1><p className="intro-text">Court marriage, online nikah or a NADRA marriage certificate (MRC): tell us what you need and we&apos;ll reply with a document checklist and a clear quote.</p></div>
      <ul className="contact-details">
        {address && <li><MapPin size={18} strokeWidth={1.5} /><div><span>Office</span>{MAP_LINK ? <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">{address}</a> : <p>{address}</p>}</div></li>}
        <li><MessageCircle size={18} strokeWidth={1.5} /><div><span>WhatsApp</span><a href={whatsappLink()} target="_blank" rel="noopener">{formatWhatsapp(WHATSAPP_NUMBER)}</a></div></li>
        {BUSINESS.phoneDisplay && <li><Phone size={18} strokeWidth={1.5} /><div><span>Phone</span><a href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}>{BUSINESS.phoneDisplay}</a></div></li>}
        {BUSINESS.email && <li><Mail size={18} strokeWidth={1.5} /><div><span>Email</span><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div></li>}
      </ul>
      <div className="whatsapp-prompt"><span>Prefer WhatsApp?</span><a href={whatsappLink()} target="_blank" rel="noopener"><MessageCircle size={17} /> Chat with us directly <ArrowUpRight size={15} /></a></div>
    </div><div><ContactForm /></div></div><OfficeMap /></section>
  </main><SiteFooter /></div>
}

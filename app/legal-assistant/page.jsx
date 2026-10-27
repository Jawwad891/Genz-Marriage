import Link from 'next/link'
import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import LegalAssistantChat from '../../components/legal-assistant-chat'
import { JsonLd, breadcrumbSchema, faqSchema } from '../../components/json-ld'
import { pageMetadata } from '../../lib/seo'
import { LAWYER, SITE_NAME, SITE_URL, whatsappLink } from '../../lib/site'
import { MessageCircle, ShieldCheck, Languages, Clock } from 'lucide-react'

export const metadata = pageMetadata({
  title: 'Free AI Legal Assistant for Court Marriage & Nikah',
  description: 'Ask our free AI legal assistant about court marriage, online nikah, Nikah Nama, NADRA marriage certificate, khula and talaq in Pakistan — in Urdu or English.',
  path: '/legal-assistant',
})

const faqs = [
  ['Is the GenZ Legal Assistant free?', 'Yes. You can ask as many general questions as you like about court marriage, nikah, registration and family law in Pakistan at no cost.'],
  ['Is the AI answer legal advice?', `No. The assistant gives general legal information under Pakistani law. For advice on your own case, speak to ${LAWYER.name}, ${LAWYER.title}, through WhatsApp.`],
  ['Which languages can I use?', 'Roman Urdu, Urdu or English. The assistant replies in the language you write in.'],
  ['Should I share my CNIC or personal documents in the chat?', 'No. Do not type CNIC numbers or other sensitive details. Share documents only with our team on WhatsApp when you are ready to proceed.'],
]

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: `${SITE_NAME} Legal Assistant`,
  url: `${SITE_URL}/legal-assistant`,
  applicationCategory: 'LegalService',
  operatingSystem: 'Web',
  inLanguage: ['en', 'ur'],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
  provider: { '@id': `${SITE_URL}/#organization` },
}

export default function LegalAssistantPage() {
  return <div className="site-shell">
    <JsonLd data={breadcrumbSchema([['Home', '/'], ['Legal Assistant', '/legal-assistant']])} />
    <JsonLd data={faqSchema(faqs)} />
    <JsonLd data={appSchema} />
    <SiteNav />
    <main>
      <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><span aria-current="page">Legal Assistant</span></li></ol></nav>
      <section className="section-pad la-page">
        <div className="la-page-intro">
          <p className="eyebrow">Free AI legal help <span>•</span> Pakistan</p>
          <h1>Free Legal Assistant for <em>Court Marriage &amp; Nikah</em></h1>
          <p className="intro-text">Ask about court marriage documents and fees, online nikah from abroad, Nikah Nama columns, NADRA marriage certificates, khula or talaq. Get a clear answer in seconds — then talk to our advocate when you are ready.</p>
          <ul className="la-points">
            <li><Clock size={17} /> Instant answers, 24/7</li>
            <li><Languages size={17} /> Roman Urdu, Urdu or English</li>
            <li><ShieldCheck size={17} /> Backed by {LAWYER.name}, {LAWYER.years} years&apos; experience</li>
          </ul>
          <a className="button button-primary" href={whatsappLink('Assalam o Alaikum, mujhe apne case ke liye legal guidance chahiye.')} target="_blank" rel="noopener"><MessageCircle size={16} /> Talk to an Advocate</a>
        </div>
        <div className="la-page-chat"><LegalAssistantChat /></div>
      </section>
      <section className="section-pad la-page-faq">
        <h2>Legal Assistant FAQs</h2>
        <div className="faq-list">{faqs.map(([q, a], i) => <details className="faq-item" key={q} open={i === 0}><summary><span>{q}</span></summary><p>{a}</p></details>)}</div>
        <p className="la-related">Read more: <Link href="/court-marriage">court marriage procedure</Link> · <Link href="/online-nikah">online nikah</Link> · <Link href="/marriage-certificate">NADRA marriage certificate</Link></p>
      </section>
    </main>
    <SiteFooter />
  </div>
}

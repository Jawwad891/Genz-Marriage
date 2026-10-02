'use client'

import { useState } from 'react'
import SiteNav from '../components/site-nav'
import HomeGuide from '../components/home-guide'
import KarachiCourtHero from '../components/karachi-court-hero'
import KarachiCourtDetails from '../components/karachi-court-details'
import { CourtCityHero, CourtCityDetails, getCourtCityFaqs } from '../components/court-city-content'
import { OnlineNikahHero, OnlineNikahDetails, getOnlineNikahFaqs } from '../components/online-nikah-content'
import { onlineNikahCountries } from '../lib/online-nikah-countries'
import { ArrowUpRight, ChevronDown, Check, MessageCircle, Scale, ClipboardCheck, Sparkles } from 'lucide-react'

const services = [
  { number: '01', title: 'Court Marriage', text: 'Plan your court marriage with clear guidance on preparation, documentation and the arrangements to confirm in your city.', icon: Scale, href: '/court-marriage' },
  { number: '02', title: 'Online Nikah', text: 'Explore remote nikah arrangements, coordinate across locations and understand the documentation questions before you proceed.', icon: MessageCircle, href: '/online-nikah' },
  { number: '03', title: 'Marriage Certificate', text: 'Get help understanding existing marriage records, certificate requirements and the next steps for your documentation enquiry.', icon: ClipboardCheck, href: '/marriage-certificate' },
]

const faqs = [
  ['What services does GenZ Marriage provide?', 'We offer information and practical support around online nikah, court marriage, nikah documentation, marriage registration and related document assistance. The right process depends on your circumstances.'],
  ['Do you provide online Nikah support?', 'We can help you understand the steps, people involved and documents commonly associated with an online nikah. Recognition and requirements can vary, so we recommend confirming with the relevant authority for your case.'],
  ['What documents may be required?', 'Requirements can differ based on location, nationality, marital status and the type of service. We help you make sense of the likely checklist before you begin.'],
  ['Do you provide court marriage support?', 'Yes, we provide practical guidance around the process and preparation. We do not make blanket legal guarantees, and specific requirements should be confirmed with the relevant authority.'],
  ['Can overseas Pakistanis contact GenZ Marriage?', 'Yes. We welcome enquiries from overseas Pakistanis and can discuss your situation, location and documentation needs before suggesting next steps.'],
  ['Which cities in Pakistan do you serve?', 'We support enquiries across Pakistan, with availability varying by location and case. Contact us to discuss where you are based.'],
  ['How can I get started?', 'Send us your name, city and what you need help with through the form or WhatsApp. We will help you understand the most sensible next step.'],
]

function Reveal({ children, className = '' }) { return <div className={`reveal ${className}`}>{children}</div> }

function Logo({ light = false }) {
  return <a href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="GenZ Marriage home"><span className="logo-mark">G</span><span>GenZ <i>Marriage</i></span></a>
}

function SectionIntro({ eyebrow, title, text, centered = false }) { return <div className={`section-intro ${centered ? 'centered' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="intro-text">{text}</p>}</div> }

export default function Page({ serviceTitle, city, country }) {
  const [activeFaq, setActiveFaq] = useState(0)
  const isKarachiCourt = serviceTitle === 'Court Marriage' && city === 'Karachi'
  const isRefinedCourt = serviceTitle === 'Court Marriage' && ['Lahore', 'Islamabad', 'Rawalpindi'].includes(city)
  const isCourtCity = isKarachiCourt || isRefinedCourt
  const isOnlineCountry = serviceTitle === 'Online Nikah' && (!city || Boolean(country))
  const countryInfo = country ? onlineNikahCountries[country] : null
  const arabWedding = serviceTitle === 'Online Nikah' && ['uae', 'saudi-arabia'].includes(country)
  const countryWeddingImage = arabWedding ? '/images/online-nikah-' + country + '.png' : null
  const pageFaqs = isOnlineCountry ? getOnlineNikahFaqs(country) : isRefinedCourt ? getCourtCityFaqs(city) : faqs
  return <div className="site-shell">
    <SiteNav />
    <main>
      <section id="home" className={`hero section-pad ${isCourtCity || isOnlineCountry ? "karachi-hero" : ""}`}><div className="hero-grid"><Reveal className="hero-copy"><p className="eyebrow">{isCourtCity ? "COURT MARRIAGE SUPPORT" : "GENZ MARRIAGE"} <span>•</span> {isCourtCity ? city.toUpperCase() : "PAKISTAN"}</p>{serviceTitle ? <h1>{serviceTitle}<br /><em>{countryInfo ? `in ${countryInfo.region}` : city ? `in ${city}` : isOnlineCountry ? 'Pakistan & Overseas' : 'Made Simpler.'}</em></h1> : <h1 className="home-hero-title">Family Law Services in Pakistan <em>&mdash; Court Marriage, Online Nikah &amp; NADRA Documentation</em></h1>}
        {isOnlineCountry ? <OnlineNikahHero country={country} /> : isKarachiCourt ? <KarachiCourtHero /> : isRefinedCourt ? <CourtCityHero city={city} /> : serviceTitle ? <p className="hero-text">Clear guidance and practical {serviceTitle.toLowerCase()} support for couples and families {city ? `in ${city}` : 'across Pakistan'}.</p> : <div className="home-hero-description"><h2 className="hero-subheading">Marriage, Family Law &amp; Documentation Support for Clients in Pakistan and Overseas</h2><p className="hero-text">GenZ Marriage provides support for court marriage, online nikah, marriage certificates, birth certificate documentation, child custody and other family and civil law enquiries. We welcome clients in Karachi, Lahore, Islamabad and Rawalpindi, alongside overseas Pakistanis living in the UAE, UK, USA, Canada, Saudi Arabia, Australia, Oman and Qatar. Whether you are planning your nikah from abroad, arranging a court marriage in Pakistan or preparing documents for an overseas application, start with a clear discussion of your requirements. Understand the documents to prepare, the arrangements available remotely, the registration steps to confirm and the proposed fees before proceeding?with careful attention to your circumstances and privacy.</p></div>}<div className="hero-actions"><a className="button button-primary" href="#contact">{isOnlineCountry ? "Discuss Your Online Nikah" : isCourtCity ? "Discuss Your Court Marriage" : serviceTitle ? "Get Started" : "Discuss Your Requirements"} <ArrowUpRight size={17} /></a><a className="text-link" href="#services">Explore Services <span>↗</span></a></div><div className="trust-line"><Check size={14} /> Private <i>•</i> Clear <i>•</i> Pakistan-focused</div></Reveal><Reveal className="hero-visual"><div className="hero-main-image"><img src={countryWeddingImage || "/images/hero-muslim-couple.png"} alt={arabWedding ? `Illustrative Arab couple signing a nikah document in ${countryInfo.name}` : "Muslim couple signing their nikah document"} /><span className="floating-label"><Sparkles size={14} /> Modern Marriage Services</span></div><div className="hero-thumbs"><img src="/images/nikah-signing-ivory.png" alt="Nikah document signing with ivory wedding details" /><img src="/images/wedding-details-ivory.png" alt="Elegant ivory wedding details" /></div></Reveal></div></section>

      <section id="services" className="section-pad services-section"><Reveal><SectionIntro eyebrow="What we do" title={serviceTitle ? `${serviceTitle}, Without the Confusion` : "Marriage Services, Without the Confusion"} text="Clear information and practical support for the steps that matter." /></Reveal><div className="service-grid">{services.map(({ number, title, text, href, icon: Icon }) => <Reveal key={title}><article className="service-card"><div className="card-top"><span>{number}</span><Icon size={21} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p><a href={href} aria-label={`Learn more about ${title}`}>Learn more <ArrowUpRight size={16} /></a></article></Reveal>)}</div></section>

      {isKarachiCourt && <KarachiCourtDetails />}
      {isRefinedCourt && <CourtCityDetails city={city} />}
      {isOnlineCountry && <OnlineNikahDetails country={country} />}
      {!serviceTitle && <HomeGuide />}

      <section id="about" className="section-pad about-section"><div className="about-grid"><Reveal className="about-image"><img src={countryWeddingImage || "/images/ceremony.png"} alt={arabWedding ? `Arabic wedding-style nikah setting for ${countryInfo.name}` : "Elegant nikah ceremony setting"} /><div className="image-caption">A considered approach to an important moment.</div></Reveal><Reveal className="about-copy"><SectionIntro eyebrow="Our approach" title="Modern Services for a New Generation" text="GenZ Marriage is designed to make marriage-related services easier to understand and more organized. We combine a modern digital experience with practical guidance for couples and families in Pakistan." /><div className="about-notes"><div><span>01</span><p>Respectful, private conversations</p></div><div><span>02</span><p>Clear next steps, not complicated jargon</p></div></div></Reveal></div></section>

      <section id="how-it-works" className="section-pad process-section"><Reveal><SectionIntro eyebrow="The process" title="How It Works" text="A calmer way to move from questions to a clear next step." centered /></Reveal><div className="process-grid">{[['01', 'Tell Us What You Need'], ['02', 'Understand Your Options'], ['03', 'Prepare the Required Documents'], ['04', 'Move Forward With Confidence']].map(([num, title], i) => <Reveal key={num} className="process-step"><div className="step-number">{num}</div><div><h3>{title}</h3><p>{['Start with a simple conversation about your situation.', 'We explain the routes that may be relevant to you.', 'Get organised around the paperwork before you proceed.', 'Feel informed, prepared and supported along the way.'][i]}</p></div></Reveal>)}</div></section>

      <section className="locations-section"><div className="location-inner"><Reveal><SectionIntro eyebrow="Where we work" title="Marriage Services Across Pakistan" text="Support for couples and families, wherever their story begins." /></Reveal><div className="locations-grid">{['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Hyderabad', 'Peshawar'].map((city, i) => <div className="location-card" key={city}><span>0{i + 1}</span>{city}<ArrowUpRight size={15} /></div>)}</div><p className="location-note">Service availability may vary by location and case.</p></div></section>

      <section className="chapter-section section-pad"><div className="chapter-image"><img src={countryWeddingImage || "/images/couple-portrait.png"} alt={arabWedding ? "Illustrative Arab couple beginning a new chapter" : "Pakistani couple beginning a new chapter"} /><div className="chapter-card"><p className="eyebrow">A thoughtful beginning</p><h2>Beginning a<br /><em>New Chapter</em></h2><p>Clear guidance. Respectful service. Modern experience.</p></div></div></section>

      <section id="faqs" className="section-pad faq-section"><div className="faq-grid"><Reveal><SectionIntro eyebrow="Good to know" title="Questions, answered with care." text="Every situation is different. Here are a few of the questions we hear most often." /></Reveal><Reveal className="faq-list">{pageFaqs.map(([question, answer], i) => <div className={`faq-item ${activeFaq === i ? 'is-open' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i}><span>{question}</span><ChevronDown size={18} /></button>{activeFaq === i && <p>{answer}</p>}</div>)}</Reveal></div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-grid"><Reveal><SectionIntro eyebrow="Start a conversation" title="Let&apos;s Talk About Your Requirements" text="Tell us a little about what you need. We&apos;ll help you understand the next step with clarity and discretion." /><div className="whatsapp-prompt"><span>Prefer WhatsApp?</span><a href="https://wa.me/923001234567"><MessageCircle size={17} /> Chat with us directly <ArrowUpRight size={15} /></a></div></Reveal><Reveal><form className="contact-form" onSubmit={(e) => e.preventDefault()}><div className="field-row"><label>Full Name<input required placeholder="Your name" /></label><label>Phone Number<input required type="tel" placeholder="03XX XXXXXXX" /></label></div><div className="field-row"><label>{countryInfo ? "Country / City" : "City"}<input defaultValue={countryInfo?.name || city || ""} placeholder="e.g. Lahore" /></label><label>Service Required<select defaultValue={serviceTitle === "Court Marriage" ? "Court Marriage" : serviceTitle === "Online Nikah" ? "Online Nikah" : ""}><option value="" disabled>Select a service</option><option>Online Nikah</option><option>Court Marriage</option><option>Nikah Documentation</option><option>Marriage Registration</option><option>Document Assistance</option><option>Other</option></select></label></div><label>Message<textarea rows="4" placeholder="How can we help?"></textarea></label><button className="button button-primary" type="submit">Request Guidance <ArrowUpRight size={17} /></button></form></Reveal></div></section>
    </main>
    <footer className="site-footer"><div className="footer-main"><Logo light /><p>Modern marriage services and documentation support in Pakistan.</p><a className="footer-whatsapp" href="https://wa.me/923001234567"><MessageCircle size={16} /> Talk to us on WhatsApp</a></div><div className="footer-bottom"><div className="footer-links">{['Home', 'Services', 'How It Works', 'About', 'FAQs', 'Contact', 'Privacy Policy', 'Terms & Conditions'].map((item) => <a key={item} href={item === 'About' ? '/about-us' : item.includes('Policy') || item.includes('Terms') ? '#' : `#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}</div><p>© 2026 GenZ Marriage. All rights reserved.</p></div></footer>
  </div>
}

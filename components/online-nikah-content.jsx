import Link from 'next/link'
import { onlineNikahCountries } from '../lib/online-nikah-countries'

const generalFaqs = [
  ['What is an online nikah?', 'An online nikah is a nikah held in Pakistan where one partner (usually the one living abroad) joins by video call, while a wakeel appointed by them, the other partner, witnesses and the nikah khawan are present. The Nikah Nama is then registered with the Union Council.'],
  ['Is an online nikah valid in Pakistan?', 'A nikah with valid offer and acceptance, a properly appointed wakeel, witnesses and registration of the Nikah Nama with the Union Council is recorded as a marriage in Pakistan. Recognition for immigration abroad is a separate question that depends on the destination country.'],
  ['What documents are needed for an online nikah?', 'CNIC or NICOP and passport copies of both partners, CNIC copies of two witnesses and the wakeel, passport-size photographs, and a power of attorney if a wakeel signs for the partner abroad. Divorced or widowed applicants also need the divorce or death record.'],
  ['Will we get a NADRA marriage certificate?', 'Yes. After the Union Council registers the Nikah Nama, the NADRA computerised marriage registration certificate can be issued. We can also help with MOFA attestation and translation.'],
  ['How much does an online nikah cost?', 'Fees depend on your city in Pakistan, whether a power of attorney is needed, and whether you want certificate, attestation and translation work included. Share your details on WhatsApp for an itemised quote.'],
  ['Is an online nikah accepted for immigration abroad?', 'It depends on the country. The USA and Canada, for example, have specific rules on proxy and remote marriages. Check the rules of the country where you will use the marriage before booking — each of our country pages explains the key points.'],
]

export function getOnlineNikahFaqs(country) {
  if (!country) return generalFaqs
  const info = onlineNikahCountries[country]
  return [...info.faqs, generalFaqs[2], generalFaqs[3], generalFaqs[4]]
}

export function OnlineNikahHero({ country }) {
  const info = country ? onlineNikahCountries[country] : null
  return <div className="karachi-hero-description">
    <h2>{info ? `Online Nikah for Pakistanis in ${info.region}` : 'Online Nikah Services for Overseas Pakistanis'}</h2>
    <p className="hero-text">{info ? info.intro : 'Living abroad while your partner is in Pakistan? GenZ Marriage arranges your nikah in Pakistan with a wakeel, video participation, witnesses, Union Council registration and the NADRA marriage certificate. We support clients in the UAE, Saudi Arabia, UK, USA, Canada, Australia, Oman and Qatar.'}</p>
    <h3>Wakeel Nikah, NADRA Certificate &amp; Attestation</h3>
    <p className="hero-text">We prepare the Nikah Nama, coordinate the wakeel and witnesses, register the nikah and help with the <Link href="/marriage-certificate">NADRA marriage certificate</Link>, MOFA attestation and translation. You get a clear, itemised quote before anything is booked.</p>
  </div>
}

export function OnlineNikahDetails({ country }) {
  const info = country ? onlineNikahCountries[country] : null
  const location = info ? info.region : 'Pakistan & Overseas'
  const requirements = [
    ['CNIC, NICOP or passport', 'Copies of the CNIC or NICOP and passport of both partners. Names and dates of birth should match across documents — differences are easier to fix before the Nikah Nama is filled in.'],
    ['Two adult witnesses', 'CNIC copies and contact details of the witnesses who will be present at the nikah in Pakistan.'],
    ['Wakeel and power of attorney', 'The partner abroad appoints a wakeel (often a close relative) to sign on their behalf. A power of attorney attested by the Pakistan embassy or consulate is usually used for this.'],
    ['Haq Mehr and Nikah Nama terms', 'Agree the Haq Mehr amount and how it is paid, and any conditions to be written in the Nikah Nama, before the ceremony date.'],
    ['Previous marriage records', 'If either partner was married before: the divorce (talaq effectiveness) certificate from the Union Council, or the death certificate of the previous spouse.'],
    ['Photographs', 'Recent passport-size photographs of both partners for the Nikah Nama and registration.'],
  ]
  const steps = [
    ['Share your details on WhatsApp', 'Tell us where both partners are, your preferred date and whether you need the marriage certificate for a visa.'],
    ['Document review and quote', 'We check your CNIC/NICOP, passport and other records and send an itemised quote and checklist.'],
    ['Power of attorney for the wakeel', 'The partner abroad signs a power of attorney appointing a wakeel, attested by the Pakistan mission in their country.'],
    ['Nikah ceremony with video participation', 'The nikah takes place in Pakistan with the nikah khawan, wakeel and witnesses, while the partner abroad joins live by video.'],
    ['Union Council registration', 'The signed Nikah Nama is registered with the relevant Union Council.'],
    ['NADRA certificate and attestation', 'We help obtain the NADRA marriage certificate and, if needed, MOFA attestation, translation and courier delivery abroad.'],
  ]
  return <section className="karachi-details section-pad" aria-labelledby="online-details-title">
    <div className="section-intro"><p className="eyebrow">Online nikah, carefully coordinated</p><h2 id="online-details-title">Online Nikah {info ? `from ${info.name}` : 'in Pakistan'}: Requirements, Procedure &amp; Documents</h2><p className="intro-text">Everything you need to arrange your nikah in Pakistan while living {info ? `in ${location}` : 'abroad'}.</p></div>
    <nav className="guide-links" aria-label="Online nikah country pages">{Object.entries(onlineNikahCountries).map(([slug, item]) => <Link key={slug} href={`/online-nikah/${slug}`} aria-current={country === slug ? 'page' : undefined}>Online Nikah from {item.name}<span aria-hidden="true">↗</span></Link>)}</nav>

    {info ? <div className="karachi-detail-grid city-local-details">
      <article><h3>Planning Your Online Nikah from {info.name}</h3><p>{info.focus}</p><p>We regularly help clients in {info.cities.slice(0, -1).join(', ')} and {info.cities.at(-1)}.</p></article>
      <article><h3>Pakistan Embassy &amp; Consulate Services in {info.name}</h3><p>{info.missions}</p><p>You will need them for your NICOP or passport and to attest the power of attorney that appoints your wakeel in Pakistan.</p></article>
      <article><h3>Time Difference with Pakistan</h3><p>{info.timeZone}</p><p>We schedule the ceremony at a time that suits you, your partner, the witnesses and family in Pakistan.</p></article>
      <article><h3>Using Your Marriage Certificate in {info.name}</h3><p>{info.documentUse}</p></article>
    </div> : <div className="karachi-detail-grid city-local-details">
      <article><h3>Choose Your Country</h3><p>Each country has its own embassy services, time difference and rules for using a Pakistani marriage certificate. Select your country above for the specific steps, or message us if you live somewhere not listed.</p></article>
      <article><h3>What Can Be Done Remotely?</h3><p>Document review, power of attorney, the nikah ceremony by video, Union Council registration and NADRA certificate collection can all be handled while you are abroad. In-person attendance is only needed if your visa or immigration route requires both partners to be physically present.</p></article>
    </div>}

    <section className="karachi-requirements"><h2>Online Nikah Requirements {info ? `for Pakistanis in ${info.name}` : ''}</h2><p>The standard checklist for a wakeel nikah in Pakistan. We confirm the final list after reviewing your documents.</p><dl className="requirements-list">{requirements.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>
    <section className="karachi-procedure"><h2>Online Nikah Procedure: Step by Step</h2><p>From the first message to the certificate in your hands.</p><ol className="procedure-list">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol><p className="legal-reference">Registration of Muslim marriages is required under <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Section 5 of the Muslim Family Laws Ordinance, 1961</a>.</p></section>
    <div className="karachi-detail-grid">
      <article><h3>Online Nikah Fees</h3><p>Your quote depends on the city where the nikah is registered, whether a power of attorney is needed and whether certificate, MOFA attestation, translation and courier delivery are included. We send an itemised quote before you pay anything.</p></article>
      <article><h3>Nikah Nama &amp; NADRA Marriage Certificate</h3><p>Check names, CNIC/NICOP numbers, Haq Mehr and any conditions in the Nikah Nama before it is signed. After registration we help you get the <Link href="/marriage-certificate">NADRA marriage certificate</Link>, which most embassies and visa offices ask for.</p></article>
    </div>
    <div className="karachi-quote-strip"><div><p className="eyebrow">Start your enquiry</p><h3>{info ? `Arrange Your Online Nikah from ${info.name}` : 'Arrange Your Online Nikah'}</h3><p>Share both partners’ locations and your preferred date on WhatsApp.</p></div><a className="button button-primary" href="#contact">Request a Quote <span aria-hidden="true">↗</span></a></div>
    <div className="guide-links"><Link href="/online-nikah">All Online Nikah Services<span aria-hidden="true">↗</span></Link><Link href="/court-marriage">Court Marriage in Pakistan<span aria-hidden="true">↗</span></Link><Link href="/marriage-certificate">NADRA Marriage Certificate<span aria-hidden="true">↗</span></Link></div>
  </section>
}

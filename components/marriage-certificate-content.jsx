import Link from 'next/link'

export const certificateFaqs = [
  ['What is a NADRA marriage certificate?', 'The NADRA computerised marriage registration certificate (MRC) is issued after your Nikah Nama is registered with the Union Council. It is in English and Urdu and is the document most embassies, visa offices and NADRA services ask for.'],
  ['How do I get a NADRA marriage certificate?', 'The Nikah Nama must first be registered with the Union Council where the nikah took place. The Union Council then enters the record into the NADRA system and the computerised certificate can be issued.'],
  ['What documents are needed for a marriage certificate?', 'A copy of the registered Nikah Nama, CNIC copies of the husband and wife, and sometimes witness CNICs. Requirements can differ slightly between Union Councils.'],
  ['Our nikah was never registered. What can we do?', 'An unregistered nikah can usually still be registered, but late registration may need extra documents or steps. Share your Nikah Nama and details with us and we will explain the route for your Union Council.'],
  ['Can I get the certificate while living abroad?', 'Yes. We can coordinate with the Union Council in Pakistan and courier the certificate to you, along with MOFA attestation and translation if you need it for a visa.'],
  ['What is MOFA attestation?', 'Attestation by the Ministry of Foreign Affairs of Pakistan confirms your certificate for use abroad. Many countries, especially in the Gulf, then require attestation by their own embassy as well.'],
]

export function CertificateHero() {
  return <div className="karachi-hero-description">
    <h2>NADRA Marriage Certificate, Nikah Registration &amp; Attestation</h2>
    <p className="hero-text">Need a NADRA marriage certificate for a visa, passport, family registration or bank? GenZ Marriage helps you register your Nikah Nama with the Union Council, obtain the computerised marriage certificate and arrange MOFA attestation and translation.</p>
    <h3>For New and Existing Marriages</h3>
    <p className="hero-text">Whether you married through <Link href="/court-marriage">court marriage</Link>, an <Link href="/online-nikah">online nikah</Link> or a family nikah years ago, we explain what your Union Council needs and handle the follow-up.</p>
  </div>
}

export function CertificateDetails() {
  const services = [
    ['NADRA marriage certificate', 'The computerised marriage registration certificate issued from the NADRA system after Union Council registration.'],
    ['Nikah Nama registration', 'Registering a new Nikah Nama with the Union Council, or completing registration for a nikah that was never registered.'],
    ['Corrections', 'Help with name, date of birth or CNIC mismatches between the Nikah Nama, CNIC and NADRA records.'],
    ['MOFA attestation', 'Attestation by the Ministry of Foreign Affairs of Pakistan for use abroad, plus embassy attestation where the destination country requires it.'],
    ['English translation', 'Certified translation of the Urdu Nikah Nama for embassies and visa applications in the UK, USA, Canada and Australia.'],
    ['Delivery abroad', 'Courier of your completed documents to the UAE, Saudi Arabia, UK, USA, Canada and other countries.'],
  ]
  const steps = [
    ['Send your Nikah Nama', 'Share a photo of your Nikah Nama, both CNICs and what the certificate is needed for.'],
    ['Check the record', 'We confirm whether the nikah is already registered with the Union Council and spot any errors.'],
    ['Registration or correction', 'If needed, we complete Union Council registration or the correction process.'],
    ['NADRA certificate issued', 'The computerised marriage registration certificate is obtained from the Union Council.'],
    ['Attestation and translation', 'Optional MOFA attestation, embassy attestation and certified translation.'],
    ['Delivery', 'Collected in person or couriered to you in Pakistan or abroad.'],
  ]
  return <section className="karachi-details section-pad" aria-labelledby="certificate-title">
    <div className="section-intro"><p className="eyebrow">Marriage records</p><h2 id="certificate-title">NADRA Marriage Certificate: Requirements &amp; Procedure</h2><p className="intro-text">How the certificate is issued and how we help at each step.</p></div>
    <section className="karachi-requirements"><h2>Marriage Certificate Services</h2><dl className="requirements-list">{services.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>
    <section className="karachi-procedure"><h2>How to Get a NADRA Marriage Certificate</h2><ol className="procedure-list">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol><p className="legal-reference">Registration of Muslim marriages is required under <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Section 5 of the Muslim Family Laws Ordinance, 1961</a>.</p></section>
    <div className="karachi-detail-grid">
      <article><h3>Documents Required</h3><p>A copy of the registered Nikah Nama, CNIC copies of husband and wife and, in some Union Councils, witness CNICs. For overseas use, also the destination country’s checklist so attestation is done in the right order.</p></article>
      <article><h3>Fees &amp; Timeline</h3><p>Official Union Council and NADRA charges are separate from our service fee. Timing depends on the Union Council and on whether registration or corrections are needed. We give you an itemised quote and estimate on WhatsApp.</p></article>
    </div>
    <div className="karachi-quote-strip"><div><p className="eyebrow">Get started</p><h3>Request Marriage Certificate Help</h3><p>Send your Nikah Nama and what you need the certificate for.</p></div><a className="button button-primary" href="#contact">Request a Quote <span aria-hidden="true">↗</span></a></div>
    <nav className="guide-links" aria-label="Related services"><Link href="/court-marriage">Court Marriage in Pakistan<span aria-hidden="true">↗</span></Link><Link href="/online-nikah">Online Nikah for Overseas Pakistanis<span aria-hidden="true">↗</span></Link></nav>
  </section>
}

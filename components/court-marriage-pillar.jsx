import Link from 'next/link'

const cities = [
  ['Karachi', 'Sindh — both partners must be at least 18 under the Sindh Child Marriages Restraint Act, 2013.'],
  ['Lahore', 'Punjab — documents, witnesses and Union Council registration coordinated in Lahore.'],
  ['Islamabad', 'Islamabad Capital Territory — minimum age of 18 for both partners under the ICT Act, 2025.'],
  ['Rawalpindi', 'Punjab — separate jurisdiction from Islamabad, with its own Union Councils.'],
]

export const courtMarriageFaqs = [
  ['What is court marriage in Pakistan?', 'Court marriage in Pakistan is a nikah performed under Islamic and Pakistani family law, usually with free-will affidavits signed by both partners, two witnesses, a Nikah Nama and registration with the Union Council. It is called “court marriage” because the affidavits and nikah are typically arranged with a lawyer at or near the court.'],
  ['Is court marriage legal in Pakistan?', 'Yes. An adult Muslim man and woman can marry of their own free will. The nikah must have valid consent, witnesses and a Nikah Nama registered with the Union Council under Section 5 of the Muslim Family Laws Ordinance, 1961.'],
  ['What documents are required for court marriage?', 'Original CNICs of the bride and groom, CNIC copies of two witnesses, passport-size photographs, and for previously married applicants a divorce certificate or the death certificate of the previous spouse. Foreign nationals need their passport.'],
  ['Can a girl do court marriage without her parents’ permission?', 'Under Pakistani law, an adult Muslim woman can marry of her own free will. Where there is family opposition or a threat to safety, discuss it privately with us first so the right legal steps, including protection if needed, can be considered.'],
  ['How long does court marriage take?', 'If documents are complete, the affidavits and nikah can usually be completed on the same day. Union Council registration and the NADRA marriage certificate take longer and the timing varies by Union Council.'],
  ['How much does court marriage cost in Pakistan?', 'The fee depends on your city, whether you need certificate, attestation or translation work, and your circumstances. We give you an itemised quote on WhatsApp before you book.'],
  ['Will we get a NADRA marriage certificate after court marriage?', 'Yes. After the Nikah Nama is registered with the Union Council, the NADRA computerised marriage registration certificate can be issued. It is the document most embassies and offices ask for.'],
  ['Can an overseas Pakistani do court marriage?', 'Yes, either by travelling to Pakistan or through an online nikah with a wakeel. If the marriage is for a visa, check the destination country’s rules first — see our online nikah country pages.'],
]

export function CourtMarriageHero() {
  return <div className="karachi-hero-description">
    <h2>Court Marriage Procedure, Documents &amp; Fees in Pakistan</h2>
    <p className="hero-text">GenZ Marriage arranges court marriage in Karachi, Lahore, Islamabad and Rawalpindi: free-will affidavits, nikah with witnesses, Nikah Nama, Union Council registration and the NADRA marriage certificate. Private, organised and explained in plain language before you book.</p>
    <h3>Same-Day Nikah When Documents Are Ready</h3>
    <p className="hero-text">Send your details on WhatsApp, receive a checklist and an itemised quote, and choose a date. If either of you lives abroad, we can also arrange an <Link href="/online-nikah">online nikah</Link>.</p>
  </div>
}

export function CourtMarriagePillar() {
  const requirements = [
    ['Both partners are adults', 'Both partners must meet the legal minimum age for the province where the nikah takes place — 18 in Sindh and Islamabad Capital Territory. Age is checked from the CNIC or other official record.'],
    ['Free consent of both partners', 'Each partner must agree to the marriage of their own free will. This is recorded in a free-will affidavit (bayan-e-halfi) signed by the bride and groom.'],
    ['Original CNICs', 'Original CNICs of the bride and groom (NICOP or passport for overseas Pakistanis and foreign nationals), with photocopies.'],
    ['Two adult witnesses', 'Two adult Muslim witnesses with their CNICs. They must be present at the nikah.'],
    ['Photographs', 'Recent passport-size photographs of the bride and groom.'],
    ['Previous marriage records', 'If divorced: the talaq effectiveness (divorce) certificate from the Union Council. If widowed: the death certificate of the previous spouse. A man with an existing wife needs Arbitration Council permission under Section 6 of the Muslim Family Laws Ordinance, 1961.'],
  ]
  const steps = [
    ['Initial consultation on WhatsApp', 'Share your city, preferred date, both partners’ ages and marital status. We tell you exactly which documents to bring and send an itemised quote.'],
    ['Document check', 'We check CNICs and supporting records for mistakes in names, dates of birth or marital status, so the Nikah Nama is filled in correctly.'],
    ['Free-will affidavits', 'The bride and groom sign affidavits confirming their age, marital status and free consent, attested before an oath commissioner.'],
    ['Nikah ceremony', 'The nikah khawan performs the nikah in front of two witnesses. Haq Mehr and any agreed conditions are written in the Nikah Nama, which is signed by both partners, the witnesses and the nikah registrar.'],
    ['Union Council registration', 'The Nikah Nama is registered with the Union Council where the nikah took place, as required by Section 5 of the Muslim Family Laws Ordinance, 1961.'],
    ['NADRA marriage certificate', 'Once registered, the NADRA computerised marriage registration certificate can be issued. We can also arrange MOFA attestation and English translation for use abroad.'],
  ]
  return <section className="karachi-details section-pad" aria-labelledby="court-pillar-title">
    <div className="section-intro"><p className="eyebrow">Complete guide</p><h2 id="court-pillar-title">Court Marriage in Pakistan: Procedure, Requirements &amp; Fees</h2><p className="intro-text">Everything you need to know before your court marriage, in one place.</p></div>

    <div className="karachi-detail-grid city-local-details">
      <article><h3>What Is Court Marriage in Pakistan?</h3><p>In Pakistan, “court marriage” is not a separate civil marriage. It is a nikah conducted under Islamic and Pakistani family law, where both partners sign free-will affidavits, a nikah is performed with two witnesses, and the Nikah Nama is registered with the Union Council. It is called court marriage because the affidavits and nikah are usually arranged with a lawyer at or near the district courts.</p><p>Couples choose court marriage when they want a quick, private and properly documented marriage — for example when families are far away, one partner lives abroad, or the couple simply prefers a small ceremony.</p></article>
      <article><h3>Is Court Marriage Legal?</h3><p>Yes. Two adult Muslims can marry by their own free will, with offer and acceptance in the presence of witnesses. What makes the marriage properly recorded is the Nikah Nama and its registration with the Union Council. Without registration, you will face problems later with NADRA, passports, visas and family records — which is why we treat registration as part of every court marriage, not an extra.</p><p className="legal-reference"><a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Muslim Family Laws Ordinance, 1961 — Pakistan Code</a></p></article>
    </div>

    <section className="karachi-requirements" id="court-marriage-requirements"><h2>Court Marriage Requirements &amp; Documents</h2><p>Bring these on the day. We confirm the final list for your case on WhatsApp.</p><dl className="requirements-list">{requirements.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>

    <section className="karachi-procedure" id="court-marriage-procedure"><h2>Court Marriage Procedure: Step by Step</h2><p>The usual order of a court marriage in Pakistan, from first message to NADRA certificate.</p><ol className="procedure-list">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <div className="karachi-detail-grid">
      <article><h3>Court Marriage Fees in Pakistan</h3><p>The total cost depends on the city, the number of documents to prepare, and whether you want the NADRA certificate, MOFA attestation, translation or delivery included. Official Union Council and NADRA charges are separate from the service fee. We send an itemised quote on WhatsApp so you know the full cost before the day.</p></article>
      <article><h3>How Long Does Court Marriage Take?</h3><p>With complete documents, the affidavits and nikah are normally done the same day — often within a few hours. Union Council registration and the NADRA marriage certificate follow afterwards; timing depends on the Union Council, so we give you a realistic estimate for your city.</p></article>
      <article><h3>Court Marriage Without Parents’ Consent</h3><p>Pakistani law allows an adult Muslim woman and man to marry by their own choice. If your family opposes the marriage or you are worried about your safety, tell us privately at the start. Protection petitions and harassment cases are separate legal matters and should be handled by a lawyer with your full facts.</p></article>
      <article><h3>Court Marriage for Overseas Pakistanis &amp; Foreigners</h3><p>Overseas Pakistanis can travel for a court marriage or arrange an <Link href="/online-nikah">online nikah with a wakeel</Link>. Foreign nationals should bring their passport and check how their home country will recognise the marriage. For visa use, the NADRA certificate usually needs MOFA attestation.</p></article>
    </div>

    <section className="karachi-requirements"><h2>Court Marriage in Your City</h2><p>Local requirements, Union Councils and appointment details for each city.</p><dl className="requirements-list">{cities.map(([city, text]) => <div key={city}><dt><Link href={`/court-marriage/${city.toLowerCase()}`}>Court Marriage in {city}</Link></dt><dd>{text}</dd></div>)}</dl></section>

    <div className="karachi-quote-strip"><div><p className="eyebrow">Ready to start?</p><h3>Request a Court Marriage Quote</h3><p>Share your city and preferred date — we reply with a checklist and fee.</p></div><a className="button button-primary" href="#contact">Request a Quote <span aria-hidden="true">↗</span></a></div>
    <nav className="guide-links" aria-label="Related services"><Link href="/online-nikah">Online Nikah for Overseas Pakistanis<span aria-hidden="true">↗</span></Link><Link href="/marriage-certificate">NADRA Marriage Certificate<span aria-hidden="true">↗</span></Link></nav>
  </section>
}

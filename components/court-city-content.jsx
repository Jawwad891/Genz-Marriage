import Link from 'next/link'
import LahoreCourtGuide from './lahore-court-guide'

const cityCopy = {
  Lahore: {
    heading: 'Court Marriage in Lahore with Nikah & Documentation Support',
    intro: 'Planning your court marriage in Lahore starts with getting the practical details right. GenZ Marriage helps you discuss your documents, nikah arrangements and marriage registration before confirming an appointment. Share where both partners are based, your preferred date and any previous marriage records that need review. From agreed Haq Mehr to witness participation and the details entered in your Nikah Nama, understand the arrangements before you proceed. If you are travelling to Lahore, confirm the venue, attendance requirements and outstanding documents before making travel plans.',
    localTitle: 'Prepare before travelling for your Lahore appointment',
    local: 'If you live outside Lahore, coordinate document review before travelling. Establish which originals need to be brought in person, who will attend and whether any further visit may be required for outstanding paperwork. A confirmed appointment should include a location and a clear list of remaining tasks. Mention work commitments or travel dates early so the proposed arrangements can be discussed realistically.',
    jurisdiction: 'Lahore is in Punjab. Eligibility and registration arrangements should be reviewed under the rules applicable to the intended place of marriage. Do not assume that a checklist prepared for another province will cover your circumstances.',
  },
  Islamabad: {
    heading: 'Court Marriage in Islamabad, Planned Around Your Circumstances',
    intro: 'Arrange your court marriage in Islamabad with a clear plan for document preparation, nikah formalities and registration follow up. GenZ Marriage provides a starting point for couples who want to understand the proposed service before booking. Explain your nationality, marital status and where each partner is located so that identity documents, witness arrangements and agreed marriage terms can be discussed together. If you are coordinating between Islamabad and Rawalpindi, identify the intended place of marriage at the beginning so the appropriate local requirements can be reviewed.',
    localTitle: 'Confirm the Islamabad location and registration arrangements',
    local: 'Islamabad and Rawalpindi are close geographically, but they fall within different jurisdictions. Specify whether your intended appointment is within Islamabad Capital Territory or in Rawalpindi, and ask which office will handle the marriage record. If your documents will later be submitted abroad, bring the receiving organisation’s checklist into the initial conversation. This helps you plan certificate or translation requirements alongside the marriage arrangements.',
    jurisdiction: 'For marriage within Islamabad Capital Territory, the Islamabad Capital Territory Child Marriage Restraint Act, 2025 establishes 18 as the minimum age for both partners. Confirm identity and age evidence before scheduling the appointment.',
  },
  Rawalpindi: {
    heading: 'Court Marriage in Rawalpindi with Clear Preparation & Follow Up',
    intro: 'Make your court marriage plans in Rawalpindi with a clear understanding of the documents, appointment arrangements and records involved. GenZ Marriage helps couples discuss nikah preparation, witness participation, Haq Mehr and registration questions before choosing a date. Whether both partners are locally available or one is travelling from another city, explain your circumstances early to organise the next steps. If your enquiry also involves Islamabad, clarify where you intend to proceed so that the relevant jurisdiction and registration arrangements can be considered.',
    localTitle: 'Plan attendance and document collection in Rawalpindi',
    local: 'Before an appointment in Rawalpindi, confirm who needs to attend, the venue and the documents each person should bring. If you are arriving from Islamabad or another city, ask whether any further attendance is expected after the nikah. Keep registration follow up and collection of records on your planning checklist. Discuss who will provide updates and how you will receive completed documents if you cannot return easily.',
    jurisdiction: 'Rawalpindi is in Punjab, rather than Islamabad Capital Territory. Review eligibility and registration requirements for the actual place of marriage and explain any connection your documents have to another city or jurisdiction.',
  },
}

export function getCourtCityFaqs(city) {
  return [
    [`What documents should we prepare for court marriage in ${city}?`, 'Begin with current identity documents and any relevant previous marriage records. Confirm the original documents, copies, witness identification, photographs and case-specific supporting paperwork needed before booking.'],
    [`How much does court marriage in ${city} cost?`, 'Request a quote for your circumstances. Confirm the service scope, separate official charges and whether certificate assistance, translation or delivery is included before payment.'],
    ['Can everything be completed on the appointment day?', 'The nikah appointment and completion of registration or certificate work can have different timelines. Ask for a stage-by-stage schedule based on document readiness and the relevant office’s process.'],
    ['What if one partner is overseas?', 'Explain where each partner is located before choosing an arrangement. Remote participation, representation and acceptance of documents abroad need individual review. Explore our online nikah service for a focused enquiry.'],
    ['Will we receive a marriage certificate?', 'Confirm which marriage records are included in the quoted service. If a separate certificate is required, discuss the relevant application and any additional fee or follow-up arrangements.'],
    [`How do we start a court marriage enquiry in ${city}?`, 'Share your city, preferred date, the location of both partners and the service you need. Start by discussing the document checklist and appointment availability before sending sensitive records.'],
  ]
}

export function CourtCityHero({ city }) {
  const copy = cityCopy[city]
  return <div className="karachi-hero-description"><h2>{copy.heading}</h2><p className="hero-text">{copy.intro}</p><h3>Nikah Arrangements, Marriage Registration &amp; Fees</h3><p className="hero-text">Discuss preparation of your Nikah Nama, the registration steps to coordinate with the relevant Nikah Registrar and Union Council, and any <Link href="/marriage-certificate">marriage certificate assistance</Link> you need afterwards. Request a quote explaining the included services, separate charges and expected timeline for each stage. Review personal details and agreed terms before signing, and clarify how your completed marriage records will be provided.</p></div>
}

export function CourtCityDetails({ city }) {
  const copy = cityCopy[city]
  const requirements = [
    ['Age, eligibility & consent', city === 'Islamabad' ? copy.jurisdiction + ' Both partners must freely agree to marry.' : 'Have the current Punjab age and eligibility requirements checked against the identity and age evidence of both partners. Each partner must freely agree to marry; disclose any legal issue affecting eligibility before booking.'],
    ['Identity documentation', 'Prepare current CNICs, NICOPs or passports, as applicable. Confirm which originals and copies are required and resolve inconsistencies in names or other personal details before paperwork is finalised.'],
    ['Witness arrangements', 'Confirm the applicable nikah witness requirements with the person conducting the ceremony. Prepare witness identity details and establish attendance arrangements before the appointment.'],
    ['Haq Mehr & Nikah Nama terms', 'Agree the Haq Mehr and payment arrangements, and discuss any other marriage terms to be recorded. Both partners should understand the entries before signing the Nikah Nama.'],
    ['Previous marital status', 'Provide relevant divorce or deceased spouse’s death records for review if previously married. An existing marriage, incomplete records or uncertainty about marital status requires individual legal review.'],
    ['Additional supporting paperwork', 'Ask whether photographs, a free-will affidavit, translations or other records are required in your case. Foreign nationality and overseas participation need a tailored checklist.'],
  ]
  const steps = [
    ['Initial consultation', `Explain your plans for ${city}, the location of both partners and your preferred timing. Raise questions about eligibility, previous marriage or overseas documentation before arranging attendance.`],
    ['Document review & service confirmation', 'Review identity and supporting records, resolve missing information and confirm the checklist. Agree the service scope, fee, venue and attendance arrangements before booking.'],
    ['Nikah Nama preparation', 'Check names, identification details, witness information, Haq Mehr and agreed terms. Ask for an explanation of any entry you do not understand before signing.'],
    ['Nikah formalities', 'Complete the agreed nikah arrangements with voluntary consent and applicable witness participation. Confirm how the ceremony and signing will be coordinated.'],
    ['Marriage registration', 'Confirm who will coordinate registration with the relevant licensed Nikah Registrar and Union Council. Ask how submission and completion will be tracked.'],
    ['Records & certificate follow up', 'Establish which copies will be provided and when. Discuss any separate certificate request, translation, delivery or receiving-authority requirements before the service concludes.'],
  ]
  return <section className="karachi-details section-pad" aria-labelledby="city-details-title">
    <div className="section-intro"><p className="eyebrow">Your local service guide</p><h2 id="city-details-title">Court Marriage in {city}: Requirements, Procedure &amp; Fees</h2><p className="intro-text">Prepare for your nikah and registration with a clear checklist and an agreed service scope.</p></div>
    <div className="karachi-detail-grid city-local-details"><article><h3>{copy.localTitle}</h3><p>{copy.local}</p></article><article><h3>Local requirements for {city}</h3><p>{copy.jurisdiction}</p><p>This guide covers preparation for a Muslim nikah and registration. Other personal-law circumstances or separate court proceedings need individual advice.</p>{city === 'Islamabad' && <p className="legal-reference"><a href="https://pakistancode.gov.pk/pdffiles/administratorecc8e12e1de9dfa4925e655c9cd5a385.pdf" target="_blank" rel="noopener noreferrer">Islamabad Capital Territory Child Marriage Restraint Act, 2025</a></p>}</article></div>
    <section className="karachi-requirements" id="court-marriage-requirements"><h2>Court Marriage Requirements in {city}</h2><p>Confirm your checklist before travelling or making an appointment. Requirements depend on identity records, marital status and the proposed arrangements.</p><dl className="requirements-list">{requirements.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>
    <section className="karachi-procedure" id="court-marriage-procedure"><h2>Court Marriage Procedure in {city}</h2><p>The service generally involves nikah preparation, solemnisation and registration. A separate court application or protection matter should be assessed individually; it is not an automatic stage of every marriage.</p><ol className="procedure-list">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol><p className="legal-reference">Muslim marriage registration is addressed by <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Section 5 of the Muslim Family Laws Ordinance, 1961</a>.</p></section>
    <div className="karachi-detail-grid"><article><h3>Court Marriage Fees in {city}</h3><p>Request an itemised quote for the service you need. Clarify document preparation, nikah coordination and registration follow up, alongside any separate official charges. If certificate work, translation or delivery is needed, confirm whether it is included or quoted separately.</p><p>A starting price does not explain the complete scope. Before payment, confirm the agreed tasks, the recipient and how you will receive an acknowledgement.</p></article><article><h3>Appointment &amp; Completion Timelines</h3><p>Confirm the nikah appointment separately from registration and certificate completion. Explain any travel or application deadline at the start, and ask which steps depend on document readiness or an office’s processing schedule.</p><p>If you need assistance from another location, explore our <Link href="/online-nikah">online nikah service for overseas Pakistanis</Link>. For existing records or post-marriage documentation, visit our <Link href="/marriage-certificate">marriage certificate service</Link>.</p></article></div>
    {city === 'Lahore' && <LahoreCourtGuide />}
    <div className="karachi-quote-strip"><div><p className="eyebrow">Discuss your plans</p><h3>Request a Court Marriage Quote for {city}</h3><p>Share your preferred date and documentation needs to discuss the next step.</p></div><a className="button button-primary" href="#contact">Request a Quote <span aria-hidden="true">↗</span></a></div>
    <nav className="guide-links" aria-label="Court marriage in other cities">{['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'].filter(other => other !== city).map(other => <Link key={other} href={`/court-marriage/${other.toLowerCase()}`}>Court Marriage in {other}<span aria-hidden="true">↗</span></Link>)}<Link href="/court-marriage">All Court Marriage Services<span aria-hidden="true">↗</span></Link></nav>
  </section>
}

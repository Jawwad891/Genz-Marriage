import Link from 'next/link'
import { courtMarriageDocuments } from '../lib/court-documents'

const preparation = [
  ['Identity details', 'For court marriage in Karachi, start by reviewing the current identity documents each partner holds. Check that names and other personal details are consistent before paperwork is prepared, and ask which originals and copies to bring.'],
  ['Previous marital status', 'When enquiring about court marriage in Karachi, mention any previous marriage during the initial discussion. Ask which supporting records need review and resolve missing or inconsistent information before confirming your appointment.'],
  ['Witnesses & agreed terms', 'Discuss witness arrangements and the terms both partners wish to record, including Haq Mehr. Ask how participation and attendance will be coordinated for your circumstances.'],
]

const requirements = [
  ['Age & voluntary consent', 'Both partners must be at least 18 for marriage in Sindh. Each person must freely agree to the marriage. Identity and age evidence should be reviewed before an appointment is confirmed.'],
  ...courtMarriageDocuments,
  ['Haq Mehr & marriage terms', 'Agree the Haq Mehr and how it will be recorded, including payment arrangements. Both partners should understand the Nikah Nama entries and any agreed conditions before signing.'],
]

const procedure = [
  ['Court Marriage Consultation in Karachi', 'Begin your court marriage enquiry by explaining where both partners are located, their nationality, marital status and preferred date. Identify any legal questions or document issues before arranging attendance.'],
  ['Review Court Marriage Documents', 'Have identity, age and relevant marital status records checked. Receive a checklist of any missing paperwork and confirm the service scope, fee and appointment location.'],
  ['Prepare the Nikah Nama', 'Check personal details, witness information, Haq Mehr and agreed marriage terms. Read the entries and ask for explanations before the document is signed.'],
  ['Complete the nikah formalities', 'Proceed with the agreed nikah arrangements, voluntary consent and applicable witness requirements. Confirm the participation and signing arrangements with the person conducting the nikah.'],
  ['Arrange marriage registration', 'Confirm who will handle registration through the relevant licensed Nikah Registrar and Union Council. Section 5 of the Muslim Family Laws Ordinance, 1961 requires registration of Muslim marriages.'],
  ['Receive records & plan follow up', 'Confirm which Nikah Nama copies and registration records will be provided and when. If you need a marriage certificate, translation or overseas documentation, agree those additional steps separately.'],
]

const advantages = [
  ['Quick', 'With complete documents, the affidavits and nikah are usually completed on the same day, without months of event planning.'],
  ['Private', 'Only the couple, the witnesses and the people conducting the nikah need to be present. Your details are handled confidentially.'],
  ['Affordable', 'There is no hall, catering or large event to pay for. You pay for the legal work and registration, not a celebration.'],
  ['Based on Free Consent', 'The process centres on both partners freely agreeing to marry, recorded through a free will affidavit and the Nikah Nama.'],
  ['Officially Recorded', 'Once the Nikah Nama is registered with the Union Council, you can obtain the NADRA marriage certificate (MRC).'],
  ['Valid Across Pakistan', 'A lawfully performed and registered nikah in Karachi is recognised throughout Pakistan and can be used for passports, visas and family records.'],
]

const comparison = [
  ['Ceremony', 'Simple nikah with the couple and witnesses', 'Family event, often with several functions'],
  ['Legal basis', 'Nikah and Nikah Nama, registered with the Union Council', 'The same nikah and Nikah Nama registration'],
  ['Time needed', 'Usually completed in a day with complete documents', 'Weeks or months of planning'],
  ['Cost', 'Rs. 22,000 to Rs. 35,000 with us', 'Usually much higher because of the event'],
  ['Documents', 'CNICs, photos, witnesses, free will affidavit', 'CNICs, photos and witnesses'],
  ['Privacy', 'Private and confidential', 'Public, with a large guest list'],
]

const tips = [
  ['Match your CNIC details', 'Check that names, fathers’ names and dates of birth match your CNICs exactly before the Nikah Nama is filled in.'],
  ['Bring originals and copies', 'Keep your original CNICs, copies and at least six passport-sized photos each ready before the appointment day.'],
  ['Arrange your witnesses early', 'Confirm two adult male witnesses with their CNICs, or tell us in advance if you need help arranging them.'],
  ['Agree the Haq Mehr in advance', 'Decide the Haq Mehr amount and how it will be paid before the day, so it is recorded clearly.'],
  ['Read the Nikah Nama before signing', <>Go through every column and ask about anything unclear. Our guide to the <Link href="/blog/nikah-nama-columns-explained">Nikah Nama columns</Link> explains each entry.</>],
  ['Make sure it is registered', <>A nikah that is not registered with the Union Council causes problems later. After registration, apply for the <Link href="/marriage-certificate">NADRA marriage certificate</Link>.</>],
  ['Avoid prices that skip registration', <>Very low “all-inclusive” offers often leave out registration. See what a fair quote covers in our <Link href="/blog/court-marriage-fee-in-pakistan">court marriage fee guide</Link>.</>],
]

export default function KarachiCourtDetails() {
  return <section className="karachi-details section-pad" aria-labelledby="karachi-details-title">
    <div className="section-intro"><p className="eyebrow">Prepare for your appointment</p><h2 id="karachi-details-title">Court Marriage in Karachi: Documents, Process &amp; Fees</h2><p className="intro-text">Prepare for court marriage in Karachi with a focused discussion of your documents, nikah arrangements, registration and fees.</p></div>
    <div className="karachi-preparation">{preparation.map(([title, text], index) => <article key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <section className="karachi-requirements" id="court-marriage-requirements" aria-labelledby="requirements-title">
      <h2 id="requirements-title">Court Marriage Requirements in Karachi</h2>
      <p>This court marriage checklist covers preparation for a Muslim nikah and registration in Karachi. Confirm the documents and arrangements that apply to your case before booking.</p>
      <dl className="requirements-list">{requirements.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
      <p className="legal-reference">Age requirement: <a href="https://www.sindhlaws.gov.pk/setup/publications_SindhCode/PUB-15-000083.pdf" target="_blank" rel="noopener noreferrer">Sindh Child Marriages Restraint Act, 2013</a>.</p>
    </section>
    <section className="karachi-procedure" id="court-marriage-procedure" aria-labelledby="procedure-title">
      <h2 id="procedure-title">Court Marriage Procedure in Karachi: Step by Step</h2>
      <p>The court marriage procedure in Karachi generally involves preparing and solemnising a nikah, followed by marriage registration. Any separate court application or legal protection matter should be assessed individually; it is not an automatic stage of every marriage.</p>
      <ol className="procedure-list">{procedure.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <p className="legal-reference">Registration reference: <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Muslim Family Laws Ordinance, 1961, Section 5</a>.</p>
      <a className="text-link" href="#contact">Discuss your checklist and appointment <span aria-hidden="true">↗</span></a>
    </section>
    <section className="lawyer-experience" aria-labelledby="lawyer-title">
      <div className="lawyer-years"><strong>30</strong><span>Years of legal experience</span></div>
      <div><p className="eyebrow">Experienced legal support</p><h2 id="lawyer-title">Court Marriage Handled by a Lawyer with 30 Years of Experience</h2><p>Your court marriage in Karachi is handled under the supervision of our senior lawyer, who brings 30 years of legal experience to every case. From checking your documents and preparing the free will affidavit to the nikah and Union Council registration, an experienced lawyer makes sure each step is done correctly the first time.</p></div>
    </section>
    <section className="karachi-advantages" aria-labelledby="advantages-title">
      <h2 id="advantages-title">Advantages of Court Marriage in Karachi</h2>
      <div className="karachi-preparation">{advantages.map(([title, text], index) => <article key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="comparison-section" aria-labelledby="comparison-title">
      <h2 id="comparison-title">Court Marriage vs Traditional Marriage</h2>
      <p>Court marriage is not marriage inside a courtroom. Both a court marriage and a traditional wedding rest on the same nikah and Nikah Nama registration; the difference is in how the ceremony is arranged.</p>
      <div className="table-scroll"><table className="info-table"><thead><tr><th scope="col">Aspect</th><th scope="col">Court Marriage</th><th scope="col">Traditional Marriage</th></tr></thead><tbody>{comparison.map(([aspect, court, traditional]) => <tr key={aspect}><th scope="row">{aspect}</th><td>{court}</td><td>{traditional}</td></tr>)}</tbody></table></div>
    </section>
    <section className="tips-section" aria-labelledby="tips-title">
      <h2 id="tips-title">Tips for a Smooth Court Marriage in Karachi</h2>
      <ol className="tips-list">{tips.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <div className="karachi-detail-grid">
      <article><h3>What Do Court Marriage Services in Karachi Include?</h3><p>Discuss the court marriage support you need in Karachi for document preparation, nikah coordination and registration follow up. Confirm who will handle each agreed task, where you need to attend and which records you can expect to receive. If your situation requires individual legal advice, raise that during the consultation so the appropriate professional involvement can be discussed.</p><p>Before booking, ask for the agreed scope in writing. This gives you a useful reference for appointment arrangements, outstanding documents and any additional work you may request later.</p></article>
      <article><h3>How much does court marriage in Karachi cost?</h3><p>Our court marriage fee in Karachi is Rs. 22,000 to Rs. 35,000. Where your case falls in that range depends on your documents and the services you need, and we confirm the exact amount in an itemised quote before you book. Certificate assistance, translation, delivery or further documentation may need their own arrangements; establish what is included before making a payment.</p><p>If you have a preferred date or a travel deadline, mention it when requesting the quote. Confirm both the fee and the proposed schedule before committing to an appointment.</p><a className="text-link" href="#contact">Request your court marriage quote <span aria-hidden="true">↗</span></a></article>
      <article><h3>Court Marriage in Karachi: Appointment & Records</h3><p>For your court marriage appointment in Karachi, begin with an initial discussion, then prepare the confirmed document checklist and agree the attendance arrangements. Review the information and terms entered in the Nikah Nama before signing. Clarify the registration follow up, how you will receive updates and which copies will be provided.</p><p>Keep ceremony scheduling and document completion timelines separate when planning. Ask what depends on your preparation and what needs confirmation from the relevant office.</p></article>
      <article><h3>Marriage Certificates After Court Marriage in Karachi</h3><p>If your marriage record will be used for an overseas application, share the receiving organisation’s document checklist at the beginning. Explain where both partners are located and whether you need help with an existing record or a new marriage arrangement.</p><p>Continue to our <Link href="/marriage-certificate">marriage certificate service</Link> for certificate enquiries, or explore our <Link href="/online-nikah">online nikah service</Link> if one partner lives abroad. You can also compare the wider <Link href="/court-marriage">court marriage services</Link> before discussing your location specific requirements.</p></article>
    </div>
    <div className="karachi-quote-strip"><div><p className="eyebrow">Your next step</p><h3>Discuss Your Court Marriage in Karachi</h3><p>Share your preferred court marriage date in Karachi, location and documentation needs to start your enquiry.</p></div><a className="button button-primary" href="#contact">Request a Quote <span aria-hidden="true">↗</span></a></div>
  </section>
}

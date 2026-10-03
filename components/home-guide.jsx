import Link from 'next/link'

export const homeGuideSections = [
  {
    id: 'choosing-your-service', title: 'One place to plan your marriage and documentation',
    paragraphs: [
      'Getting married involves personal decisions, practical arrangements and documents that may be needed long after the ceremony. GenZ Marriage brings court marriage support, online nikah guidance and marriage certificate assistance into one clear starting point. You can explore the service that matches your situation, understand which questions to ask and prepare for a more useful conversation. Whether you are arranging a marriage locally, coordinating with a partner abroad or looking for help with an existing marriage record, begin with your actual requirement rather than choosing a package from a headline.',
      'The homepage introduces our services across Karachi, Lahore, Islamabad and Rawalpindi. Each service page gives you a focused place to continue your enquiry, while city pages help you explain where you intend to proceed. Your location, nationality, identity documents and previous marital status can affect the next steps. Share these details during the initial discussion so that advice, document preparation and scheduling can be considered together. A well organised beginning helps both partners understand what they are arranging and what still needs confirmation.'
    ], links: [['Explore court marriage support', '/court-marriage'], ['Explore online nikah services', '/online-nikah'], ['Marriage certificate assistance', '/marriage-certificate']]
  },
  {
    id: 'court-marriage-guide', title: 'Court marriage support, from enquiry to preparation',
    paragraphs: [
      'If you are searching for court marriage services, you may already have questions about documents, appointments, witnesses, costs and the records you will receive. Start by describing your circumstances and asking for an explanation of the proposed process. Establish which arrangements concern the nikah, which concern paperwork and which involve registration or additional legal advice. Understanding those distinctions helps you compare services and avoids relying on a promise that everything will be completed in one visit. Both partners should have time to understand the arrangements before committing to a date.',
      'Preparation should also cover how your names and identification details will appear on the marriage documents, how you wish to record agreed terms and who will coordinate each stage. Ask which originals you should bring, whether copies are required and how any missing or inconsistent records will be handled. If there is a sensitive family situation or a concern about personal safety, raise it privately before making attendance arrangements. A case requiring individual legal advice should be discussed with an appropriately qualified professional before the practical steps are finalised.'
    ], links: [['View the court marriage service page', '/court-marriage']]
  },
  {
    id: 'court-marriage-cities', title: 'Court marriage in Karachi, Lahore, Islamabad and Rawalpindi',
    paragraphs: [
      'For couples planning court marriage in Karachi, the first useful step is a focused conversation about the intended location, available documents and preferred timing. Karachi is a large city, so establish where you will need to attend and who will confirm the appointment before travelling. Ask whether the quoted service covers document preparation, nikah coordination, registration follow up or only selected parts of the process. Keep a written list of outstanding requirements so that both partners know what must be ready before the appointment can go ahead.',
      'The same careful planning matters when considering Lahore, Islamabad or Rawalpindi. Choose the city page that reflects where you intend to proceed, rather than assuming that every location follows an identical arrangement. If one partner lives in a different city, discuss travel and attendance early. Ask which office or authority is relevant to your record and how you will receive updates after the initial appointment. City pages provide a direct route to a location specific enquiry; the actual availability, fee and document checklist should be confirmed for your circumstances.'
    ], links: [['Court marriage in Karachi', '/court-marriage/karachi'], ['Court marriage in Lahore', '/court-marriage/lahore'], ['Court marriage in Islamabad', '/court-marriage/islamabad'], ['Court marriage in Rawalpindi', '/court-marriage/rawalpindi']]
  },
  {
    id: 'online-nikah-guide', title: 'Online nikah services for couples planning at a distance',
    paragraphs: [
      'When partners are in different cities or countries, arranging a nikah can involve more coordination than choosing a video call time. Online nikah enquiries should begin with where each person is located, their citizenship and the purpose for which the resulting documents will be used. Explain whether you are preparing for family records, travel, an overseas application or another administrative requirement. The arrangements and the acceptance of documents need to be considered separately, particularly when an authority outside Pakistan will later review the marriage record.',
      'Before confirming a remote arrangement, ask how identity and consent will be established, what participation is expected and which witness or representation requirements need professional review. You should also understand how the nikah documentation will be prepared and what registration steps follow. Do not leave questions about spelling, signatures, delivery or document copies until after the appointment. A clear preparation checklist helps everyone involved understand their role, while a realistic schedule leaves room for document review and the needs of people joining from different time zones.'
    ], links: [['Read about online nikah services', '/online-nikah']]
  },
  {
    id: 'online-nikah-countries', title: 'Online nikah for overseas Pakistanis, country by country',
    paragraphs: [
      'Most online nikah enquiries come from Pakistanis living abroad whose partner is in Pakistan. The nikah takes place in Pakistan with a wakeel, witnesses and the nikah khawan, while the partner abroad joins by video. The Nikah Nama is then registered with the Union Council and the NADRA marriage certificate is issued. What changes from country to country is the embassy that attests your power of attorney, the time difference for the ceremony and how the marriage certificate is used afterwards.',
      'Gulf countries such as the UAE, Saudi Arabia, Oman and Qatar usually need the certificate attested by MOFA Pakistan and their own embassy before a family visa. The USA and Canada have specific rules on proxy and remote marriages for immigration, so couples planning sponsorship should read those points before booking. Each country page below explains the key steps for that country.'
    ], links: [['Online nikah from the UAE', '/online-nikah/uae'], ['Online nikah from Saudi Arabia', '/online-nikah/saudi-arabia'], ['Online nikah from the UK', '/online-nikah/uk'], ['Online nikah from the USA', '/online-nikah/usa'], ['Online nikah from Canada', '/online-nikah/canada']]
  },
  {
    id: 'certificate-guide', title: 'Marriage certificate assistance and existing marriage records',
    paragraphs: [
      'You may already be married and need help understanding which document an employer, embassy or other organisation is requesting. Begin by checking the exact wording of that request. A nikah nama, a registered record, a marriage certificate, a translation and an attested copy can serve different administrative purposes. Sending whichever document you have without checking the requirement can lead to additional questions. Tell us which records are currently available and share the receiving organisation’s checklist so that the discussion can focus on the specific document you need.',
      'For a certificate enquiry, it is useful to know where and when the marriage took place, which office holds the record and whether the names and identity details match your current documents. If there is an error, ask about the appropriate correction process rather than changing a copy yourself. If the record is missing, clarify what evidence is available and which authority needs to be approached. Keep your original documents secure, and ask what copies, authorisations or attendance arrangements may be needed before starting a request.'
    ], links: [['Visit the marriage certificate page', '/marriage-certificate']]
  },
  {
    id: 'document-preparation', title: 'Prepare your documents before choosing an appointment',
    paragraphs: [
      'Document preparation is easier when you organise the information before the first detailed consultation. Make a list of the identity documents each partner holds, the spellings used on those documents and any existing marriage related records that need review. Note expiry dates and any differences in names, addresses or identification numbers. Do not assume that a small discrepancy will be ignored. Ask how the information should be presented consistently and which supporting records may be required to explain a difference before paperwork is prepared.',
      'Your checklist should be tailored to your circumstances. Previous marriage, foreign nationality, residence abroad or a missing original document can raise questions that a generic website list cannot resolve. Ask for confirmation of the applicable requirements before travelling or paying for arrangements. Prepare your questions about witnesses, agreed marriage terms and the records you will receive alongside the document list. This approach makes the consultation more productive and gives both partners a shared understanding of what is ready, what remains outstanding and who will handle the next step.'
    ], links: [['Discuss your document requirements', '/#contact']]
  },
  {
    id: 'registration-follow-up', title: 'Understand nikah documentation and registration follow up',
    paragraphs: [
      'The ceremony and the paperwork deserve equal attention when planning a marriage. Ask how the nikah nama will be completed, when you can review the entered details and which copies will be provided. Read the document carefully before signing and seek an explanation of any entry you do not understand. Both partners should understand the recorded terms, including the agreed Haq Mehr arrangements. Keep your own clear record of the documents received so that later certificate enquiries can start from accurate information.',
      'Registration is a separate matter to discuss during preparation. Section 5 of the Muslim Family Laws Ordinance, 1961 addresses the registration of Muslim marriages and the role of licensed Nikah Registrars and Union Councils. Ask which registration arrangements apply to your circumstances, who will coordinate them and how completion will be confirmed. If a certificate is needed afterwards, establish whether requesting it is included in the service or requires a further step. Knowing this in advance helps you plan beyond the appointment and keep track of the marriage record.'
    ], links: [['Plan marriage certificate follow up', '/marriage-certificate']]
  },
  {
    id: 'fees-and-timing', title: 'Ask for a clear scope, fee and realistic timeline',
    paragraphs: [
      'A useful quotation explains what you are paying for. Ask for the service fee, any separate official charges and any optional work to be listed clearly. Depending on the enquiry, document preparation, nikah coordination, registration follow up, certificate assistance, translation or delivery may need separate discussion. Compare the actual scope rather than choosing from a starting price alone. Before making a payment, confirm the recipient, the agreed service and how you will receive a receipt or other written acknowledgement of the arrangement.',
      'Timing also needs to be explained by stage. An appointment date does not necessarily tell you when registration, certificate issuance or an overseas document requirement will be completed. Ask what depends on your preparation, what depends on an authority and when you can expect an update. If you have a travel deadline, disclose it at the beginning so that the available options can be discussed realistically. Keep the confirmed schedule and outstanding tasks together, and ask how any change in requirements or availability will be communicated.'
    ], links: [['Request a service discussion', '/#contact']]
  },
  {
    id: 'overseas-planning', title: 'Planning ahead when your documents will be used abroad',
    paragraphs: [
      'If your marriage documents are intended for use outside Pakistan, begin with the receiving authority’s current instructions. Ask what form of marriage record is required and whether translation, attestation or further verification is part of its checklist. Share the purpose of the application during your enquiry, because a document prepared for local personal records may need additional work for another administrative process. The organisation reviewing your application decides what it accepts, so its requirements should guide your preparation from the outset.',
      'Check that the personal details on the requested marriage record align with the documents you will submit alongside it. Keep readable copies, note how originals will be handled and allow time for additional questions from the receiving authority. If either partner is abroad, discuss how information, authorisations and completed records will be exchanged securely. A written plan makes it easier to coordinate between locations and avoids treating document delivery as an afterthought. This is particularly useful when your application involves fixed appointments or a deadline that cannot easily be moved.'
    ], links: [['Explore online nikah coordination', '/online-nikah'], ['Explore certificate assistance', '/marriage-certificate']]
  },
  {
    id: 'start-your-enquiry', title: 'Start with the service and location that match your situation',
    paragraphs: [
      'Your first enquiry does not need to include every document. Start with your name, preferred contact method, city and the service you are interested in. Explain whether you are planning a new marriage or seeking documentation for an existing one, and mention any travel or application deadline. If a partner is overseas, include their location so that scheduling and document questions can be raised early. Avoid sending unnecessary sensitive records before understanding which information is needed and how it will be used.',
      'You can continue through the court marriage, online nikah or marriage certificate pages, or choose a city page for Karachi, Lahore, Islamabad or Rawalpindi. Use the contact section to bring your main questions into one conversation. Ask about the next practical step, the relevant checklist and what needs professional or official confirmation. The aim is to leave the discussion with a clear plan that both partners understand, including the documents to prepare, the arrangements to confirm and the point at which you should expect an update.'
    ], links: [['Court marriage support', '/court-marriage'], ['Online nikah guidance', '/online-nikah'], ['Marriage certificate enquiries', '/marriage-certificate'], ['Contact GenZ Marriage', '/#contact']]
  }
]

export default function HomeGuide() {
  return <section className="home-guide section-pad" aria-labelledby="guide-title">
    <div className="section-intro"><p className="eyebrow">Your marriage, thoughtfully planned</p><h2 id="guide-title">From your first question to your marriage records.</h2><p className="intro-text">Explore our services, prepare with clarity and find the right page for your next step.</p></div>
    <div className="guide-layout"><aside className="guide-toc"><p className="eyebrow">In this guide</p><nav aria-label="Marriage services guide">{homeGuideSections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</nav></aside>
      <div className="guide-content">{homeGuideSections.map((section) => <article id={section.id} key={section.id}><h3>{section.title}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.id === 'registration-follow-up' && <p className="guide-source">Registration reference: <a href="https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf" target="_blank" rel="noopener noreferrer">Muslim Family Laws Ordinance, 1961 — Pakistan Code</a>.</p>}<div className="guide-links">{section.links.map(([label, href]) => <Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}</div></article>)}</div>
    </div>
  </section>
}

// Blog posts. To add a post, add an object to the top of this array — the
// blog index, sitemap, homepage "Guides" section and post page update automatically.
//
// Section shape: { heading, paragraphs: [...], list?: [...], listTitle? }
// Links inside paragraphs: write [link text](/path) and it is rendered as an internal link.

export const blogPosts = [
  {
    slug: 'court-marriage-fee-in-pakistan',
    title: 'Court Marriage Fee in Pakistan 2026: What You Actually Pay For',
    metaTitle: 'Court Marriage Fee & Charges in Pakistan 2026 – Full Cost Breakdown',
    description: 'Court marriage charges in Pakistan explained: lawyer and service fee, affidavits, nikah registrar, Union Council registration, NADRA certificate, attestation and what changes the total.',
    excerpt: 'What makes up the cost of a court marriage in Pakistan, which charges are official and which are service fees, and how to get an itemised quote before you book.',
    date: '2026-10-06',
    readingMinutes: 6,
    related: [['Court Marriage in Pakistan', '/court-marriage'], ['Court Marriage in Karachi', '/court-marriage/karachi'], ['NADRA Marriage Certificate', '/marriage-certificate']],
    sections: [
      {
        heading: 'Why there is no single court marriage fee',
        paragraphs: [
          'One of the first questions couples ask is how much a court marriage costs in Pakistan. The honest answer is that the total depends on what you need done. A [court marriage](/court-marriage) is not one government fee: it is a nikah plus paperwork, and each part has its own charge. Some of these are official charges paid to the Union Council or NADRA, and some are professional fees for the lawyer, nikah khawan and the people coordinating the work.',
          'That is why two couples in the same city can receive very different quotes. A couple with complete CNICs who only need the nikah and registration will pay less than a couple who also need a NADRA certificate, MOFA attestation, an English translation and courier delivery abroad.',
        ],
      },
      {
        heading: 'What the court marriage charges usually include',
        paragraphs: ['A complete court marriage quote is normally built from the items below. Ask for each one to be listed separately so you can see what is included.'],
        list: [
          'Lawyer or service fee — preparing documents, checking CNICs and coordinating the day.',
          'Free-will affidavits — stamp paper and attestation by an oath commissioner for both partners.',
          'Nikah khawan and nikah registrar — performing the nikah and completing the Nikah Nama.',
          'Union Council registration — registering the Nikah Nama, as required by Section 5 of the Muslim Family Laws Ordinance, 1961.',
          'NADRA marriage certificate — the computerised marriage registration certificate issued after registration.',
          'Optional extras — MOFA attestation, embassy attestation, certified English translation and courier delivery.',
        ],
      },
      {
        heading: 'Official charges vs service fees',
        paragraphs: [
          'Official charges are the amounts collected by government offices such as the Union Council and NADRA. They are set by those offices, can differ between Union Councils and can change, so a reliable provider shows them separately rather than hiding them inside one package price.',
          'Service fees cover the professional work: the lawyer, document preparation, the nikah arrangements and follow-up until your certificate is issued. This is the part that varies most between providers, so compare what is actually included rather than the headline price.',
        ],
      },
      {
        heading: 'What makes the total higher or lower',
        list: [
          'City — fees and Union Council practice differ between Karachi, Lahore, Islamabad and Rawalpindi.',
          'Whether you want the NADRA marriage certificate included or will collect it yourself later.',
          'Previous marriage — a divorce or death certificate must be checked, and a man with an existing wife needs Arbitration Council permission.',
          'Mistakes in CNICs or names that need correcting before the Nikah Nama is filled in.',
          'One partner abroad — a [wakeel nikah](/blog/wakeel-nikah-power-of-attorney-overseas-pakistanis) needs an attested power of attorney.',
          'Foreign nationals — extra checks on passports and how the home country will recognise the marriage.',
          'Documents for use abroad — MOFA and embassy attestation, translation and international courier.',
          'Urgency — a fixed travel or visa deadline can affect scheduling.',
        ],
      },
      {
        heading: 'Court marriage charges in Karachi, Lahore, Islamabad and Rawalpindi',
        paragraphs: [
          'The steps are the same across Pakistan, but each city has its own courts, oath commissioners and Union Councils, and local practice affects both the cost and the timeline. Sindh and Islamabad Capital Territory also require both partners to be at least 18. See the city pages for local details: [Karachi](/court-marriage/karachi), [Lahore](/court-marriage/lahore), [Islamabad](/court-marriage/islamabad) and [Rawalpindi](/court-marriage/rawalpindi).',
        ],
      },
      {
        heading: 'How to avoid hidden charges',
        listTitle: 'Before you pay anything, make sure you have:',
        list: [
          'A written, itemised quote showing official charges and service fees separately.',
          'Confirmation of whether Union Council registration and the NADRA certificate are included.',
          'A clear timeline for registration and the certificate, not just the nikah date.',
          'The name of the person receiving payment and a receipt for every payment.',
          'Your own copy of the Nikah Nama, checked for spelling and CNIC numbers before signing.',
        ],
        paragraphs: [
          'Be careful with very low “all-inclusive” prices that leave out registration. An unregistered nikah causes problems later with NADRA, passports and visas, and fixing it costs more than doing it properly the first time — see our guide on [registering an old nikah](/blog/unregistered-nikah-how-to-register-old-nikah-pakistan).',
        ],
      },
      {
        heading: 'Get an itemised court marriage quote',
        paragraphs: [
          'Send us your city, preferred date, both partners’ marital status and whether you need the NADRA certificate, attestation or translation. We reply on WhatsApp with a document checklist and an itemised quote, so you know the full cost before the day. Overseas Pakistanis can also ask about an [online nikah](/online-nikah).',
        ],
      },
    ],
    faqs: [
      ['How much does court marriage cost in Pakistan?', 'There is no single fixed fee. The total is made up of the service or lawyer fee, affidavits, the nikah registrar, Union Council registration and, if needed, the NADRA certificate, attestation and translation. Ask for an itemised quote for your city.'],
      ['Are Union Council and NADRA charges included in the court marriage fee?', 'It depends on the provider. Official Union Council and NADRA charges are separate from the service fee, so always ask whether registration and the NADRA marriage certificate are included in the quote.'],
      ['Is court marriage cheaper than a family nikah?', 'The paperwork costs are similar because both need a Nikah Nama and Union Council registration. Court marriage is usually cheaper overall because there is no large event, but the documentation should not be skipped.'],
      ['Do court marriage charges differ by city?', 'Yes. Karachi, Lahore, Islamabad and Rawalpindi have different courts and Union Councils, and local practice affects both the cost and the time taken for registration.'],
      ['Does an overseas Pakistani pay more for court marriage?', 'Usually a little more, because a wakeel nikah needs an attested power of attorney, and documents for use abroad often need MOFA attestation, translation and courier delivery.'],
      ['Can I pay the court marriage fee in instalments?', 'Payment arrangements depend on the provider. Whatever you agree, get a receipt for each payment and a written list of what has been paid for.'],
    ],
  },
  {
    slug: 'wakeel-nikah-power-of-attorney-overseas-pakistanis',
    title: 'Wakeel Nikah & Power of Attorney: A Guide for Overseas Pakistanis',
    metaTitle: 'Wakeel Nikah & Power of Attorney for Overseas Pakistanis',
    description: 'How overseas Pakistanis appoint a wakeel for nikah in Pakistan: who can be a wakeel, the power of attorney, witnesses, the Nikah Nama columns and registration.',
    excerpt: 'Living abroad and getting married in Pakistan? Here is how appointing a wakeel works, what the power of attorney should say and how the nikah is registered.',
    date: '2026-10-04',
    readingMinutes: 6,
    related: [['Online Nikah for Overseas Pakistanis', '/online-nikah'], ['Online Nikah from the UAE', '/online-nikah/uae'], ['NADRA Marriage Certificate', '/marriage-certificate']],
    sections: [
      {
        heading: 'What is a wakeel nikah?',
        paragraphs: [
          'A wakeel (also written vakil) is a person you authorise to act for you in the nikah. When the bride or groom lives abroad and cannot travel, their wakeel attends the nikah in Pakistan, gives or accepts the proposal on their behalf and signs the Nikah Nama. The partner abroad can usually join the ceremony by video, but the legal acts are carried out through the wakeel.',
          'This is the arrangement most overseas Pakistanis mean when they talk about an [online nikah](/online-nikah). The ceremony takes place in Pakistan, the Nikah Nama is registered with the Union Council, and the NADRA marriage certificate is issued in the normal way.',
        ],
      },
      {
        heading: 'Who can be a wakeel?',
        paragraphs: ['Any sane adult whom you trust can be appointed. In practice, families usually choose a close relative such as a father, brother or uncle who will be present in Pakistan on the day.'],
        listTitle: 'Before choosing a wakeel, check that they:',
        list: [
          'Have a valid CNIC and will be physically present at the nikah.',
          'Understand the terms you have agreed, especially the Haq Mehr and any conditions.',
          'Will follow your written instructions and not change any term on the day.',
          'Are available afterwards to sign or collect documents for registration if needed.',
        ],
      },
      {
        heading: 'The power of attorney',
        paragraphs: [
          'The appointment is normally made in writing through a special power of attorney. It should clearly name you, your wakeel and the person you are marrying, and state that the wakeel is authorised to accept or offer the nikah on your behalf and sign the Nikah Nama.',
          'It is good practice for the power of attorney to also record the agreed Haq Mehr and any special conditions, so the wakeel has no room to agree to something different. Keep it specific to this one marriage rather than a general authority.',
          'Most clients have the power of attorney attested at the Pakistan embassy or consulate in their country. Pakistan also joined the Hague Apostille Convention in 2023, so in some countries a locally notarised and apostilled document may be an option. Requirements vary between nikah registrars and Union Councils, so confirm the accepted format before you sign anything.',
        ],
      },
      {
        heading: 'Witnesses and the Nikah Nama',
        paragraphs: [
          'The Nikah Nama has separate columns for the bride’s wakeel, the groom’s wakeel and the witnesses to each appointment, as well as the witnesses to the marriage itself. Make sure the names and CNIC details of everyone involved are ready before the day. Our guide to [Nikah Nama columns](/blog/nikah-nama-columns-explained) explains what each part records.',
        ],
      },
      {
        heading: 'Step-by-step: wakeel nikah from abroad',
        list: [
          'Agree the Haq Mehr and any conditions with your partner and both families.',
          'Choose your wakeel and confirm the witnesses in Pakistan.',
          'Prepare and attest the power of attorney in the format the registrar will accept.',
          'Send the original (or the accepted copy) to Pakistan with copies of your CNIC/NICOP and passport.',
          'Hold the nikah in Pakistan with the nikah khawan, your wakeel and witnesses; join by video if you wish.',
          'Register the Nikah Nama with the Union Council and obtain the NADRA marriage certificate.',
        ],
      },
      {
        heading: 'Will a wakeel nikah work for my visa?',
        paragraphs: [
          'This depends on the country, not on Pakistan. Gulf countries usually focus on attestation of the NADRA certificate, while the USA and Canada have specific rules on proxy marriages for immigration. Read the section for your country on our pages for the [USA](/online-nikah/usa), [Canada](/online-nikah/canada) and the [UK](/online-nikah/uk) before you book.',
        ],
      },
    ],
    faqs: [
      ['Can the bride appoint a wakeel too?', 'Yes. Either partner can appoint a wakeel. The Nikah Nama has separate columns for the bride’s and the groom’s wakeel and the witnesses to each appointment.'],
      ['Can I join my wakeel nikah on video?', 'Yes, many couples do. The wakeel still carries out the legal acts in person in Pakistan; the video call lets you take part and lets the family see you.'],
      ['Where do I attest the power of attorney?', 'Usually at the Pakistan embassy or consulate in your country of residence. Confirm with the nikah registrar or Union Council which format they accept before signing.'],
    ],
  },
  {
    slug: 'unregistered-nikah-how-to-register-old-nikah-pakistan',
    title: 'Unregistered Nikah in Pakistan: How to Register an Old Nikah',
    metaTitle: 'Unregistered Nikah? How to Register an Old Nikah in Pakistan',
    description: 'Was your nikah never registered with the Union Council? What it means, the problems it causes for NADRA, passports and visas, and how late registration works.',
    excerpt: 'A nikah that was never registered causes problems with NADRA, passports and visas. Here is what late registration involves and what documents to prepare.',
    date: '2026-10-04',
    readingMinutes: 5,
    related: [['NADRA Marriage Certificate', '/marriage-certificate'], ['Court Marriage in Pakistan', '/court-marriage']],
    sections: [
      {
        heading: 'Why registration matters',
        paragraphs: [
          'Under Section 5 of the Muslim Family Laws Ordinance, 1961, every Muslim marriage in Pakistan must be registered with the Union Council through a licensed nikah registrar. Registration is what puts your marriage into the official record and allows NADRA to issue the computerised marriage registration certificate.',
          'Many couples only discover the nikah was never registered when they need the certificate — for a family registration certificate, a spouse’s name on a CNIC or passport, a visa or a child’s documents.',
        ],
      },
      {
        heading: 'Is an unregistered nikah still valid?',
        paragraphs: [
          'Failing to register is an offence for the person responsible for registration, but on its own it does not usually make the nikah invalid if it was otherwise properly performed with consent and witnesses. The practical problem is proof: without registration you have no official record to show offices, embassies or courts. That is why it is worth fixing as soon as possible.',
        ],
      },
      {
        heading: 'Signs your nikah may not be registered',
        list: [
          'You only have a handwritten or photocopied Nikah Nama with no registration number.',
          'The Nikah Nama has no stamp or entry from the Union Council.',
          'NADRA cannot find the marriage when you apply for a family registration certificate.',
          'The nikah registrar who performed the nikah cannot be traced.',
        ],
      },
      {
        heading: 'Documents to prepare for late registration',
        list: [
          'The original Nikah Nama (or the best copy you have).',
          'CNICs of husband and wife.',
          'CNICs of the witnesses and, if possible, of the nikah khawan or registrar.',
          'Affidavits from husband and wife confirming the marriage and its date.',
          'Any supporting evidence such as photographs, a wedding card or children’s documents.',
        ],
        paragraphs: ['Each Union Council follows its own practice for late registration. Some will register on affidavits and witness statements; where the record is disputed or details are missing, a court order may be needed. We check your documents first and tell you which route applies.'],
      },
      {
        heading: 'After registration: the NADRA certificate',
        paragraphs: [
          'Once the Union Council has registered the Nikah Nama, the [NADRA marriage certificate](/marriage-certificate) can be issued. If you need it abroad, plan for MOFA attestation and, where required, embassy attestation and an English translation.',
        ],
      },
    ],
    faqs: [
      ['How do I check if my nikah is registered?', 'Look for a registration number and Union Council stamp on the Nikah Nama, or ask the Union Council where the nikah took place. NADRA can also confirm whether a marriage record exists.'],
      ['Can I register my nikah years later?', 'Usually yes, through late registration with the Union Council. Older cases or missing details may need affidavits, witness statements or a court order.'],
      ['Do both spouses need to be present?', 'It depends on the Union Council. Many require both spouses’ affidavits and CNICs; overseas spouses can often act through an attested power of attorney.'],
    ],
  },
  {
    slug: 'nikah-nama-columns-explained',
    title: 'Nikah Nama Columns Explained: What Each Part Means Before You Sign',
    metaTitle: 'Nikah Nama Columns Explained – Haq Mehr, Conditions & Talaq Rights',
    description: 'A plain-language guide to the Nikah Nama: personal details, wakeels and witnesses, Haq Mehr, special conditions, delegated right of divorce and registration.',
    excerpt: 'The Nikah Nama is the most important document of your marriage. Here is what each part records — and the columns to read carefully before you sign.',
    date: '2026-10-04',
    readingMinutes: 7,
    related: [['Court Marriage in Pakistan', '/court-marriage'], ['NADRA Marriage Certificate', '/marriage-certificate']],
    sections: [
      {
        heading: 'Why the Nikah Nama matters',
        paragraphs: [
          'The Nikah Nama is the official marriage contract used in Pakistan. It records who married, when, on what terms, and who witnessed it. After the nikah it is registered with the Union Council, and its entries become the basis of your NADRA marriage certificate. Mistakes or blank columns can cause problems years later, so both partners should read it before signing — whether at a family nikah or a [court marriage](/court-marriage).',
        ],
      },
      {
        heading: 'Place and personal details',
        paragraphs: [
          'The first columns record the Union Council and ward where the nikah is held, followed by the names, fathers’ names, addresses and ages of the bride and groom. The bride’s marital status is also recorded (never married, widowed or divorced). Check that spellings and dates of birth match the CNICs exactly; this is the most common source of later problems with NADRA.',
        ],
      },
      {
        heading: 'Wakeels and witnesses',
        paragraphs: [
          'Next come the columns for a wakeel appointed by the bride or groom, the witnesses to each wakeel’s appointment, and the witnesses to the marriage itself. If no wakeel is used, those columns are left as not applicable. Witness names and CNIC details must be correct. Overseas Pakistanis can read our guide to [wakeel nikah and power of attorney](/blog/wakeel-nikah-power-of-attorney-overseas-pakistanis).',
        ],
      },
      {
        heading: 'Haq Mehr (columns 13–16)',
        paragraphs: ['The Haq Mehr (dower) is the bride’s right. The Nikah Nama records it in detail:'],
        list: [
          'The total amount of the Haq Mehr.',
          'How much is mu‘ajjal (prompt, payable on demand) and how much is muwajjal (deferred).',
          'How much, if any, was paid at the time of the nikah.',
          'Any property given instead of cash, with its description and agreed value.',
        ],
      },
      {
        heading: 'Special conditions (column 17)',
        paragraphs: ['Couples can record agreed conditions, for example about residence, education, work or maintenance. Conditions should be written clearly and specifically. Vague or blank entries leave room for later dispute.'],
      },
      {
        heading: 'Right of divorce (columns 18–19)',
        paragraphs: [
          'Column 18 records whether the husband has delegated the right of divorce to the wife (talaq-e-tafweez) and on what conditions. Column 19 records whether the husband’s own right of divorce has been restricted in any way. These are among the most important columns in the form. They are often crossed out by default at ceremonies, so discuss them openly before the day and fill them in deliberately rather than by habit.',
        ],
      },
      {
        heading: 'Existing marriage and Arbitration Council permission',
        paragraphs: [
          'Later columns ask whether the groom already has a wife and, if so, whether he obtained permission from the Arbitration Council under Section 6 of the Muslim Family Laws Ordinance, 1961, with the number and date of that permission.',
        ],
      },
      {
        heading: 'Registration details',
        paragraphs: ['The final columns record the person who solemnised the nikah, the date of registration and the registration fee. Before you leave, make sure you know who will register the Nikah Nama and when you will receive your registered copy and the [NADRA marriage certificate](/marriage-certificate).'],
      },
      {
        heading: 'Checklist before you sign',
        list: [
          'Names and dates of birth match both CNICs.',
          'Marital status is correct.',
          'Haq Mehr amount and the prompt/deferred split are what you agreed.',
          'Columns 17–19 reflect a deliberate decision, not a default.',
          'Witness and wakeel details are complete and correct.',
          'You know who is registering the Nikah Nama and when.',
        ],
      },
    ],
    faqs: [
      ['Can the Nikah Nama be changed after signing?', 'Corrections to clerical mistakes are possible through the Union Council, but changing agreed terms later is difficult. It is far easier to get every column right before signing.'],
      ['What is talaq-e-tafweez in the Nikah Nama?', 'It is the delegated right of divorce given by the husband to the wife, recorded in column 18 of the Nikah Nama, together with any conditions attached to it.'],
      ['Is the Nikah Nama the same as the NADRA marriage certificate?', 'No. The Nikah Nama is the marriage contract registered with the Union Council. The NADRA marriage certificate is the computerised certificate issued from that registered record.'],
    ],
  },
]

export const getPost = (slug) => blogPosts.find((post) => post.slug === slug)

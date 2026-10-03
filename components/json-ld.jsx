import { SITE_URL, SITE_NAME, BUSINESS, WHATSAPP_NUMBER, absoluteUrl } from '../lib/site'

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function organizationSchema() {
  const address = { '@type': 'PostalAddress', addressLocality: BUSINESS.addressLocality, addressRegion: BUSINESS.addressRegion, addressCountry: BUSINESS.addressCountry }
  if (BUSINESS.streetAddress) address.streetAddress = BUSINESS.streetAddress
  if (BUSINESS.postalCode) address.postalCode = BUSINESS.postalCode
  const org = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/icon.svg'),
    image: absoluteUrl('/images/hero-muslim-couple.webp'),
    description: 'Court marriage, online nikah and marriage certificate support for couples in Pakistan and overseas Pakistanis.',
    telephone: BUSINESS.phoneDisplay || `+${WHATSAPP_NUMBER}`,
    address,
    areaServed: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Pakistan'].map((name) => ({ '@type': name === 'Pakistan' ? 'Country' : 'City', name })),
    knowsLanguage: ['en', 'ur'],
  }
  if (BUSINESS.email) org.email = BUSINESS.email
  return org
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: 'en-PK' }
}

export function faqSchema(faqs) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
}

// items: [[name, path], ...]
export function breadcrumbSchema(items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: absoluteUrl(path) })) }
}

export function serviceSchema({ name, description, path, area }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: area ? { '@type': area.type || 'Place', name: area.name } : { '@type': 'Country', name: 'Pakistan' },
  }
}

// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — update these before going live.
// ─────────────────────────────────────────────────────────────

// Your final production domain (no trailing slash). Canonical tags,
// sitemap and schema all use this. Can also be set with the
// NEXT_PUBLIC_SITE_URL environment variable on Vercel.
// Production domain. In Vercel, set genzmarriages.com as the primary domain (www redirects to it).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://genzmarriages.com').replace(/\/$/, '')

export const SITE_NAME = 'GenZ Marriage'

// WhatsApp number in international format, digits only (92 + number without leading 0).
// TODO: replace with the real business number.
export const WHATSAPP_NUMBER = '923001234567'

// Shown on the site and in schema. Leave empty strings until real details are available —
// never publish placeholder addresses or phone numbers.
export const BUSINESS = {
  phoneDisplay: '', // e.g. '+92 300 1234567'
  email: '', // e.g. 'info@yourdomain.com'
  streetAddress: '', // e.g. 'Office 12, City Court Road'
  addressLocality: 'Karachi',
  addressRegion: 'Sindh',
  postalCode: '',
  addressCountry: 'PK',
}

export const whatsappLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`

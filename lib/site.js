// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — update these before going live.
// ─────────────────────────────────────────────────────────────

// Your final production domain (no trailing slash). Canonical tags,
// sitemap and schema all use this. Can also be set with the
// NEXT_PUBLIC_SITE_URL environment variable on Vercel.
// Production domain (www is primary; the bare domain 301-redirects to it in next.config.mjs).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.genzmarriages.com').replace(/\/$/, '')

export const SITE_NAME = 'GenZ Marriages'

// WhatsApp number in international format, digits only (92 + number without leading 0).
// Temporary number — replace with the new business number when available.
export const WHATSAPP_NUMBER = '923333772968'

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

// Google Maps embed URL for the office (Google Maps → Share → Embed a map → copy only the src="..." value).
// The map on the contact section only appears once this is set.
export const MAP_EMBED_URL = ''

// Normal Google Maps / Business Profile link, used for the "Get directions" button.
export const MAP_LINK = ''

export const whatsappLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`

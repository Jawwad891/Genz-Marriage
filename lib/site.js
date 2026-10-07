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
// Business number (same as the Google Business Profile).
export const WHATSAPP_NUMBER = '923002286277'

// Shown on the site and in schema. Leave empty strings until real details are available —
// never publish placeholder addresses or phone numbers.
export const BUSINESS = {
  phoneDisplay: '+92 300 2286277',
  email: '', // e.g. 'info@yourdomain.com'
  streetAddress: 'Office No. R-89, Khurramabad, Sector 37-D, Landhi Town',
  addressLocality: 'Karachi',
  addressRegion: 'Sindh',
  postalCode: '75600',
  addressCountry: 'PK',
  // Office coordinates (from the Google Maps embed), used in schema.
  latitude: 24.842552,
  longitude: 67.192908,
}

// Google Maps embed URL for the office (Google Maps → Share → Embed a map → copy only the src="..." value).
// The map on the contact section only appears once this is set.
export const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6233125085523!2d67.19290847583555!3d24.842552445973123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3313d60d59c99%3A0xc04546f9b9d00feb!2sGenz%20Marriages!5e0!3m2!1sen!2s!4v1791368266414!5m2!1sen!2s'

// Normal Google Maps / Business Profile link, used for the "Get directions" button.
export const MAP_LINK = 'https://maps.app.goo.gl/5AiPXof2rdKhMjpCA'

export const whatsappLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`

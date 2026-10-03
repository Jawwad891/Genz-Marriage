import { SITE_URL } from '../lib/site'

export default function robots() {
  // Preview deployments must never be indexed.
  if (process.env.VERCEL_ENV === 'preview') return { rules: [{ userAgent: '*', disallow: '/' }] }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

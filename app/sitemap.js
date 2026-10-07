import { SITE_URL } from '../lib/site'
import { onlineNikahCountries } from '../lib/online-nikah-countries'
import { blogPosts } from '../lib/blog-posts'

const courtCities = ['karachi', 'lahore', 'islamabad', 'rawalpindi']

// Always build the sitemap on request so it never serves a stale cached copy.
export const dynamic = 'force-dynamic'

// Date the service pages last changed meaningfully. Update when you edit page content.
const PAGES_UPDATED = '2026-10-04'

export default function sitemap() {
  const lastModified = new Date(PAGES_UPDATED)
  const url = (path, priority, changeFrequency = 'monthly') => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority })
  return [
    url('/', 1, 'weekly'),
    url('/court-marriage', 0.95, 'weekly'),
    ...courtCities.map((city) => url(`/court-marriage/${city}`, 0.9, 'weekly')),
    url('/online-nikah', 0.9, 'weekly'),
    ...Object.keys(onlineNikahCountries).map((country) => url(`/online-nikah/${country}`, 0.8)),
    url('/marriage-certificate', 0.8),
    url('/blog', 0.7, 'weekly'),
    ...blogPosts.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: new Date(post.updated || post.date), changeFrequency: 'monthly', priority: 0.6 })),
    url('/about-us', 0.5),
    url('/contact-us', 0.6),
    url('/privacy-policy', 0.2, 'yearly'),
    url('/terms-and-conditions', 0.2, 'yearly'),
  ]
}

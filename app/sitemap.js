import { SITE_URL } from '../lib/site'
import { onlineNikahCountries } from '../lib/online-nikah-countries'
import { blogPosts } from '../lib/blog-posts'

const courtCities = ['karachi', 'lahore', 'islamabad', 'rawalpindi']

export default function sitemap() {
  const lastModified = new Date()
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
    url('/privacy-policy', 0.2, 'yearly'),
    url('/terms-and-conditions', 0.2, 'yearly'),
  ]
}

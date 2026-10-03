import { SITE_URL } from '../lib/site'
import { onlineNikahCountries } from '../lib/online-nikah-countries'

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
    url('/about-us', 0.5),
    url('/privacy-policy', 0.2, 'yearly'),
    url('/terms-and-conditions', 0.2, 'yearly'),
  ]
}

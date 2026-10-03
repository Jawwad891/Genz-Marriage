/** @type {import('next').NextConfig} */

// 301 redirects from the old WordPress site. When the site moves to the
// original domain, add every old URL that has traffic or backlinks here,
// pointing to its closest new page. Example:
//   { source: '/court-marriage-in-karachi', destination: '/court-marriage/karachi' },
const legacyWordPressRedirects = [
  // TODO: fill from the old site's sitemap / Search Console "Pages" report.
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Duplicate of /online-nikah — consolidated to avoid cannibalisation.
      { source: '/online-nikah/pakistan', destination: '/online-nikah', permanent: true },
      // Thin city variants of online nikah — online nikah is location-independent.
      { source: '/online-nikah/:city(karachi|lahore|islamabad|rawalpindi)', destination: '/online-nikah', permanent: true },
      ...legacyWordPressRedirects.map((r) => ({ ...r, permanent: true })),
    ]
  },
  async headers() {
    return [
      // Keep the temporary *.vercel.app address out of Google so it never competes with the real domain.
      { source: '/:path*', has: [{ type: 'host', value: '(?<sub>.*)\\.vercel\\.app' }], headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/images/:file*', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }] },
    ]
  },
}

export default nextConfig

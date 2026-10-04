import { SITE_NAME } from '../lib/site'

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: 'Court marriage, online nikah and NADRA marriage certificate support in Pakistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f5ef',
    theme_color: '#123d35',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}

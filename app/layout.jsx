import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SITE_URL, SITE_NAME } from '../lib/site'
import { JsonLd, organizationSchema, websiteSchema } from '../components/json-ld'
import LegalAssistantWidget from '../components/legal-assistant-widget'

const title = 'Court Marriage & Online Nikah in Pakistan | GenZ Marriages'
const description = "Court marriage in Karachi, Lahore, Islamabad & Rawalpindi, online nikah for overseas Pakistanis and NADRA marriage certificates. 30 years' experience."

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  alternates: { canonical: '/' },
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_PK',
    url: '/',
    title,
    description,
    images: [{ url: '/images/hero-couple.webp', width: 1200, height: 655, alt: 'Couple signing their nikah document' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/hero-couple.webp'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ef',
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <JsonLd data={organizationSchema()} />
    <JsonLd data={websiteSchema()} />
    {children}
    <LegalAssistantWidget />
    {process.env.NODE_ENV === 'production' && <Analytics />}
  </body></html>
}

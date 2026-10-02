import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Court Marriage, Online Nikah & Marriage Certificate | GenZ Marriage',
  description: 'Explore court marriage, online nikah services and marriage certificate assistance in Karachi, Lahore, Islamabad and Rawalpindi with GenZ Marriage.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ef',
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

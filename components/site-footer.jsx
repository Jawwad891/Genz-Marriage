import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { whatsappLink, BUSINESS } from '../lib/site'
import { onlineNikahCountries } from '../lib/online-nikah-countries'
import Logo from './logo'

const courtCities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi']

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main">
      <Logo light />
      <p>Court marriage, online nikah and marriage certificate support in Pakistan.</p>
      {(BUSINESS.streetAddress || BUSINESS.phoneDisplay) && <address className="footer-address">{BUSINESS.streetAddress && <span>{BUSINESS.streetAddress}, {BUSINESS.addressLocality}</span>}{BUSINESS.phoneDisplay && <a href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}>{BUSINESS.phoneDisplay}</a>}</address>}
      <a className="footer-whatsapp" href={whatsappLink()} target="_blank" rel="noopener"><MessageCircle size={16} /> Talk to us on WhatsApp</a>
    </div>
    <nav className="footer-columns" aria-label="Footer">
      <div><p className="footer-heading">Court Marriage</p><Link href="/court-marriage">Court Marriage in Pakistan</Link>{courtCities.map((city) => <Link key={city} href={`/court-marriage/${city.toLowerCase()}`}>Court Marriage in {city}</Link>)}</div>
      <div><p className="footer-heading">Online Nikah</p><Link href="/online-nikah">Online Nikah</Link>{Object.entries(onlineNikahCountries).map(([slug, item]) => <Link key={slug} href={`/online-nikah/${slug}`}>Online Nikah from {item.name}</Link>)}</div>
      <div><p className="footer-heading">Company</p><Link href="/marriage-certificate">Marriage Certificate</Link><Link href="/blog">Blog &amp; Guides</Link><Link href="/about-us">About Us</Link><Link href="/#contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div>
    </nav>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} GenZ Marriages. All rights reserved. Information on this website is general guidance, not legal advice for your specific case.</p><p className="footer-credit">Developed by <a href="https://www.matechhub.com" target="_blank" rel="noopener">MA Tech Hub</a></p></div>
  </footer>
}

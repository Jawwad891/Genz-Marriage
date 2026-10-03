'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X, MessageCircle } from 'lucide-react'
import { onlineNikahCountries } from '../lib/online-nikah-countries'
import { whatsappLink } from '../lib/site'

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi']

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [cityMenu, setCityMenu] = useState(null)
  const close = () => { setOpen(false); setServicesOpen(false); setCityMenu(null) }
  return <header className="site-header"><div className="nav-wrap">
    <Link href="/" className="logo" aria-label="GenZ Marriage home" onClick={close}><span className="logo-mark">G</span><span>GenZ <i>Marriage</i></span></Link>
    <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation" onKeyDown={(event) => { if (event.key === 'Escape') close() }}>
      <Link href="/" onClick={close}>Home</Link>
      <div className={`nav-dropdown ${servicesOpen ? 'dropdown-open' : ''}`}>
        <button className="nav-trigger" aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen(!servicesOpen)}>Our Services <ChevronDown size={14} /></button>
        <div className="dropdown-panel" id="services-menu">
          {['Court Marriage', 'Online Nikah'].map((service) => {
            const slug = service.toLowerCase().replaceAll(' ', '-')
            return <div className={`city-dropdown ${cityMenu === slug ? 'city-open' : ''}`} key={slug}>
              <div className="submenu-heading"><Link href={`/${slug}`} onClick={close}>{service}</Link><button aria-label={`Show ${service} ${service === 'Online Nikah' ? 'countries' : 'cities'}`} aria-expanded={cityMenu === slug} aria-controls={`${slug}-locations`} onClick={() => setCityMenu(cityMenu === slug ? null : slug)}><ChevronRight size={15} /></button></div>
              <div className="city-panel" id={`${slug}-locations`}>{service === 'Online Nikah' ? Object.entries(onlineNikahCountries).map(([country, item]) => <Link key={country} href={`/online-nikah/${country}`} onClick={close}>Online Nikah from {item.name}</Link>) : cities.map((city) => <Link key={city} href={`/${slug}/${city.toLowerCase()}`} onClick={close}>{service} in {city}</Link>)}</div>
            </div>
          })}
          <Link className="certificate-link" href="/marriage-certificate" onClick={close}>Marriage Certificate</Link>
        </div>
      </div>
      <Link href="/blog" onClick={close}>Blog</Link>
      <Link href="/about-us" onClick={close}>About Us</Link>
      <Link href="/#contact" onClick={close}>Contact Us</Link>
      <a className="nav-whatsapp" href={whatsappLink()} target="_blank" rel="noopener"><MessageCircle size={16} /> Talk to Us on WhatsApp</a>
    </nav>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}

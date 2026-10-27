import { notFound } from 'next/navigation'
import Page from '../../page'
import { onlineNikahCountries } from '../../../lib/online-nikah-countries'
import { pageMetadata } from '../../../lib/seo'

const services = { 'court-marriage': 'Court Marriage', 'online-nikah': 'Online Nikah', 'marriage-certificate': 'Marriage Certificate' }
const cities = { karachi: 'Karachi', lahore: 'Lahore', islamabad: 'Islamabad', rawalpindi: 'Rawalpindi' }

export const dynamicParams = false

function resolve(params) {
  const serviceTitle = services[params.service]
  const segments = params.city || []
  if (!serviceTitle || segments.length > 1) notFound()
  if (!segments.length) return { serviceTitle }
  if (params.service === 'online-nikah' && onlineNikahCountries[segments[0]]) return { serviceTitle, country: segments[0] }
  if (params.service === 'court-marriage' && cities[segments[0]]) return { serviceTitle, city: cities[segments[0]] }
  notFound()
}

export function generateStaticParams() {
  return [
    ...Object.keys(services).map((service) => ({ service, city: [] })),
    ...Object.keys(cities).map((city) => ({ service: 'court-marriage', city: [city] })),
    ...Object.keys(onlineNikahCountries).map((country) => ({ service: 'online-nikah', city: [country] })),
  ]
}

const cityMeta = {
  Karachi: 'Court marriage in Karachi for Rs. 22,000–35,000: affidavits, nikah, Union Council registration & NADRA certificate. Same-day nikah.',
  Lahore: 'Court marriage in Lahore for Rs. 15,000–27,000: documents, nikah with witnesses, Union Council registration & NADRA certificate.',
  Islamabad: 'Court marriage in Islamabad for Rs. 25,000–29,000: ICT age rules, documents, nikah, registration & NADRA marriage certificate.',
  Rawalpindi: 'Court marriage in Rawalpindi: documents, nikah with witnesses, Union Council registration and NADRA certificate. Get a clear quote.',
}

export async function generateMetadata({ params }) {
  const p = await params
  const { serviceTitle, city, country } = resolve(p)
  const path = `/${p.service}${(p.city || []).length ? `/${p.city[0]}` : ''}`
  if (country) {
    const info = onlineNikahCountries[country]
    return pageMetadata({ title: info.metaTitle, description: info.metaDescription, path, image: '/images/nikah-signing-emerald.webp' })
  }
  if (city) return pageMetadata({ title: `Court Marriage in ${city} – Fees & Documents`, description: cityMeta[city], path })
  if (serviceTitle === 'Court Marriage') return pageMetadata({ title: 'Court Marriage Procedure in Pakistan & Fees', description: 'Court marriage procedure in Pakistan: requirements, documents, steps, fees and NADRA certificate for Karachi, Lahore, Islamabad & Rawalpindi.', path })
  if (serviceTitle === 'Online Nikah') return pageMetadata({ title: 'Online Nikah in Pakistan for Overseas Pakistanis', description: 'Online nikah in Pakistan for Pakistanis in the UAE, Saudi Arabia, UK, USA & Canada. Wakeel nikah, Union Council registration & NADRA certificate.', path, image: '/images/nikah-signing-emerald.webp' })
  return pageMetadata({ title: 'NADRA Marriage Certificate & Nikah Registration', description: 'Get your NADRA marriage certificate: Nikah Nama registration with the Union Council, corrections, MOFA attestation and translation for abroad.', path })
}

export default async function ServicePage({ params }) {
  return <Page {...resolve(await params)} />
}

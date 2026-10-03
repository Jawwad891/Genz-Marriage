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
  Karachi: 'Court marriage in Karachi with free-will affidavits, nikah, Union Council registration and NADRA certificate. Documents, procedure and fees explained.',
  Lahore: 'Court marriage in Lahore: documents, nikah with witnesses, Nikah Nama, Union Council registration and NADRA certificate. Get a clear fee quote.',
  Islamabad: 'Court marriage in Islamabad: age rules under the ICT Act 2025, documents, nikah, registration and NADRA marriage certificate. Get a quote.',
  Rawalpindi: 'Court marriage in Rawalpindi: documents, nikah with witnesses, Union Council registration and NADRA certificate. Procedure and fees explained.',
}

export async function generateMetadata({ params }) {
  const p = await params
  const { serviceTitle, city, country } = resolve(p)
  const path = `/${p.service}${(p.city || []).length ? `/${p.city[0]}` : ''}`
  if (country) {
    const info = onlineNikahCountries[country]
    return pageMetadata({ title: info.metaTitle, description: info.metaDescription, path, image: '/images/nikah-signing-emerald.webp' })
  }
  if (city) return pageMetadata({ title: `Court Marriage in ${city} – Procedure, Documents & Fees`, description: cityMeta[city], path })
  if (serviceTitle === 'Court Marriage') return pageMetadata({ title: 'Court Marriage in Pakistan – Procedure, Documents & Fees', description: 'Court marriage in Pakistan explained: requirements, documents, step-by-step procedure, fees and NADRA marriage certificate. Karachi, Lahore, Islamabad & Rawalpindi.', path })
  if (serviceTitle === 'Online Nikah') return pageMetadata({ title: 'Online Nikah in Pakistan for Overseas Pakistanis – Wakeel Nikah', description: 'Online nikah in Pakistan for Pakistanis in the UAE, Saudi Arabia, UK, USA, Canada and more. Wakeel nikah, Union Council registration and NADRA certificate.', path, image: '/images/nikah-signing-emerald.webp' })
  return pageMetadata({ title: 'NADRA Marriage Certificate & Nikah Registration in Pakistan', description: 'Get your NADRA marriage certificate: Nikah Nama registration with the Union Council, corrections, MOFA attestation and English translation for use abroad.', path })
}

export default async function ServicePage({ params }) {
  return <Page {...resolve(await params)} />
}

import { notFound } from 'next/navigation'
import Page from '../../page'
import { onlineNikahCountries } from '../../../lib/online-nikah-countries'

const services = { 'court-marriage': 'Court Marriage', 'online-nikah': 'Online Nikah', 'marriage-certificate': 'Marriage Certificate' }
const cities = { karachi: 'Karachi', lahore: 'Lahore', islamabad: 'Islamabad', rawalpindi: 'Rawalpindi' }

function resolve(params) {
  const title = services[params.service]
  const segments = params.city || []
  if (params.service === 'online-nikah' && segments.length === 1 && onlineNikahCountries[segments[0]]) return { serviceTitle: title, country: segments[0] }
  if (!title || segments.length > 1 || (segments.length && (!cities[segments[0]] || params.service === 'marriage-certificate'))) notFound()
  return { serviceTitle: title, city: cities[segments[0]] }
}

export function generateStaticParams() {
  return Object.keys(services).flatMap((service) => [
    { service, city: [] },
    ...(service === 'marriage-certificate' ? [] : Object.keys(cities).map((city) => ({ service, city: [city] }))),
    ...(service === 'online-nikah' ? Object.keys(onlineNikahCountries).map((country) => ({ service, city: [country] })) : []),
  ])
}

export async function generateMetadata({ params }) {
  const { serviceTitle, city, country } = resolve(await params)
  if (country) {
    const region = onlineNikahCountries[country].region
    return { title: `Online Nikah in ${region} | GenZ Marriage`, description: `Online nikah enquiries for couples in ${region}. Discuss requirements, procedure, fees, Pakistan registration and marriage certificate assistance.` }
  }
  return { title: `${serviceTitle}${city ? ` in ${city}` : ' in Pakistan'} | GenZ Marriage`, description: `Practical ${serviceTitle.toLowerCase()} guidance and documentation support for couples and families ${city ? `in ${city}` : 'across Pakistan'}.` }
}

export default async function ServicePage({ params }) {
  return <Page {...resolve(await params)} />
}

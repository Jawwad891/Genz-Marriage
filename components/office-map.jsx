import { MapPin, ArrowUpRight } from 'lucide-react'
import { BUSINESS, MAP_EMBED_URL, MAP_LINK, SITE_NAME } from '../lib/site'

export default function OfficeMap() {
  if (!MAP_EMBED_URL) return null
  const address = [BUSINESS.streetAddress, BUSINESS.addressLocality].filter(Boolean).join(', ')
  return (
    <div className="office-map">
      <div className="office-map-head">
        <div>
          <p className="office-map-label"><MapPin size={15} /> Visit our office</p>
          {address && <p className="office-map-address">{address}</p>}
        </div>
        {MAP_LINK && <a className="text-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={15} /></a>}
      </div>
      <div className="office-map-frame">
        <iframe
          src={MAP_EMBED_URL}
          title={`${SITE_NAME} office location on Google Maps`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

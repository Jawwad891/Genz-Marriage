import Link from 'next/link'
import { SITE_NAME } from '../lib/site'

// Brand mark: a "G" drawn as a wedding ring, with a red heart in place of the stone.
export function LogoMark({ size = 36, className = 'logo-svg' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="32" fill="#123d35" />
    <circle cx="32" cy="32" r="30.4" fill="none" stroke="#b39a63" strokeWidth="1.6" />
    <path d="M41.9 28.1A14 14 0 1 0 46 38H34" fill="none" stroke="#f7f5ef" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path transform="translate(32 23.5) scale(.42) translate(-32 -52)" d="M32 52C30 50 13 40 13 27 13 19.5 18.5 15 24.2 15 28 15 30.8 17.2 32 20.4 33.2 17.2 36 15 39.8 15 45.5 15 51 19.5 51 27 51 40 34 50 32 52Z" fill="#e0606e" />
  </svg>
}

export default function Logo({ light = false, onClick }) {
  return <Link href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label={`${SITE_NAME} home`} onClick={onClick}>
    <LogoMark />
    <span className="logo-text">GenZ <i>Marriages</i></span>
  </Link>
}

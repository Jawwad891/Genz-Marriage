import Link from 'next/link'
import { SITE_NAME } from '../lib/site'

// Brand mark: two joined hearts (gold and ivory) — two people coming together.
export function LogoMark({ size = 36, className = 'logo-svg' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="32" fill="#123d35" />
    <circle cx="32" cy="32" r="30.4" fill="none" stroke="#b39a63" strokeWidth="1.6" />
    <path transform="translate(26 31) scale(.62) translate(-32 -33.5)" d="M32 52C30 50 13 40 13 27 13 19.5 18.5 15 24.2 15 28 15 30.8 17.2 32 20.4 33.2 17.2 36 15 39.8 15 45.5 15 51 19.5 51 27 51 40 34 50 32 52Z" fill="#d4b56c" />
    <path transform="translate(38.5 34.5) scale(.62) translate(-32 -33.5)" d="M32 52C30 50 13 40 13 27 13 19.5 18.5 15 24.2 15 28 15 30.8 17.2 32 20.4 33.2 17.2 36 15 39.8 15 45.5 15 51 19.5 51 27 51 40 34 50 32 52Z" fill="none" stroke="#f7f5ef" strokeWidth="6.5" strokeLinejoin="round" />
  </svg>
}

export default function Logo({ light = false, onClick }) {
  return <Link href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label={`${SITE_NAME} home`} onClick={onClick}>
    <LogoMark />
    <span className="logo-text">GenZ <i>Marriages</i></span>
  </Link>
}

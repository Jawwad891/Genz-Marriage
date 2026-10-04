import Link from 'next/link'
import { SITE_NAME } from '../lib/site'

// Brand mark: the "G" is drawn as a wedding ring with a diamond on top.
export function LogoMark({ size = 36, className = 'logo-svg' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="32" fill="#123d35" />
    <circle cx="32" cy="32" r="30.4" fill="none" stroke="#b39a63" strokeWidth="1.6" />
    <path d="M41.9 28.1A14 14 0 1 0 46 38H34" fill="none" stroke="#f7f5ef" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 14.5 28 9h8l4 5.5L32 22z" fill="#d4b56c" />
    <path d="M24 14.5h16M32 22l-2.8-7.5L30.6 9M32 22l2.8-7.5L33.4 9" fill="none" stroke="#123d35" strokeWidth=".9" strokeLinejoin="round" opacity=".5" />
  </svg>
}

export default function Logo({ light = false, onClick }) {
  return <Link href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label={`${SITE_NAME} home`} onClick={onClick}>
    <LogoMark />
    <span className="logo-text">GenZ <i>Marriages</i></span>
  </Link>
}

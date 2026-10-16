// Smaller copies of each image live next to the original as name-<width>w.webp.
// Browsers pick the smallest file that still looks sharp, so mobile visitors
// download far less (PageSpeed: "Improve image delivery" / faster LCP).
const variants = {
  'hero-muslim-couple': { full: 896, widths: [480, 640] },
  'nikah-signing-emerald': { full: 768, widths: [480, 640] },
  ceremony: { full: 1200, widths: [640, 800] },
  'couple-portrait': { full: 1200, widths: [640, 800] },
  'hero-couple': { full: 1200, widths: [640, 800] },
  'nikah-signing-ivory': { full: 1200, widths: [640, 800] },
  'wedding-details-ivory': { full: 1200, widths: [640, 800] },
  'nikah-signing': { full: 1200, widths: [640, 800] },
  'wedding-details': { full: 1200, widths: [640, 800] },
  'nikah-signing-ivory-thumb': { full: 320, widths: [240] },
  'wedding-details-ivory-thumb': { full: 320, widths: [240] },
}

export function srcSetFor(src) {
  const match = /^\/images\/(.+)\.webp$/.exec(src)
  const info = match && variants[match[1]]
  if (!info) return undefined
  return [...info.widths.map((w) => `/images/${match[1]}-${w}w.webp ${w}w`), `${src} ${info.full}w`].join(', ')
}

export const imageSizes = {
  hero: '(max-width: 520px) calc(100vw - 63px), (max-width: 850px) calc(100vw - 102px), 518px',
  thumb: '(max-width: 520px) 110px, 145px',
  half: '(max-width: 850px) 100vw, 590px',
  wide: '(max-width: 1160px) 100vw, 1120px',
}

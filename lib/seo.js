import { SITE_NAME } from './site'

// Google shows roughly 60 characters of a title. When "Title | GenZ Marriages"
// would be longer than that, drop the brand suffix so the keyword part is not cut off.
const MAX_TITLE = 60

// Builds complete per-page metadata so canonical + Open Graph always match the page.
export function pageMetadata({ title, description, path, image = '/images/hero-couple.webp', absoluteTitle = false }) {
  const withBrand = `${title} | ${SITE_NAME}`
  const useAbsolute = absoluteTitle || withBrand.length > MAX_TITLE
  const fullTitle = useAbsolute ? title : withBrand
  return {
    title: useAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_PK', url: path, title: fullTitle, description, images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  }
}

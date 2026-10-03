import { SITE_NAME } from './site'

// Builds complete per-page metadata so canonical + Open Graph always match the page.
export function pageMetadata({ title, description, path, image = '/images/hero-couple.webp', absoluteTitle = false }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_PK', url: path, title: fullTitle, description, images: [{ url: image, alt: title }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  }
}

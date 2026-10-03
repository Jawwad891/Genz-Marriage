import Link from 'next/link'
import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import { JsonLd, breadcrumbSchema } from '../../components/json-ld'
import { blogPosts } from '../../lib/blog-posts'
import { formatDate } from '../../components/blog-text'
import { pageMetadata } from '../../lib/seo'
import { absoluteUrl } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Marriage Guides & Blog – Nikah, Court Marriage & NADRA',
  description: 'Practical guides on nikah, court marriage, Nikah Nama, NADRA marriage certificates and online nikah for overseas Pakistanis.',
  path: '/blog',
})

export default function BlogIndex() {
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'GenZ Marriage Guides',
    url: absoluteUrl('/blog'),
    blogPost: blogPosts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: absoluteUrl(`/blog/${post.slug}`), datePublished: post.date })),
  }
  return <div className="site-shell">
    <JsonLd data={breadcrumbSchema([['Home', '/'], ['Blog', '/blog']])} />
    <JsonLd data={listSchema} />
    <SiteNav />
    <main>
      <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><span aria-current="page">Blog</span></li></ol></nav>
      <section className="section-pad blog-index">
        <div className="section-intro"><p className="eyebrow">Guides</p><h1 className="blog-title">Marriage Guides for Pakistan &amp; Overseas</h1><p className="intro-text">Plain-language guides on nikah, court marriage, the Nikah Nama and NADRA marriage certificates.</p></div>
        <div className="blog-grid">{blogPosts.map((post) => <article className="blog-card" key={post.slug}>
          <p className="blog-meta"><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read</p>
          <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p>{post.excerpt}</p>
          <Link className="text-link" href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>Read guide <span>↗</span></Link>
        </article>)}</div>
      </section>
    </main>
    <SiteFooter />
  </div>
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteNav from '../../../components/site-nav'
import SiteFooter from '../../../components/site-footer'
import { JsonLd, breadcrumbSchema, faqSchema } from '../../../components/json-ld'
import { RichText, plainText, formatDate } from '../../../components/blog-text'
import { blogPosts, getPost } from '../../../lib/blog-posts'
import { pageMetadata } from '../../../lib/seo'
import { SITE_URL, SITE_NAME, absoluteUrl, whatsappLink } from '../../../lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const meta = pageMetadata({ title: post.metaTitle, description: post.description, path: `/blog/${post.slug}` })
  meta.openGraph = { ...meta.openGraph, type: 'article', publishedTime: post.date, modifiedTime: post.updated || post.date }
  return meta
}

export default async function BlogPost({ params }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  const path = `/blog/${post.slug}`
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl('/images/hero-couple.webp'),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-PK',
  }
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  return <div className="site-shell">
    <JsonLd data={article} />
    <JsonLd data={breadcrumbSchema([['Home', '/'], ['Blog', '/blog'], [post.title, path]])} />
    {post.faqs?.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
    <SiteNav />
    <main>
      <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><Link href="/blog">Blog</Link></li><li><span aria-current="page">{post.title}</span></li></ol></nav>
      <article className="blog-article">
        <header>
          <p className="eyebrow">Guide</p>
          <h1>{post.title}</h1>
          <p className="blog-meta">By {SITE_NAME} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read</p>
          <p className="blog-lead">{post.excerpt}</p>
        </header>
        {post.sections.map((section) => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((text) => <p key={text}><RichText text={text} /></p>)}
          {section.listTitle && <p><strong>{section.listTitle}</strong></p>}
          {section.list && <ul>{section.list.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>}
        </section>)}
        {post.faqs?.length > 0 && <section className="blog-faqs"><h2>Frequently Asked Questions</h2>{post.faqs.map(([q, a]) => <div key={q}><h3>{q}</h3><p>{plainText(a)}</p></div>)}</section>}
        <aside className="karachi-quote-strip"><div><p className="eyebrow">Need help?</p><h3>Talk to GenZ Marriages</h3><p>Share your situation on WhatsApp for a checklist and an itemised quote.</p></div><a className="button button-primary" href={whatsappLink(`Assalam o Alaikum, I read "${post.title}" and need guidance.`)} target="_blank" rel="noopener">Chat on WhatsApp <span aria-hidden="true">↗</span></a></aside>
        <nav className="guide-links" aria-label="Related services">{post.related.map(([label, href]) => <Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}</nav>
        <p className="blog-disclaimer">This guide is general information, not legal advice for your specific case. Procedures can differ between Union Councils and change over time.</p>
      </article>
      {others.length > 0 && <section className="section-pad blog-more"><h2>More Guides</h2><div className="blog-grid">{others.map((p) => <article className="blog-card" key={p.slug}><h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3><p>{p.excerpt}</p></article>)}</div></section>}
    </main>
    <SiteFooter />
  </div>
}

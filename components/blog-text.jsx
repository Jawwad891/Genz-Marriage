import Link from 'next/link'

// Renders text with [label](/path) internal links.
export function RichText({ text }) {
  const parts = []
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(<Link key={m.index} href={m[2]}>{m[1]}</Link>)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export const plainText = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

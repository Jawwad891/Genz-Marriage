import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({ title: 'Privacy Policy', description: 'How GenZ Marriages collects, uses and protects the personal information you share about court marriage, online nikah and marriage certificate enquiries.', path: '/privacy-policy' })

export default function PrivacyPolicy() {
  return <div className="site-shell"><SiteNav /><main className="legal-page">
    <h1>Privacy Policy</h1>
    <p>Marriage enquiries involve personal and sensitive information. This policy explains what we collect, why, and how we protect it.</p>
    <h2>Information we collect</h2>
    <p>When you contact us through the website form or WhatsApp, we receive the details you choose to share, such as your name, phone number, city or country, the service you need and any message. During a service we may also receive copies of identity documents, a Nikah Nama and other records needed for your case.</p>
    <h2>How we use your information</h2>
    <ul><li>To reply to your enquiry and send a checklist and quote.</li><li>To prepare documents, coordinate the nikah and complete registration, certificate, attestation or translation work you ask for.</li><li>To keep records required for the service and any legal obligations.</li></ul>
    <p>We do not sell your information or use it for unrelated marketing.</p>
    <h2>Sharing</h2>
    <p>We share documents only with the people and offices needed to deliver your service — for example a nikah registrar, Union Council, NADRA, the Ministry of Foreign Affairs, a translator or a courier — and only for that purpose.</p>
    <h2>Website analytics</h2>
    <p>We use privacy-friendly analytics to understand how many people visit pages. It does not identify you personally.</p>
    <h2>Keeping your information safe</h2>
    <p>Please share sensitive documents only after we have confirmed what is needed. We keep documents only as long as necessary for your service and record keeping.</p>
    <h2>Your choices</h2>
    <p>You can ask us what information we hold about you, ask for corrections or ask us to delete documents that we no longer need, by contacting us on WhatsApp.</p>
  </main><SiteFooter /></div>
}

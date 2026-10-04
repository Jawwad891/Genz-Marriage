import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({ title: 'Terms & Conditions', description: 'Terms for using the GenZ Marriages website and our court marriage, online nikah and marriage certificate services.', path: '/terms-and-conditions' })

export default function Terms() {
  return <div className="site-shell"><SiteNav /><main className="legal-page">
    <h1>Terms &amp; Conditions</h1>
    <p>By using this website or our services you agree to these terms.</p>
    <h2>General information, not legal advice</h2>
    <p>Content on this website explains common procedures for court marriage, online nikah and marriage certificates in Pakistan. It is general information and is not legal advice for your particular situation. Laws, office procedures and foreign immigration rules change, so requirements are confirmed for each case.</p>
    <h2>Eligibility</h2>
    <p>We only assist adults who meet the legal age requirement for the place of marriage and who are marrying by their own free will. We may decline any case where consent, age or marital status is in doubt.</p>
    <h2>Quotes and payment</h2>
    <p>Each service is quoted in writing before work starts. The quote states what is included and which official charges are separate. Work begins after the agreed payment is acknowledged.</p>
    <h2>Your responsibilities</h2>
    <p>You are responsible for providing true, complete and genuine documents and information. Delays or refusals caused by incorrect or missing information are outside our control.</p>
    <h2>Third-party offices</h2>
    <p>Union Councils, NADRA, the Ministry of Foreign Affairs, embassies and immigration authorities make their own decisions and set their own timelines. We cannot guarantee their outcomes or processing times.</p>
    <h2>Changes</h2>
    <p>We may update these terms from time to time. The version on this page applies to new enquiries.</p>
  </main><SiteFooter /></div>
}

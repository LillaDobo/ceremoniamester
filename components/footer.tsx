import Link from "next/link";
import { Arrow } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer section-shell">
    <div className="footer-main">
      <Link href="/" className="footer-brand">Ricsi</Link>
      <div className="footer-contact"><p>Egy jó beszélgetéssel kezdődik.</p><Link href="/kapcsolat/" className="contact-link footer-contact-link"><span>Kapcsolatfelvétel</span><span className="contact-arrow"><Arrow /></span></Link></div>
      <div className="footer-details">{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}<Link href="/#galeria">Közös pillanatok</Link><Link href="/#szolgaltatasok">Szolgáltatások</Link></div>
    </div>
    <div className="footer-bottom"><small>{new Date().getFullYear()} · Ricsi</small><small>Weboldalt készítette: {site.creator}</small></div>
  </footer>;
}

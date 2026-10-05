import Link from "next/link";
import { Arrow } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer section-shell">
    <div className="footer-main">
      <Link href="/" className="footer-brand">Faur Richárd</Link>
      <div className="footer-contact"><p>Egy jó beszélgetéssel kezdődik.</p><Link href="/kapcsolat/" className="contact-link footer-contact-link"><span>Beszélgessünk</span><span className="contact-arrow"><Arrow /></span></Link></div>
      <div className="footer-details">{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}<nav className="footer-links" aria-label="Lábléc navigáció"><Link href="/#galeria">Közös pillanatok</Link><Link href="/#szolgaltatasok">Szolgáltatások</Link></nav></div>
    </div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} Faur Richárd</small></div>
  </footer>;
}

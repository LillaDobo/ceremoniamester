import Link from "next/link";
import { Arrow } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer section-shell">
    <Link href="/" className="brand">ricsi<span>ceremóniamester</span></Link>
    <div className="footer-contact"><p>Egy jó beszélgetéssel kezdődik.</p><Link href="/kapcsolat/" className="text-link">Kapcsolatfelvétel <Arrow /></Link></div>
    <div className="footer-details">{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}<small>Az első konzultáció ingyenes.</small></div>
    <small>© {new Date().getFullYear()} Ricsi · Ceremóniamester</small><small>Veletek. Rólatok. Nektek.</small>
  </footer>;
}

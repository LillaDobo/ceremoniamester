import Link from "next/link";
import { Arrow } from "./icons";
import { site } from "@/lib/site";

export function Footer({ backToTop = false }: { backToTop?: boolean }) {
  return <footer className="site-footer compact-footer">
    {(site.email || site.phone) && <div className="footer-details">{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}</div>}
    <div className="footer-bottom"><small>© {new Date().getFullYear()} Faur Richárd</small><nav className="footer-links" aria-label="Lábléc navigáció"><Link href="/#galeria">Közös pillanatok</Link><Link href="/#szolgaltatasok">Szolgáltatások</Link>{backToTop && <Link href="#oldal-teteje" className="text-link">Az oldal tetejére <Arrow /></Link>}</nav></div>
  </footer>;
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./icons";

const links = [["Rólam", "/#rolam"], ["Galéria", "/#galeria"], ["Szolgáltatások", "/#szolgaltatasok"], ["Vélemények", "/#referenciak"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); event.currentTarget.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
    <Link href="/" className="header-brand" aria-label="Richárd Faur – kezdőlap" onClick={() => setOpen(false)}><span>Richárd</span><span>Faur</span></Link>
    <nav className="desktop-nav" aria-label="Fő navigáció">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link className="header-contact contact-link" href="/kapcsolat/" onClick={() => setOpen(false)}><span>Kapcsolatfelvétel</span><span className="contact-arrow"><Arrow /></span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Menü bezárása" : "Menü megnyitása"} onClick={() => setOpen(!open)}><span>{open ? "Bezár" : "Menü"}</span><span aria-hidden="true">{open ? "×" : "+"}</span></button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobil navigáció">{[...links, ["Kapcsolatfelvétel", "/kapcsolat/"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<Arrow /></Link>)}</nav>}
  </header>;
}

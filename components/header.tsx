"use client";

import { useState } from "react";
import { Arrow } from "./icons";

const links = [["Rólam", "#rolam"], ["Amiben segítek", "#szolgaltatasok"], ["Így dolgozunk", "#folyamat"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); event.currentTarget.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
    <a href="#" className="brand" aria-label="Ricsi ceremóniamester – kezdőlap">ricsi<span>ceremóniamester</span></a>
    <nav className="desktop-nav" aria-label="Fő navigáció">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a className="header-contact" href="#kapcsolat">Beszélgessünk <Arrow /></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Menü bezárása" : "Menü megnyitása"} onClick={() => setOpen(!open)}><span>{open ? "Bezár" : "Menü"}</span><span aria-hidden="true">{open ? "×" : "+"}</span></button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobil navigáció">{[...links, ["Beszélgessünk", "#kapcsolat"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}</nav>}
  </header>;
}

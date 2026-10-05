import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Arrow, Motif } from "@/components/icons";
import { Gallery } from "@/components/gallery";
import { PhotoContent } from "@/components/photo";
import { Reviews } from "@/components/reviews";
import { heroPhoto, services, site } from "@/lib/site";

export default function Home() {
  return <>
    <a href="#tartalom" className="skip-link">Ugrás a tartalomra</a><Header />
    <main id="tartalom">
      <section className="hero section-shell">
        <p className="eyebrow">Ricsi · Ceremóniamester</p>
        <h1>A nagy nap,<br />ami igazán <span className="italic">rólatok</span> szól<span className="title-dot">.</span></h1>
        <div className="hero-bottom"><p>Ti ünnepeltek. Én összefogom a részleteket.<br />Profin a háttérben, lazán köztetek.</p><div className="hero-cta"><Link className="button button-dark" href="/kapcsolat/">Ismerjük meg egymást <Arrow /></Link><span className="consultation-note">Az első konzultáció ingyenes.</span></div></div>
        <span className="hero-spark"><Motif kind="spark" /></span>
      </section>
      <section className="opening-photo section-shell" aria-label="Ricsi a nagy napon"><div className="hero-photo"><PhotoContent photo={heroPhoto} priority /><div className="photo-fade"><span>{heroPhoto.caption}</span><small>Ti ketten. A szeretteitek. Egy jó nap.</small></div></div></section>

      <section id="rolam" className="story-section section-shell section-space"><div className="story-copy"><p className="eyebrow">A mikrofon mögött</p><h2>Hogyan lettem<br /><span className="italic">ceremóniamester?</span></h2><p className="large-copy">{site.story}</p><span className="signature">Ricsi</span></div><div className="value-cards"><div className="value-card"><Motif kind="rings" /><span>Empatikus</span><small>Rátok figyelek.</small></div><div className="value-card"><Motif kind="spark" /><span>Laza</span><small>Semmi kötelező feszengés.</small></div></div></section>

      <section className="about-mini section-shell"><p className="eyebrow">Pár szó rólam</p><div><h2>Szia, Ricsi vagyok.<br /><span className="italic">Örülök nektek.</span></h2><p>{site.introduction}</p><p>Nem kell mindenre egyedül gondolnotok. Együtt megtervezzük a napot, én pedig ott leszek, amikor össze kell fogni a csapatot, elindítani a következő programot, vagy egyszerűen oldani a hangulatot.</p></div></section>

      <section id="galeria" className="gallery-section section-shell section-space"><div className="section-heading"><div><p className="eyebrow">Pillanatok, amik megmaradnak</p><h2>Ilyen, amikor<br /><span className="italic">együtt ünneplünk.</span></h2></div><p>Nagy nevetések. Apró gesztusok.<br />És minden, ami kettő között történik.</p></div><Gallery /></section>

      <section className="quote-section"><div className="section-shell"><Motif kind="glass" /><p className="eyebrow">Ami a felszabadultság mögött van</p><p className="quote">„Egy sikeres esküvő titka<br /><span className="italic">a profi háttérmunka.”</span></p></div></section>

      <section id="szolgaltatasok" className="services section-shell section-space"><div className="section-heading"><div><p className="eyebrow">Amiben számíthattok rám</p><h2>A háttér biztos.<br /><span className="italic">A pillanat a tiétek.</span></h2></div><p>Nyissátok ki, ami érdekel.<br />A részleteket hozzátok igazítjuk.</p></div><div className="service-mosaic">{services.map((service, i) => <details key={service.title} className={`service-tile service-tile-${i + 1}`}><summary><span className="service-number">0{i + 1}</span>{service.optional && <span className="optional-label">Opcionális</span>}<span className="service-title">{service.title}</span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-content"><h3>{service.subtitle}</h3><p>{service.text}</p></div></details>)}</div></section>

      <section id="referenciak" className="reviews-section section-shell section-space"><p className="eyebrow">Akikkel együtt ünnepeltem</p><h2>Így élték meg<br /><span className="italic">a párok.</span></h2><Reviews /></section>

      <section className="contact-section"><div className="section-shell"><p className="eyebrow">Kezdjük egy beszélgetéssel</p><h2>Nézzük meg,<br /><span className="italic">mire van szükségetek.</span></h2><p>Meséljetek az időpontról, a helyszínről és arról,<br className="desktop-break" /> hogyan képzelitek el az esküvőtöket.</p><Link className="button button-dark" href="/kapcsolat/">Kapcsolatfelvétel <Arrow /></Link><span className="consultation-note">Az első konzultáció ingyenes.</span><Motif kind="spark" className="contact-spark" /></div></section>
    </main><Footer />
  </>;
}

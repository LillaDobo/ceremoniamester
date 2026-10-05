import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Arrow, Motif } from "@/components/icons";
import { Gallery } from "@/components/gallery";
import { PhotoContent } from "@/components/photo";
import { Reviews } from "@/components/reviews";
import { Polaroid } from "@/components/polaroid";
import { Services } from "@/components/services";
import { ValueCards } from "@/components/value-cards";
import { heroPhoto, titlePhotos, site } from "@/lib/site";

export default function Home() {
  return <>
    <a href="#tartalom" className="skip-link">Ugrás a tartalomra</a><Header />
    <main id="tartalom">
      <section className="hero section-shell">
        <p className="eyebrow">Ricsi · Ceremóniamester</p>
        <h1 className="hero-title" aria-label="A nagy nap, ami rólatok szól."><span className="title-line"><span>A nagy</span><Polaroid photo={titlePhotos[0]} className="polaroid-one" /><span>nap,</span></span><span className="title-line title-line-second"><span>ami</span><Polaroid photo={titlePhotos[1]} className="polaroid-two" /><span className="italic">rólatok</span><span className="title-close">szól<span className="title-dot">.</span></span></span></h1>
        <div className="hero-bottom"><p>Ti ünnepeltek. Én összefogom a részleteket.<br />Profin a háttérben, lazán köztetek.</p><div className="hero-cta"><Link className="button button-dark" href="/kapcsolat/">Ismerjük meg egymást <Arrow /></Link><span className="consultation-note">Az első konzultáció ingyenes.</span></div></div>
        <span className="hero-spark"><Motif kind="spark" /></span>
      </section>
      <section className="opening-photo" aria-label="Ricsi a nagy napon"><div className="hero-photo"><PhotoContent photo={heroPhoto} priority /><div className="photo-fade"><div className="section-shell"><span>{heroPhoto.caption}</span><small>Ti ketten. A szeretteitek. Egy jó nap.</small></div></div></div></section>

      <section id="rolam" className="story-section section-shell section-space"><div className="story-copy"><p className="eyebrow">A mikrofon mögött</p><h2>Hogyan lettem<br /><span className="italic">ceremóniamester?</span></h2><p className="large-copy">{site.story}</p><span className="signature">Ricsi</span></div><ValueCards /></section>

      <section className="about-mini section-shell"><p className="eyebrow">Pár szó rólam</p><div><h2>Sziasztok, Ricsi vagyok.<br /><span className="italic">Örülök nektek.</span></h2><p>{site.introduction}</p><p>{site.goal}</p><div className="difference-copy"><h3>Újhullámú esküvő.<br />A ti szabályaitok szerint.</h3><p>{site.difference}</p></div></div></section>

      <section id="galeria" className="gallery-section section-shell section-space"><div className="section-heading"><div><p className="eyebrow">Pillanatok, amik megmaradnak</p><h2>Ilyen, amikor<br /><span className="italic">együtt ünneplünk.</span></h2></div><p>Nagy nevetések. Apró gesztusok.<br />És minden, ami kettő között történik.</p></div><Gallery /></section>

      <section className="quote-section"><div className="section-shell"><Motif kind="glass" /><p className="eyebrow">Ami a felszabadultság mögött van</p><p className="quote">„Egy sikeres esküvő titka<br /><span className="italic">a profi háttérmunka.”</span></p></div></section>

      <section id="szolgaltatasok" className="services section-shell section-space"><div className="section-heading"><div><p className="eyebrow">Amiben számíthattok rám</p><h2>A háttér biztos.<br /><span className="italic">A pillanat a tiétek.</span></h2></div><p>Nyissátok ki, ami érdekel.<br />A részleteket hozzátok igazítjuk.</p></div><Services /></section>

      <section id="referenciak" className="reviews-section section-shell section-space"><p className="eyebrow">Akikkel együtt ünnepeltem</p><h2>Így élték meg<br /><span className="italic">a párok.</span></h2><Reviews /></section>

      <section className="contact-section"><div className="section-shell"><p className="eyebrow">Kezdjük egy beszélgetéssel</p><h2>Nézzük meg,<br /><span className="italic">mire van szükségetek.</span></h2><p>Meséljetek az időpontról, a helyszínről és arról,<br className="desktop-break" /> hogyan képzelitek el az esküvőtöket.</p><Link className="button button-dark" href="/kapcsolat/">Kapcsolatfelvétel <Arrow /></Link><span className="consultation-note">Az első konzultáció ingyenes.</span><Motif kind="spark" className="contact-spark" /></div></section>
    </main><Footer />
  </>;
}

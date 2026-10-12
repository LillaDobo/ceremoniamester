import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Arrow, Motif } from "@/components/icons";
import { CmIcon } from "@/components/cm-icon";
import { Gallery } from "@/components/gallery";
import { PhotoContent } from "@/components/photo";
import { Reviews } from "@/components/reviews";
import { Polaroid } from "@/components/polaroid";
import { Services } from "@/components/services";
import { ValueCards } from "@/components/value-cards";
import { WeddingRecipe } from "@/components/wedding-recipe";
import { MoodPicker } from "@/components/mood-picker";
import { heroPhoto, titlePhotos, galleryPhotos, site } from "@/lib/site";

export default function Home() {
  return <>
    <a href="#tartalom" className="skip-link">Ugrás a tartalomra</a><Header />
    <main id="tartalom">
      <section className="hero section-shell editorial-hero">
        <p className="eyebrow">Faur Richárd · Ceremóniamester</p>
        <h1 className="hero-title" aria-label="A nagy nap, ami rólatok szól."><span className="title-line"><span>A NAGY</span><Polaroid photo={titlePhotos[0]} className="polaroid-one" /><span>NAP,</span></span><span className="title-line pointing-line"><span>AMI</span><Polaroid photo={titlePhotos[1]} className="polaroid-two" /><span>RÓLATOK</span></span><span className="title-line title-last-line">SZÓL<span className="title-dot">.</span></span></h1>
        <div className="hero-bottom"><p>Ti ünnepeltek, én gondoskodom minden másról.</p><span className="consultation-note">Az első konzultáció ingyenes.</span></div>
      </section>

      <section className="opening-photo" aria-label="Ricsi a nagy napon"><div className="hero-photo"><PhotoContent photo={heroPhoto} priority /><div className="photo-fade"><div className="section-shell"><span>Profin a háttérben, lazán veletek.</span><small>Ti ketten. A szeretteitek. Egy jó nap.</small></div></div></div></section>

      <section id="rolam" className="about-background-section about-plain"><div className="about-mini section-shell"><div className="about-copy"><p className="eyebrow">Ki lesz veletek?</p><h2>Sziasztok, Ricsi vagyok.<br /><span className="italic">Örülök nektek.</span></h2><p>{site.introduction}</p><p>{site.goal}</p><div className="difference-copy"><h3>Újhullámú esküvő.<br />A ti szabályaitok szerint.</h3><p>{site.difference}</p></div></div><ValueCards /></div></section>

      <section className="story-section section-shell section-space"><div className="story-copy"><p className="eyebrow">Egy baráti felkérésből indult</p><h2>Hogyan lettem<br /><span className="italic">ceremóniamester?</span></h2><blockquote className="story-opening">„A munka talált meg engem.”</blockquote><details className="story-details"><summary>Tovább a teljes történethez <span aria-hidden="true">+</span></summary><div><p>{site.story}</p>{site.storyContinuation.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<span className="signature">Ricsi</span></div></details></div><div className="story-placeholder" aria-hidden="true" /></section>

      <section className="quote-section lively-quote infographic-quote"><div className="section-shell quote-layout"><div className="quote-intro"><p className="eyebrow">Jó kezekben. Jó hangulatban.</p><p className="quote">„A sikeres esküvő titka<br /><span className="italic">a jó hangulat és<br />a profi háttérmunka.”</span></p><p className="quote-promise">Velem mindkettőt megkapjátok.</p><p className="quote-explanation">Két dolog, ami együtt működik igazán. Nézzétek meg, mit teszek hozzá az egyikhez és a másikhoz.</p></div><WeddingRecipe /></div></section>

      <section id="galeria" className="gallery-section section-shell section-space"><div className="section-heading"><div><p className="eyebrow">Pillanatok, amik megmaradnak</p><h2>Ilyen, amikor<br /><span className="italic">együtt ünneplünk.</span></h2></div><p>A jó hangulat nem kötelező programokból születik. Figyelek a társaságra, és akkor adok lendületet, amikor jól esik.</p></div><Gallery /></section>

      <section id="szolgaltatasok" className="services section-shell section-space"><div className="section-heading"><div><p className="eyebrow">A tervezéstől az utolsó közös programig</p><h2>Miben számíthattok<br /><span className="italic">rám?</span></h2></div><p>A részleteket hozzátok igazítjuk.</p></div><Services /></section>

      <section id="referenciak" className="reviews-section section-shell section-space"><p className="eyebrow">Akikkel együtt ünnepeltem</p><h2>Így élték meg<br /><span className="italic">a párok.</span></h2><Reviews /></section>

      <section className="cm-section section-shell section-space" aria-labelledby="cm-title">
        <div className="section-heading"><div><p className="eyebrow">Miért jó, ha van mellettetek egy CM?</p><h2 id="cm-title">Egy megbízható barát<br /><span className="italic">a nagy napon.</span></h2></div><p>Ti az esküvőtökön vagytok.<br />Aznap nem kell szervezőnek lennetek.</p></div>
        <div className="cm-cards">
          <article><CmIcon kind="host" /><h3>Mi is egy CM?</h3><p>A nap házigazdája: összeköti a párt, a vendégeket és a szolgáltatókat. Összefogja a programot, tájékoztat, és ott segít, ahol éppen szükség van rá.</p></article>
          <article><CmIcon kind="plan" /><h3>Egy lépéssel a történések előtt.</h3><p>Ki szól a DJ-nek? Mikor jön a torta? Hová induljanak a vendégek? Figyelek a következő lépésre, hogy ne nektek kelljen az órát nézni és mindenkit keresni.</p></article>
          <article><CmIcon kind="party" /><h3>A jó hangulathoz is hozzáteszek.</h3><p>Ha kell, lendületet adok a társaságnak, játékot vezetek vagy összehozok egy közös nevetést. Ha egy meghitt pillanatnak van helye, annak hagyok teret.</p></article>
        </div>
      </section>

      <section className="new-mood-section section-shell section-space"><div className="section-heading"><div><p className="eyebrow">A ti napotok, a ti hangulatotok</p><h2>Mi áll közel<br /><span className="italic">hozzátok?</span></h2></div><p>A háttérmunkán túl a jó hangulathoz is hozzáteszek.</p></div><MoodPicker /></section>
      <section className="contact-section"><div className="section-shell"><p className="eyebrow">Kezdjük egy beszélgetéssel</p><h2>Nézzük meg,<br /><span className="italic">mire van szükségetek.</span></h2><p>Meséljetek az időpontról, a helyszínről és arról,<br className="desktop-break" /> hogyan képzelitek el az esküvőtöket.</p><Link className="button button-dark" href="/kapcsolat/">Kapcsolatfelvétel <Arrow /></Link><span className="consultation-note">Az első konzultáció ingyenes.</span><Motif kind="spark" className="contact-spark" /></div></section>
    </main><Footer />
  </>;
}

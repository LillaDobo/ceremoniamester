import { Header } from "@/components/header";
import { Arrow, Motif } from "@/components/icons";
import { services, site } from "@/lib/site";

function WeddingArt() {
  return <svg viewBox="0 0 700 540" role="img" aria-label="Esküvői hangulatot idéző illusztráció: boltív, pezsgőspoharak és csillagok" className="wedding-art">
    <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0v30" fill="none" stroke="#e8e7d9" strokeWidth=".6"/></pattern></defs>
    <path d="M0 0h700v540H0z" fill="#dfe1cd"/><path d="M0 0h700v540H0z" fill="url(#grid)"/>
    <path d="M172 540V248a178 178 0 0 1 356 0v292" fill="#f7f5ea"/><path d="M202 540V252a148 148 0 0 1 296 0v288" fill="#bfbea9"/>
    <g fill="none" stroke="#343a2c" strokeWidth="2.5"><path d="M230 490c-38-70-69-134-111-190m45 85c-34-3-64-25-74-47 28-3 55 17 74 47Zm-24-40c2-32-5-59-24-72-13 26 1 55 24 72Zm56 93c-40 3-70-9-86-28 28-12 60 0 86 28Zm-9-20c9-38 4-59-11-78-17 26-9 55 11 78ZM482 510c24-98 69-171 109-228m-58 120c26 3 58-8 75-29-23-10-52 4-75 29Zm20-35c-5-28 0-56 17-73 13 22 2 53-17 73Zm-40 84c31 5 60-4 74-23-25-10-51 4-74 23Z"/></g>
    <g transform="translate(269 224) rotate(-13)"><path d="M0 0h58l-5 87c-2 29-47 29-49 0Z" fill="#eadac1" stroke="#343a2c" strokeWidth="2.5"/><path d="M5 49h48M29 108v96m-30 0h60" stroke="#343a2c" strokeWidth="2.5"/><path d="m14 65 7 8m15-9 6 12" stroke="#f7f5ea" strokeWidth="3"/></g>
    <g transform="translate(369 235) rotate(14)"><path d="M0 0h58l-5 87c-2 29-47 29-49 0Z" fill="#eadac1" stroke="#343a2c" strokeWidth="2.5"/><path d="M5 49h48M29 108v96m-30 0h60" stroke="#343a2c" strokeWidth="2.5"/><path d="m14 65 7 8m15-9 6 12" stroke="#f7f5ea" strokeWidth="3"/></g>
    <g stroke="#343a2c" strokeWidth="2" fill="none"><path d="m346 179-6 23m-25-29 12 23m45-14-17 16M102 93v30m-15-15h30M565 181v32m-16-16h32"/><path d="M585 64c0 23-8 31-31 31 23 0 31 8 31 31 0-23 8-31 31-31-23 0-31-8-31-31Z"/></g>
    <circle cx="350" cy="102" r="30" fill="#343a2c"/><path d="m333 102 11 11 22-22" stroke="#f7f5ea" strokeWidth="2" fill="none"/>
    <text x="350" y="505" textAnchor="middle" fill="#343a2c" fontFamily="Georgia, serif" fontSize="23" fontStyle="italic">együtt lesz igazán jó.</text>
  </svg>;
}

export default function Home() {
  return <>
    <a href="#tartalom" className="skip-link">Ugrás a tartalomra</a>
    <Header />
    <main id="tartalom">
      <section className="hero section-shell">
        <p className="eyebrow">Egy nap. Ezer pillanat. A ti történetetek.</p>
        <h1>A nagy nap,<br />ami igazán <span className="italic">rólatok</span> szól<span className="title-dot">.</span></h1>
        <div className="hero-bottom"><p>Ti ünnepeltek. Én összefogom a részleteket.<br />Személyesen, felszabadultan, veletek.</p><a className="button button-dark" href="#kapcsolat">Ismerjük meg egymást <Arrow /></a></div>
        <span className="hero-spark"><Motif kind="spark" /></span>
      </section>

      <section className="visual-section section-shell" aria-label="A nagy nap hangulata">
        <div className="art-frame"><WeddingArt /><span className="image-note">jó társaság · nagy nevetések · ti ketten</span></div>
        <div className="value-cards"><div className="value-card"><Motif kind="rings" /><span>Személyes</span><small>Ahogy ti szeretnétek.</small></div><div className="value-card"><Motif kind="spark" /><span>Felszabadult</span><small>Semmi kötelező feszengés.</small></div><div className="value-card"><Motif kind="glass" /><span>Átgondolt</span><small>A részletek is számítanak.</small></div></div>
      </section>

      <section id="rolam" className="about section-shell section-space">
        <div><p className="eyebrow">A mikrofon mögött</p><h2>Szia, Ricsi vagyok.<br /><span className="italic">Örülök nektek.</span></h2><div className="signature">Ricsi</div></div>
        <div className="about-copy"><p className="large-copy">{site.introduction}</p><p>Nem kell mindenre egyedül gondolnotok. Együtt megtervezzük a napot, én pedig ott leszek, amikor össze kell fogni a csapatot, elindítani a következő programot, vagy egyszerűen oldani a hangulatot.</p><a className="text-link" href="#folyamat">Hogyan dolgozunk együtt? <Arrow /></a></div>
      </section>

      <section id="szolgaltatasok" className="services section-shell section-space">
        <div className="section-heading"><div><p className="eyebrow">Amiben számíthattok rám</p><h2>A háttér biztos.<br /><span className="italic">A pillanat a tiétek.</span></h2></div><p>A felkészüléstől az utolsó táncig.<br />Annyi segítség, amennyire szükségetek van.</p></div>
        <div className="service-list">{services.map((service, i) => <details key={service.title} className="service"><summary><span className="service-number">0{i + 1}</span><span className="service-title">{service.title}</span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-content"><h3>{service.subtitle}</h3><p>{service.text}</p></div></details>)}</div>
      </section>

      <section className="quote-section"><div className="section-shell"><Motif kind="rings" /><p className="eyebrow">Ami igazán számít</p><p className="quote">Ne a forgatókönyvre emlékezzetek.<br /><span className="italic">Hanem arra, milyen jó volt megélni.</span></p><span className="quote-foot">A részletekről gondoskodunk. Az emlékekről ti.</span></div></section>

      <section id="folyamat" className="process section-shell section-space"><p className="eyebrow">Kezdjük egyszerűen</p><h2>Három lépés.<br /><span className="italic">Egy közös történet.</span></h2><div className="process-grid">{[
        ["01", "Beszélgetünk", "Meséljetek magatokról, az elképzeléseitekről és az időpontról. Megnézzük, megtaláljuk-e a közös hangot."],
        ["02", "Megtervezzük", "Közösen összeállítjuk a nap menetét, egyeztetjük a részleteket, és helyet hagyunk a spontán pillanatoknak is."],
        ["03", "Ti megélitek", "Eljön a nap. Ti egymásra és a vendégeitekre figyeltek, én pedig összefogom, amit előkészítettünk."],
      ].map(([number, title, text]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="kapcsolat" className="contact-section"><div className="section-shell"><p className="eyebrow">A ti nagy napotok itt kezdődik</p><h2>Nézzük meg,<br /><span className="italic">mire van szükségetek.</span></h2><p>Meséljetek az időpontról, a helyszínről és arról,<br className="desktop-break" /> hogyan képzelitek el az esküvőtöket.</p>{site.email ? <a className="button button-dark" href={`mailto:${site.email}?subject=${encodeURIComponent("Esküvői megkeresés")}`}>Írjatok nekem <Arrow /></a> : <p className="contact-pending">Az elérhetőségek hamarosan felkerülnek.</p>}{site.phone && <a className="phone-link" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}<Motif kind="spark" className="contact-spark" /></div></section>
    </main>
    <footer className="site-footer section-shell"><a href="#" className="brand">ricsi<span>ceremóniamester</span></a><p>Egy nap, amit jó lesz újra felidézni.</p><a className="text-link" href="#tartalom">Vissza a tetejére ↑</a><small>© {new Date().getFullYear()} Ricsi · Ceremóniamester</small><small>Veletek. Rólatok. Nektek.</small></footer>
  </>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Arrow, Motif } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Kapcsolatfelvétel | Ricsi ceremóniamester", description: "Az első konzultáció ingyenes. Meséljetek az esküvő időpontjáról, a helyszínről és az elképzeléseitekről, és ismerjük meg egymást!" };
const firstMessage = "Szia Ricsi!\n\nA nevünk: \nAz esküvő tervezett időpontja: \nA helyszín / település: \nA vendégek várható száma: \nIlyen esküvőt képzelünk el: \nAmiben segítséget szeretnénk: \nEzen az elérhetőségen tudsz válaszolni: \n\nSzeretnénk egyeztetni az ingyenes első konzultációról.\n";

export default function ContactPage() {
  return <><a href="#tartalom" className="skip-link">Ugrás a tartalomra</a><Header /><main id="tartalom">
    <section className="contact-hero section-shell"><Link href="/" className="text-link"><Arrow className="arrow-back" /> Vissza a főoldalra</Link><p className="eyebrow">Kapcsolatfelvétel</p><h1>Egy jó nap egy<br /><span className="italic">beszélgetéssel</span> kezdődik.</h1><p>Nem kell kész tervvel érkeznetek.<br />Elég, ha meséltek magatokról és arról, amire vágytok.</p><span className="free-badge">Az első konzultáció ingyenes.</span></section>
    <section className="contact-layout section-shell"><div className="contact-methods"><p className="eyebrow">Itt értek el</p><h2>Írjatok vagy<br /><span className="italic">hívjatok fel.</span></h2><div className="contact-method"><span>E-mail</span>{site.email ? <a href={`mailto:${site.email}?subject=${encodeURIComponent("Esküvői megkeresés – első konzultáció")}&body=${encodeURIComponent(firstMessage)}`}>{site.email}<Arrow /></a> : <p>Az e-mail-cím hamarosan felkerül.</p>}</div><div className="contact-method"><span>Telefon</span>{site.phone ? <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}<Arrow /></a> : <p>A telefonszám hamarosan felkerül.</p>}</div>{site.email && <a className="button button-dark" href={`mailto:${site.email}?subject=${encodeURIComponent("Esküvői megkeresés – első konzultáció")}&body=${encodeURIComponent(firstMessage)}`}>Megírom az első üzenetet <Arrow /></a>}<Motif kind="glass" className="contact-doodle" /></div>
    <div className="first-message"><p className="eyebrow">Az első üzenethez</p><h2>Mit írjatok<br /><span className="italic">elsőre?</span></h2><p>Pár mondat bőven elég. Ezek segítenek, hogy képbe kerüljek:</p><ol>{[
      ["Kik vagytok?", "A neveteket, és ha van kedvetek, pár szót magatokról."],
      ["Mikor és hol ünnepeltek?", "Az időpontot és a helyszínt vagy települést. Ha még tervezés alatt van, azt is írjátok meg."],
      ["Mekkora esküvőre készültök?", "Nagyjából hány vendéggel számoltok, és milyen hangulatot szeretnétek."],
      ["Miben segítsek?", "Ceremóniamestert kerestek, szertartásvezetést is szeretnétek, vagy még tájékozódtok?"],
      ["Hol válaszolhatok?", "Egy e-mail-címet vagy telefonszámot, amin elérlek titeket."],
    ].map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
    <section className="consultation-section section-shell section-space"><p className="eyebrow">Mi történik utána?</p><h2>Ismerkedünk.<br /><span className="italic">Kérdeztek. Tervezgetünk.</span></h2><div className="process-grid">{[
      ["01", "Egyeztetünk", "Megnézzük az időpontot, és találunk egy közös alkalmat az első beszélgetésre."],
      ["02", "Megtaláljuk a közös hangot", "Meséltek az elképzeléseitekről, én pedig arról, hogyan tudok segíteni. Az első konzultáció ingyenes."],
      ["03", "Megbeszéljük a folytatást", "Ha szívesen dolgoznánk együtt, átbeszéljük a szolgáltatásokat és a következő lépéseket."],
    ].map(([number, title, text]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </main><Footer /></>;
}

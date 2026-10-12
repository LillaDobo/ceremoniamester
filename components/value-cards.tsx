"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  { name: "Empatikus", file: "empatikus", width: 345, height: 440, lead: "A ti napotokból indulunk ki.", text: "Figyelek arra, mi fontos nektek, miben érzitek jól magatokat, és mi az, amit inkább kihagynátok. Olyan esküvőt rakunk össze, amelyben tényleg önmagatok lehettek." },
  { name: "Profi", file: "profi", width: 397, height: 469, lead: "A forgatókönyvtől az egész nap levezényléséig.", text: "Összehangolom a szolgáltatókat, kézben tartom a programot, és figyelek az apró részletekre is. Ti megélitek a napot, én gondoskodom arról, hogy gördülékenyen menjen." },
  { name: "Laza", file: "laza", width: 384, height: 468, lead: "Semmi sem kötelező. Csináljuk a ti módotokon.", text: "Fiatalos, közvetlen hangulatban dolgozunk együtt. Jöhetnek a saját ötleteitek, a közös nevetések és a spontán pillanatok: a napot hozzátok igazítom." },
];

export function ValueCards() {
  const [active, setActive] = useState<number | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const selected = active === null ? null : cards[active];
  return <div className="personality-cards">
    <div className="personality-collage">{cards.map((card, index) => <button type="button" className={`personality-card personality-card-${index}${active === index ? " is-selected" : ""}`} key={card.file} aria-expanded={active === index} aria-controls="personality-description" aria-label={`${card.name}: ${active === index ? "leírás bezárása" : "részletek"}`} onClick={() => setActive(active === index ? null : index)}>
      <Image src={`${basePath}/images/cards/${card.file}.svg`} width={card.width} height={card.height} alt={card.name} className="personality-art" />
    </button>)}</div>
    <div id="personality-description" className={`personality-panel${selected ? " is-open" : ""}`} aria-live="polite" aria-atomic="true">
      {selected ? <><p className="eyebrow">{selected.name}</p><h3>{selected.lead}</h3><p>{selected.text}</p><button type="button" className="personality-close" aria-label="Kártyaleírás bezárása" onClick={() => { document.querySelector<HTMLButtonElement>(`.personality-card-${active}`)?.focus(); setActive(null); }}>×</button></> : <p className="personality-hint">Három szó rólam. Kattintsatok arra, amelyikre kíváncsiak vagytok.</p>}
    </div>
  </div>;
}

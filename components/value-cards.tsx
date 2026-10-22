"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  { name: "Empatikus", file: "empatikus", width: 345, height: 440, lead: "A ti napotokból indulunk ki.", text: "Figyelek arra, mi fontos nektek, miben érzitek jól magatokat, és mi az, amit inkább kihagynátok. Olyan esküvőt rakunk össze, amelyben tényleg önmagatok lehettek." },
  { name: "Profi", file: "profi", width: 397, height: 469, lead: "A forgatókönyvtől az egész nap levezényléséig.", text: "Összehangolom a szolgáltatókat, kézben tartom a programot, és figyelek az apró részletekre is. Ti megélitek a napot, én gondoskodom arról, hogy gördülékenyen menjen." },
  { name: "Laza", file: "laza", width: 384, height: 468, lead: "Semmi sem kötelező. Csináljuk a ti módotokon.", text: "Fiatalos, közvetlen hangulatban dolgozunk együtt. Jöhetnek a saját ötleteitek, a közös nevetések és a spontán pillanatok: a napot hozzátok igazítom." },
];

export function ValueCards() {
  const [backs, setBacks] = useState<boolean[]>([false, false, false]);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const toggle = (index: number) => setBacks(previous => previous.map((back, i) => i === index ? !back : back));
  return <div className="personality-cards inline-personalities"><div className="personality-collage">
    {cards.map((card, index) => <button type="button" key={card.file}
      className={`personality-card personality-card-${index}${backs[index] ? " shows-back" : ""}`}
      aria-label={`${card.name}: ${backs[index] ? "előlap megjelenítése" : "részletek megjelenítése"}`}
      aria-expanded={backs[index]} aria-controls={`personality-back-${index}`}
      onPointerEnter={event => { if (event.pointerType === "mouse") toggle(index); }}
      onClick={event => { if (event.detail === 0 || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) toggle(index); }}>
      <span className="personality-front" aria-hidden={backs[index]}><Image src={`${basePath}/images/cards/${card.file}.svg`} width={card.width} height={card.height} alt={card.name} className="personality-art" /></span>
      <span className="personality-back" id={`personality-back-${index}`} aria-hidden={!backs[index]}><span className="eyebrow">{card.name}</span><strong>{card.lead}</strong><span>{card.text}</span></span>
    </button>)}
  </div></div>;
}

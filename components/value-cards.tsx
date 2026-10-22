"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  { name: "Empatikus", file: "empatikus", width: 345, height: 440, x: 0, y: 20.1346, angle: -3.62448, lead: "A ti napotokból indulunk ki.", text: "Figyelek arra, mi fontos nektek, miben érzitek jól magatokat, és mi az, amit inkább kihagynátok. Olyan esküvőt rakunk össze, amelyben tényleg önmagatok lehettek." },
  { name: "Profi", file: "profi", width: 397, height: 469, x: 82.6874, y: 2.42432, angle: 9.30151, lead: "A forgatókönyvtől az egész nap levezényléséig.", text: "Összehangolom a szolgáltatókat, kézben tartom a programot, és figyelek az apró részletekre is. Ti megélitek a napot, én gondoskodom arról, hogy gördülékenyen menjen." },
  { name: "Laza", file: "laza", width: 384, height: 468, x: 0.000244141, y: 53.0339, angle: -9.58506, lead: "Semmi sem kötelező. Csináljuk a ti módotokon.", text: "Fiatalos, közvetlen hangulatban dolgozunk együtt. Jöhetnek a saját ötleteitek, a közös nevetések és a spontán pillanatok: a napot hozzátok igazítom." },
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
      <span className="personality-back" id={`personality-back-${index}`} aria-hidden={!backs[index]}>
        <svg viewBox={`0 0 ${card.width} ${card.height}`} preserveAspectRatio="none" className="personality-back-art"><g transform={`translate(${card.x} ${card.y}) rotate(${card.angle})`}>
          <rect width="318.5" height="420" rx="10" fill="#F3F1E7" />
          <rect x="11" y="10" width="297" height="399" rx="3.5" fill="none" stroke="#000" strokeOpacity=".1" />
          <foreignObject x="26" y="28" width="266" height="364"><div className="personality-back-copy"><span className="eyebrow">{card.name}</span><strong>{card.lead}</strong><span>{card.text}</span></div></foreignObject>
        </g></svg>
      </span>
    </button>)}
  </div></div>;
}

"use client";

import { useState } from "react";
import { galleryPhotos } from "@/lib/site";
import { PhotoContent } from "./photo";

const moods = [
  { label: "Meghitt", photo: 0, title: "A pillanatnak is kell hely.", copy: "Személyes szavak, figyelmes jelenlét és idő arra, hogy megéljétek, ami történik. Nem kell minden percet programmal megtölteni." },
  { label: "Közvetlen", photo: 8, title: "Mintha régóta ismernénk egymást.", copy: "Beszélgetések, közös nevetések és könnyed kapcsolódás. Figyelek arra, hogy a vendégeitek is otthon érezzék magukat." },
  { label: "Pörgős", photo: 1, title: "Ha jöhet a lendület, benne vagyok.", copy: "Játékok, humor és közös élmények, amikor a társaságnak jól esik. A hangulatot együtt alakítjuk, erőltetett programok nélkül." },
];

export function MoodPicker() {
  const [active, setActive] = useState(1);
  const mood = moods[active];
  return <div className="mood-picker">
    <p className="mood-question">Milyen hangulat áll közel hozzátok?</p>
    <div className="mood-buttons" role="group" aria-label="Esküvői hangulat választása">{moods.map((option, index) => <button type="button" key={option.label} aria-pressed={active === index} onClick={() => setActive(index)}>{option.label}</button>)}</div>
    <div className="mood-scene"><div className="mood-photo"><PhotoContent photo={galleryPhotos[mood.photo]} /></div><div className="mood-copy" aria-live="polite" aria-atomic="true"><h3>{mood.title}</h3><p>{mood.copy}</p></div></div>
    <p className="mood-footnote">Ezek csak ízelítők. A ti napotokban mindháromnak lehet helye.</p>
  </div>;
}

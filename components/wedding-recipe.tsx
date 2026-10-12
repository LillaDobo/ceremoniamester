"use client";

import { useState } from "react";
import { CmIcon, CmArtwork } from "./cm-icon";

const ingredients = [
  { title: "Jó hangulat", lead: "Lendület, amikor jól esik. Nyugalom, amikor arra van szükség.", text: "Figyelem a társaságot, kapcsolódom a vendégekhez, és ha kell, humorral vagy egy közös játékkal adok lendületet a napnak. A programokhoz senkinek sem kell erőltetetten alkalmazkodnia.", tags: ["Közös nevetések", "Játékok, ha szeretnétek", "Természetes kapcsolódás"] },
  { title: "Profi háttérmunka", lead: "A részletek összeállnak, ti pedig az ünneplésre figyelhettek.", text: "A forgatókönyv, az időzítés és a szolgáltatók összehangolása a háttérben történik. Ha változik a terv, rugalmasan kezelem, és figyelek arra, hogy a vendégek is tudják, mi következik.", tags: ["Átgondolt forgatókönyv", "Együttműködő szolgáltatók", "Rugalmas lebonyolítás"] },
];

export function WeddingRecipe() {
  const [active, setActive] = useState(0);
  const item = ingredients[active];
  return <div className="wedding-recipe" data-active={active}>
    <svg className="recipe-diagram recipe-flow" viewBox="0 0 640 290" role="img" aria-label="Jó hangulat és profi háttérmunka együtt: a ti napotok.">
      <path d="M222 127h55m86 0h55" stroke="#b79d85" strokeWidth="3" strokeDasharray="4 7" />
      <rect className="recipe-circle recipe-circle-mood" x="10" y="12" width="220" height="260" rx="22" fill="#f0e2db" />
      <rect className="recipe-circle recipe-circle-work" x="410" y="12" width="220" height="260" rx="22" fill="#e6ead9" />
      <g transform="translate(49 27) scale(1.18)" color="#6d5042" fill="none"><CmArtwork kind="party" /></g>
      <g transform="translate(449 27) scale(1.18)" color="#576249" fill="none"><CmArtwork kind="plan" /></g>
      <text x="120" y="213" textAnchor="middle" className="flow-label">Jó hangulat</text>
      <text x="120" y="243" textAnchor="middle" className="flow-caption">Együtt megéljük.</text>
      <text x="520" y="210" textAnchor="middle" className="flow-label">Profi háttérmunka</text>
      <text x="520" y="242" textAnchor="middle" className="flow-caption">Én összefogom.</text>
      <circle cx="320" cy="127" r="55" fill="#faf7f0" stroke="#dccabb" strokeWidth="2" />
      <path d="M320 105c-14-16-35 6 0 28 35-22 14-44 0-28Z" fill="#b98e7a" />
      <text x="320" y="151" textAnchor="middle" className="flow-center">A TI</text><text x="320" y="173" textAnchor="middle" className="flow-center">NAPOTOK</text>
    </svg>
    <div className="recipe-mobile-visual" role="img" aria-label="Jó hangulat és profi háttérmunka együtt: a ti napotok."><div><CmIcon kind="party" /><span>Jó hangulat</span></div><span className="recipe-plus" aria-hidden="true">+</span><div><CmIcon kind="plan" /><span>Profi háttérmunka</span></div><p>A ti napotok. Mindkettővel.</p></div>
    <div className="recipe-options" role="group" aria-label="A sikeres esküvő két összetevője">{ingredients.map((ingredient, index) => <button type="button" aria-pressed={active === index} key={ingredient.title} onClick={() => setActive(index)}>{ingredient.title}</button>)}</div>
    <div className="recipe-detail" aria-live="polite" aria-atomic="true"><h3>{item.lead}</h3><p>{item.text}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
  </div>;
}

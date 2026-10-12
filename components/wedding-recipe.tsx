"use client";

import { useState } from "react";

const ingredients = [
  { title: "Jó hangulat", lead: "Lendület, amikor jól esik. Nyugalom, amikor arra van szükség.", text: "Figyelem a társaságot, kapcsolódom a vendégekhez, és ha kell, humorral vagy egy közös játékkal adok lendületet a napnak. A programokhoz senkinek sem kell erőltetetten alkalmazkodnia.", tags: ["Közös nevetések", "Játékok, ha szeretnétek", "Természetes kapcsolódás"] },
  { title: "Profi háttérmunka", lead: "A részletek összeállnak, ti pedig az ünneplésre figyelhettek.", text: "A forgatókönyv, az időzítés és a szolgáltatók összehangolása a háttérben történik. Ha változik a terv, rugalmasan kezelem, és figyelek arra, hogy a vendégek is tudják, mi következik.", tags: ["Átgondolt forgatókönyv", "Együttműködő szolgáltatók", "Rugalmas lebonyolítás"] },
];

export function WeddingRecipe() {
  const [active, setActive] = useState(0);
  const item = ingredients[active];
  return <div className="wedding-recipe" data-active={active}>
    <svg className="recipe-diagram" viewBox="0 0 620 330" role="img" aria-label="A jó hangulat és a profi háttérmunka találkozásában van a ti napotok.">
      <circle className="recipe-circle recipe-circle-mood" cx="220" cy="165" r="140" fill="#ecd9d2" />
      <circle className="recipe-circle recipe-circle-work" cx="400" cy="165" r="140" fill="#e4e8d4" />
      <path d="M310 58a140 140 0 0 1 0 214 140 140 0 0 1 0-214Z" fill="#f9f5eb" />
      <g stroke="#6e504b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m152 153 9-40 32 31-41 9Z" fill="#d6b4a4"/><path d="m160 131 10 10m20-29 12-13m-22 11 1-14m21 36 14-2M150 103l-7-8"/><path d="M193 91c12-5 6 15 20 10"/></g>
      <g stroke="#626f49" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="416" y="88" width="42" height="54" rx="5"/><path d="M427 85v9m20-9v9m-31 13h42m-31 12 6 6 14-13"/></g>
      <text x="173" y="204" textAnchor="middle" className="diagram-label">JÓ</text><text x="173" y="229" textAnchor="middle" className="diagram-label">HANGULAT</text>
      <text x="447" y="194" textAnchor="middle" className="diagram-label">PROFI</text><text x="447" y="221" textAnchor="middle" className="diagram-label">HÁTTÉR</text><text x="447" y="248" textAnchor="middle" className="diagram-label">MUNKA</text>
      <path d="M310 124c-18-20-46 9 0 36 46-27 18-56 0-36Z" fill="#bc8c7b" />
      <text x="310" y="187" textAnchor="middle" className="diagram-center">A TI</text><text x="310" y="208" textAnchor="middle" className="diagram-center">NAPOTOK</text>
    </svg>
    <div className="recipe-options" role="group" aria-label="A sikeres esküvő két összetevője">{ingredients.map((ingredient, index) => <button type="button" aria-pressed={active === index} key={ingredient.title} onClick={() => setActive(index)}>{ingredient.title}</button>)}</div>
    <div className="recipe-detail" aria-live="polite" aria-atomic="true"><h3>{item.lead}</h3><p>{item.text}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
  </div>;
}

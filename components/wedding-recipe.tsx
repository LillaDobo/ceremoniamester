"use client";

import { useState } from "react";
import { CmIcon } from "./cm-icon";

const ingredients = [
  { title: "Jó hangulat", lead: "Lendület, amikor jól esik. Nyugalom, amikor arra van szükség.", text: "Figyelem a társaságot, kapcsolódom a vendégekhez, és ha kell, humorral vagy egy közös játékkal adok lendületet a napnak. A programokhoz senkinek sem kell erőltetetten alkalmazkodnia.", tags: ["Közös nevetések", "Játékok, ha szeretnétek", "Természetes kapcsolódás"] },
  { title: "Profi háttérmunka", lead: "A részletek összeállnak, ti pedig az ünneplésre figyelhettek.", text: "A forgatókönyv, az időzítés és a szolgáltatók összehangolása a háttérben történik. Ha változik a terv, rugalmasan kezelem, és figyelek arra, hogy a vendégek is tudják, mi következik.", tags: ["Átgondolt forgatókönyv", "Együttműködő szolgáltatók", "Rugalmas lebonyolítás"] },
];

export function WeddingRecipe() {
  const [active, setActive] = useState(0);
  const item = ingredients[active];
  return <div className="wedding-recipe" data-active={active}>
    <div className="recipe-balanced-visual" role="img" aria-label="Jó hangulat és profi háttérmunka együtt: a ti napotok.">
      <div className="recipe-ingredient recipe-ingredient-mood"><CmIcon kind="party" /><strong>Jó hangulat</strong><span>Együtt megéljük.</span></div>
      <div className="recipe-result"><span aria-hidden="true">♥</span><strong>A ti<br />napotok</strong></div>
      <div className="recipe-ingredient recipe-ingredient-work"><CmIcon kind="plan" /><strong>Profi háttérmunka</strong><span>Én összefogom.</span></div>
    </div>
    <div className="recipe-options" role="group" aria-label="A sikeres esküvő két összetevője">{ingredients.map((ingredient, index) => <button type="button" aria-pressed={active === index} key={ingredient.title} onClick={() => setActive(index)}>{ingredient.title}</button>)}</div>
    <div className="recipe-detail" aria-live="polite" aria-atomic="true"><h3>{item.lead}</h3><p>{item.text}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
  </div>;
}

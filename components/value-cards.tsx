import Image from "next/image";

const cards = [
  { name: "Empatikus", file: "empatikus", width: 345, height: 440, text: "Rátok figyelek. A ti elképzeléseitekből indulunk ki, hogy az esküvő tényleg rólatok szóljon." },
  { name: "Profi", file: "profi", width: 397, height: 469, text: "A forgatókönyvtől a szolgáltatókkal való egyeztetésig összefogom a részleteket, hogy ti gondtalanul ünnepelhessetek." },
  { name: "Laza", file: "laza", width: 384, height: 468, text: "Semmi kötelező feszengés. Fiatalos, közvetlen hangulat, és olyan programok, amelyekben jól érzitek magatokat." },
];

export function ValueCards() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <div className="value-cards svg-value-cards">{cards.map(card => <details className="value-card-svg" key={card.file}>
    <summary aria-label={`${card.name} – olvass tovább`}><Image src={`${basePath}/images/cards/${card.file}.svg`} width={card.width} height={card.height} alt={`${card.name} – olvass tovább`} className="value-card-art" /></summary>
    <p>{card.text}</p>
  </details>)}</div>;
}

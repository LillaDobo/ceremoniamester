import Image from "next/image";

const cards = [
  { name: "Empatikus", file: "empatikus", width: 345, height: 440, text: "Rátok figyelek. A ti elképzeléseitekből indulunk ki, hogy az esküvő tényleg rólatok szóljon." },
  { name: "Profi", file: "profi", width: 397, height: 469, text: "A forgatókönyvtől a szolgáltatók összehangolásán át az esemény teljes levezényléséig gondoskodom a részletekről, hogy ti gondtalanul ünnepelhessetek." },
  { name: "Laza", file: "laza", width: 384, height: 468, text: "Semmi sem kötelező: csináljuk úgy, ahogy ti szeretnétek. Fiatalos, közvetlen hangulatban dolgozunk együtt, a ti ötleteitekkel és a ti tempótokban." },
];

export function ValueCards() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <div className="value-cards svg-value-cards">{cards.map(card => <figure className="value-card-svg value-card-static" key={card.file}>
    <Image src={`${basePath}/images/cards/${card.file}.svg`} width={card.width} height={card.height} alt={card.name} className="value-card-art" />
    <figcaption>{card.text}</figcaption>
  </figure>)}</div>;
}

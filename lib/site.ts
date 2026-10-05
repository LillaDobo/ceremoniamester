// Publish only approved copy, real contact details, photos and reviews.
export const site = {
  name: "Ricsi",
  email: "",
  phone: "",
  introduction: "Hiszek abban, hogy a legjobb esküvőkön mindenki önmaga lehet. Ti megélitek a pillanatokat, én pedig figyelek arra, hogy a háttérben minden a helyére kerüljön.",
  // The story comes from the supplied design reference.
  story: "Rendezvényszervezői múltam és magabiztos kiállásom miatt egy közeli barátom felkért, hogy vezessem le az esküvőjüket. Mondhatjuk úgy is: a szakma talált rám – és én beleszerettem.",
};

export type Photo = { id: string; src: string; alt: string; caption: string };
// Ten photo positions: one large opening photo and nine gallery photos.
// Put files under public/images, then set src to /images/your-photo.jpg.
export const heroPhoto: Photo = { id: "hero", src: "", alt: "Ricsi ceremóniamesterként egy esküvőn", caption: "A pillanatokért, amiket együtt élünk meg." };
export const galleryPhotos: Photo[] = [
  "A szertartás pillanatai", "Amikor mindenki együtt nevet", "A nagy bevonulás",
  "Koccintás az ifjú párra", "Egy jó játék", "A táncparketten",
  "Apró részletek", "Közös ünneplés", "Az este fényei",
].map((caption, i) => ({ id: `gallery-${i + 1}`, src: "", alt: caption, caption }));

export type Review = { id: string; names: string; text: string; detail?: string };
// Add the 6–7 real reviews here. Never substitute invented testimonials.
// Example structure: { id: "review-1", names: "...", text: "...", detail: "..." }
export const reviews: Review[] = [];

export const services = [
  { title: "Közös tervezés", subtitle: "Az első ötlettől az utolsó részletig", text: "Átbeszéljük, milyen napot képzeltek el. Összerakjuk a forgatókönyvet, és végigvesszük a fontos pillanatokat, hogy az esküvőtök valóban rólatok szóljon.", optional: false },
  { title: "Lebonyolítás", subtitle: "Mindenki tudja, mikor mi következik", text: "Figyelem az időzítést, összehangolom a programokat, és segítek az apró váratlan helyzetekben. Nektek csak jelen kell lennetek, és megélni a napot.", optional: false },
  { title: "Kommunikáció a szolgáltatókkal", subtitle: "Egy csapatként, a ti napotokért", text: "Egyeztetek a helyszínnel, a fotóssal, a videóssal és a zenéért felelős csapattal. Így mindenki tudja, mikor mire készülünk, és nem nektek kell minden kérdést megoldanotok.", optional: false },
  { title: "Játékok & hangulat", subtitle: "Szórakoztatás, feszengés nélkül", text: "A jó hangulat nem egy kötelező feladatlista. Olyan közös pillanatokkal és választható játékokkal készülünk, amelyek passzolnak hozzátok és a vendégeitekhez.", optional: false },
  { title: "Szertartásvezetés", subtitle: "Szavak, amelyek rólatok mesélnek", text: "Ha szimbolikus szertartást szeretnétek, közösen alakítjuk ki a hangvételét és a menetét. Személyes történetekkel, a ti stílusotokban. A jogi házasságkötés külön, anyakönyvvezető előtt történik.", optional: true },
];

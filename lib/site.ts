export const site = {
  name: "Ricsi",
  email: "",
  phone: "",
  basePrice: 225000,
  introduction: "Sziasztok, Ricsi vagyok, 32 éves, 7 éve rendezvényszervező és 3 éve ceremóniamester. Extrovertált, aktív, jókedvű srác vagyok, akinek a hobbija a szakmája, így nekem ez a munka csupa élvezet.",
  goal: "A célom nemcsak az, hogy a párnak a nagy napon semmi dolga ne legyen, hanem az is, hogy az egész napot számukra és minden vendégük számára a lehető legjobb módon, gondtalanul megtervezzük – akár közösen –, én pedig levezessem.",
  difference: "Az újhullámú, fiatalos esküvőket képviselem. Eddigi esküvőim során azt tapasztaltam, hogy a manapság házasodó párok szeretnék, ha ez a nap tényleg róluk szólna, és úgy alakíthatnák, ahogy nekik a legjobb. Én ebben segítek megoldást találni, majd profin levezetem a napot.",
  story: "Rendezvényszervezői múltam és magabiztos kiállásom miatt egy közeli barátom felkért, hogy vezessem le az esküvőjüket. Mondhatjuk úgy is: a szakma talált rám – és én beleszerettem.",
};

export type Photo = { id: string; src: string; alt: string; caption: string; position?: string };
export const heroPhoto: Photo = { id: "hero", src: "/images/fokep.webp", alt: "Ricsi mosolyogva, mikrofonnal vezeti az esküvő programját", caption: "A pillanatokért, amiket együtt élünk meg.", position: "50% 40%" };
export const titlePhotos: Photo[] = [
  { id: "title-ceremony", src: "/images/eskuvo-01.webp", alt: "A pár Ricsivel a szabadtéri szertartáson", caption: "Az igen pillanata", position: "50% 40%" },
  { id: "title-party", src: "/images/eskuvo-02.webp", alt: "Az ifjú pár és vendégeik együtt játszanak az esküvőn", caption: "A közös nevetések", position: "50% 42%" },
];
export const galleryPhotos: Photo[] = [
  { id: "photo-1", src: "/images/eskuvo-01.webp", alt: "Szabadtéri esküvői szertartás Ricsi vezetésével", caption: "Amikor kimondjátok az igent", position: "50% 45%" },
  { id: "photo-2", src: "/images/eskuvo-02.webp", alt: "A pár és a vendégek interaktív esküvői játékban vesznek részt", caption: "Együtt a legjobb", position: "50% 45%" },
  { id: "photo-3", src: "/images/eskuvo-03.webp", alt: "Ricsi beszélget a menyasszonnyal és a vőlegénnyel a kertben", caption: "A ti történetetek", position: "50% 40%" },
  { id: "photo-4", src: "/images/eskuvo-04.webp", alt: "Ricsi mikrofonnal, fekete-fehér esküvői fotón", caption: "A mikrofon mögött", position: "50% 38%" },
  { id: "photo-5", src: "/images/eskuvo-05.webp", alt: "Ricsi az esküvői vendégek előtt vezeti a programot", caption: "Amikor összeáll a nap", position: "52% 40%" },
  { id: "photo-6", src: "/images/eskuvo-06.webp", alt: "Ricsi mikrofonnal koordinálja az esti esküvői programot", caption: "Jó hangulat, jó társaság", position: "55% 40%" },
  { id: "photo-7", src: "/images/eskuvo-07.webp", alt: "Ricsi szertartást vezet a kertben, kezében a forgatókönyvvel", caption: "Szavak, amik rólatok szólnak", position: "50% 40%" },
  { id: "photo-8", src: "/images/eskuvo-08.webp", alt: "Ricsi a párral és gyerekekkel az esküvői szertartáson", caption: "Mindenki részese", position: "50% 40%" },
  { id: "photo-9", src: "/images/eskuvo-09.webp", alt: "Ricsi mosolyogva beszélget egy esküvői vendéggel a szabadban", caption: "Lazán, köztetek", position: "45% 40%" },
  { id: "photo-10", src: "/images/eskuvo-10.webp", alt: "Ricsi a menyasszonnyal és a koszorúslányokkal beszélget", caption: "Közös pillanatok", position: "50% 40%" },
  { id: "photo-11", src: "/images/eskuvo-11.webp", alt: "Ricsi mikrofonnal a pár és az esküvői vendégek között", caption: "Veletek, az egész napon", position: "50% 38%" },
];

export type Review = { id: string; names: string; text: string; detail?: string };
// Add only the real reviews supplied by the couples.
export const reviews: Review[] = [];

export const services = [
  { title: "Közös tervezés", subtitle: "Forgatókönyvírás, a ti elképzeléseitekkel", text: "Nem tudjátok, hogyan álljon össze a program? Segítek ebben is. Korlátlan számú megbeszélésen, személyesen vagy online, közösen állítjuk össze a számotokra ideális tervet: a ti igényeitek és kívánságaitok, valamint az én tapasztalatom alapján. Ezután elkészítem a pontos forgatókönyvet.", optional: false, icon: "plan" },
  { title: "Helyszín-előkészítés", subtitle: "Segítség már az érkezés előtt", text: "Korábban érkezem, így a helyszín ideális előkészítésében is tudok segíteni, hogy minden készen álljon, mire elkezdődik a nagy nap.", optional: false, icon: "place" },
  { title: "Az egész nap koordinálása", subtitle: "Ti megélitek. Én összefogom.", text: "Én felelek azért, hogy minden program időben, pontosan és professzionálisan legyen lebonyolítva. Folyamatosan tájékoztatom a vendégeket is, hiszen egy esküvőn nekik is rengeteg kérdésük lehet.", optional: false, icon: "day" },
  { title: "Szolgáltatói kommunikáció", subtitle: "Egy csapatként a háttérben", text: "Folyamatos kapcsolatot tartok a helyszínen dolgozó kollégákkal, pincérekkel és a DJ-vel, hogy minden gördülékenyen, gond nélkül történjen.", optional: false, icon: "team" },
  { title: "Játékok & hangulat", subtitle: "Fiatalos, interaktív, pörgős", text: "Igény szerint fiatalos, interaktív, pörgős játékokkal és programokkal is készülök. Levezénylem őket, és figyelek arra, hogy a közös szórakozás a ti esküvőtök hangulatához illjen.", optional: false, icon: "party" },
  { title: "Szertartásvezetés", subtitle: "Személyes szavak, személyes történet", text: "Ha szimbolikus szertartást is szeretnétek, közösen alakítjuk ki a hangvételét és a menetét, a ti történetetekkel. A jogi házasságkötés külön, anyakönyvvezető előtt történik.", optional: true, icon: "ceremony" },
] as const;

# Faur Richárd – a weboldal színrendszere

Frissítve: **2026. november 19.** A dokumentum a jelenlegi, meleg törtfehér–petroltürkiz–napsárga palettát és a téglalap alakú szolgáltatáskártyákat írja le.

A cél egy laza, közvetlen, mégis összeszedett megjelenés. A meleg törtfehér hagyja érvényesülni a fotókat, a füstös petrol ad karaktert és szakmai tartást, a napsárga pedig a kapcsolatfelvételre és az apró, játékos részletekre irányítja a figyelmet.

## Három alapszín, egyetlen szerkesztési hely

Minden felületi szín az [app/colors.css](../app/colors.css) fájlból származik. Az elején három hexkód szerkeszthető:

| Alapszín | Változó | Mostani érték | Feladat |
| --- | --- | --- | --- |
| Meleg törtfehér | `--palette-gray` | `#F4F1EA` | Oldalháttér, nagy üres felületek, semleges kártyák alapja. |
| Petroltürkiz | `--palette-petrol` | `#2A7F83` | Címek, navigáció, szolgáltatáskártyák, lábléc és fontosabb grafikai elemek. |
| Napsárga | `--palette-yellow` | `#F2B824` | Kapcsolatfelvételi gombok, egy szolgáltatáskártya, ikonrészletek, interaktív kiemelések. |

Az alapszínek módosításával a hozzájuk tartozó világosabb és sötétebb árnyalatok, szegélyek, hoverállapotok és árnyékok **automatikusan újraszámolódnak**. Például a petrolt csak egyszer kell `#2B8A94`-re átírni; nem kell külön megkeresni minden címet és kártyát.

A módosítás a futó fejlesztői nézetben frissül; a megosztott weboldalhoz az új verzió buildelése és közzététele is szükséges. A böngészőikon ugyanebből a palettából készül a `predev` és `prebuild` lépésben. Ha már fut a fejlesztői szerver, a favicon frissítéséhez újraindítás vagy `node scripts/sync-palette.mjs` szükséges.

## A 60–30–10 arány használata

Az arány vizuális irányelv, nem pixelenként mért kvóta. A fotók természetes színei nem részei a paletta arányszámításának.

- **60% semleges alap:** a főoldal és a kapcsolatoldal háttere, a fotók közötti szünetek, a bemutatkozás, a polaroidkeretek és a véleménykártyák. A szürke ne váljon sötét, összefüggő tömbbé.
- **30% petrol karakter:** főcímek, szalagcímek, egy hangsúlyos szolgáltatáskártya, a lábléc, valamint a világos petrolból képzett apró részletek. A sötétebb árnyalat csak kis szövegekhez vagy kontrasztos felületekhez kell.
- **Legfeljebb 10% sárga akcentus:** elsősorban a kapcsolatfelvételi gomb és az ikonok apró elemei. Egy szolgáltatáskártya lehet sárga, de nincs sárga oldalháttér vagy hosszú sárga folyószöveg. A navigáció hover-aláhúzása is ebből a színből készül.

## Melyik felület melyik színt kapja?

| Szerep / CSS-változó | Használat | Szabály |
| --- | --- | --- |
| `--color-bg` | Az oldal alapja | Közvetlenül a meleg törtfehér. |
| `--color-surface` | Semleges kártya, polaroid, mobilmenü | A szürke fehérrel világosított változata; a háttértől finoman elválik. |
| `--color-surface-muted` | Másodlagos semleges kitöltés | A szürke fehérrel világosítva; nincs benne petrol. |
| `--color-brand` | Egy szolgáltatáskártya, szalagcímek és ikonvonalak | Az eredeti petrol. |
| `--color-heading` | Címek, navigáció | A petrol enyhén sötétített változata, világos felületen is jól olvasható. |
| `--color-brand-dark` | Lábléc, erős kontraszt, fókusz | Mély petrol; nagy felületen takarékosan. |
| `--color-brand-soft` | Másodlagos, finom petrolkitöltések | Világos petrol, sötét címmel. |
| `--color-accent` | CTA-gomb, egy szolgáltatáskártya, ikonrészlet, hover-aláhúzás | Napsárga, sötét felirattal. |
| `--color-accent-hover` | CTA hover | A sárga petrollal mélyített változata. A gomb alakja nem változik. |
| `--color-accent-soft` | Ikonkitöltés | Halvány sárga; csak kis felületen. |
| `--color-text` | Folyószöveg, sárga gomb felirata | Petrolból képzett, sötét, semleges tinta. |
| `--color-muted` | Magyarázat, megjegyzés | Visszafogott szöveg világos felületen. |
| `--color-on-brand` | Petrolkártya és lábléc felirata | Világos felirat; sárga CTA-n nem használjuk. |
| `--color-border`, `--color-brand-border` | Szegélyek, elválasztók | Finom, a palettából származó vonalak. |
| `--color-card` | A három személyiségkártya mindkét oldala | Ugyanaz a semleges alap és ugyanaz a visszafogott papírtextúra. |
| `--color-photo-scrim` | Fotófelirat és idézet alatti sötétítés | Áttetsző, a szövegszínből képzett réteg. A kép eredeti színeit nem módosítja. |

## Árnyékok, textúrák és interakciók

Az árnyékok nem tiszta feketéből készülnek. A `--color-shadow` a sötét tintaszín 12%-os, a `--color-shadow-hover` 20%-os változata. A nagyobb kártyák finom, elmosott árnyékot kapnak; a véleménykártyáknál a hover enyhe kiemelkedést ad. A szegély és az árnyék együtt választja el a semleges kártyát a szürke háttértől.

A személyiségkártyák eredeti vonalas grafikái megmaradnak, de a színeiket már a CSS-változók adják. A papírtextúra szürkeárnyalatos, 12%-os fedésű, ezért nem visz vissza külön bézs vagy rózsaszín tónust. Mindkét kártyaoldal ugyanarra a textúrára és színre hivatkozik.

A linkek petrolszínűek, rámutatásra sárga aláhúzás jelenik meg. A billentyűzetfókusz jól látható mély petrol keretet kap. Petrolkártyán világos szöveg, sárga gombon sötét szöveg szerepel. Fotón a világos felirat alatt mindig sötétítő réteg van.

A szolgáltatások ismét téglalap alakú kártyák. Hat kártyából négy semleges, egy petrol, egy pedig napsárga. A sárga kártyán sötét szöveg szerepel; ez a nagyobb akcentus biztosítja, hogy a sárga ne csak apró, alig észrevehető ikonokban jelenjen meg. A gombok, az ikonalapok, a történetgomb, néhány vékony szegély és az idézet zárósorának aláhúzása is ezt támogatja.

### A hat szolgáltatáskártya színkiosztása

| Sorrend | Szolgáltatás | Felület | Szöveg |
| --- | --- | --- | --- |
| 1. | Programok közös tervezése | Semleges, világos | Sötét tinta és mély petrol cím |
| 2. | Helyszín előkészítésének támogatása | Petrol | Világos |
| 3. | Szolgáltatók teljes koordinálása | Semleges, világos | Sötét tinta és mély petrol cím |
| 4. | Az egész nap koordinálása | Semleges, világos | Sötét tinta és mély petrol cím |
| 5. | Programok felkonferálása, játékok | Napsárga | Sötét |
| 6. | Egyéni szertartásvezetés | Semleges, világos | Sötét tinta és mély petrol cím |

A hátoldal ugyanazt a felület- és szövegszínt használja, mint az előlap. A pontos komponensszerepek az [app/brand.css](../app/brand.css) fájlban találhatók.

### Miért lett kevésbé kékes?

Az előző `#E8ECEF` hűvös szürke, a `#1A7A82` kékes petrol volt. A jelenlegi `#F4F1EA` meleg törtfehér alap; a `#2A7F83` a kért petroltürkiz. A nagy semleges felületeket már nem színezzük petrollal: a szöveg, a szegély és az árnyék is semlegesebb. A napsárga `#F2B824` megmaradt, de több jól látható felületet kapott. A 60–30–10 arány továbbra is az összhatás iránya, nem a komponensek darabszáma.

## Hogyan kérj később színváltoztatást?

- „A szürke alap legyen `#D8DEDF`.” → csak a `--palette-gray` értéke változik.
- „A petrol legyen `#2B8A94`.” → csak a `--palette-petrol` értéke változik; a címek, kártyák, halvány kitöltések és a sötét petrol is követi.
- „A sárga legyen `#E6A100`.” → csak a `--palette-yellow` értéke változik; a gombok, ikonakcentusok és hoverek is követik.
- „Csak a kapcsolatblokk legyen világosabb.” → a kapcsolatblokk szerepét kell másik, már létező színváltozóra kötni az `app/brand.css` fájlban; nem kell új hexkód.

## Fejlesztési szabályok

1. Új felületi hexkódot kizárólag az `app/colors.css` palettarészébe írunk. Alapesetben a három meglévő alapszín elég.
2. Az elrendezési szabályok az `app/globals.css`, a komponensek színszerepei az `app/brand.css` fájlban vannak. Mindkettő a közös változókat használja.
3. Az ikonok és az aktívan használt SVG-k ugyanazokat a szerepeket kapják. A `components/personality-front.tsx` az eredeti kártyák témázható vektorváltozata; a `public/images/cards/*.svg` fájlok megőrzött forrásgrafikák, a felületen már nem közvetlenül jelennek meg.
4. A fotók természetes színei és a textúra képpontjai nem CSS-színek; csak az alájuk/föléjük tett felületi rétegek témázhatók. Az `app/icon.svg` generált fájl, kézzel nem szerkesztjük.
5. Palettaváltás után ellenőrizni kell a címek, a gombok, a halvány szövegek és a fotófeliratok olvashatóságát, a hover/fókusz állapotokat és a mobilnézetet. A világosabb petrol önmagában nem garantál elegendő kontrasztot, ezért a címek és a fókusz külön, származtatott sötétebb árnyalatot használnak.


## A jelenlegi paletta olvashatósága

Az alábbi kontrasztarányok a CSS-ben megadott, származtatott színekből számolt értékek. Fotókra és textúrákra nem érvényesek automatikusan; azoknál a tényleges hátteret és sötétítést is ellenőrizni kell.

| Párosítás | Számolt kontraszt |
| --- | ---: |
| Folyószöveg / törtfehér háttér | 16,75 : 1 |
| Cím / törtfehér háttér | 5,40 : 1 |
| Magyarázó szöveg / törtfehér háttér | 6,37 : 1 |
| Világos szöveg / petrol | 4,59 : 1 |
| Sötét szöveg / napsárga | 10,49 : 1 |

## Generált böngészőikon és Git-frissítés

Az [app/icon.svg](../app/icon.svg) a [scripts/sync-palette.mjs](../scripts/sync-palette.mjs) által generált fájl. A színeit a palettában módosítjuk, nem közvetlenül az SVG-ben.

Ha a `git pull` kizárólag ennek a generált fájlnak a helyi módosítása miatt áll meg, a fejlesztői szerver leállítása után az alábbi parancsokkal frissíthető a projekt:

```powershell
git restore -- app/icon.svg
git pull origin feat/static-nextjs-site
npm.cmd run dev
```

A `git restore` itt csak a generált ikon helyi módosítását dobja el. Más, saját módosítás alatt álló fájlokra ezt a lépést nem kell kiterjeszteni.


## Színváltoztatási napló

Minden további palettamódosítást ebben a naplóban is rögzítünk; a fenti palettatáblázat mindig az aktuális állapotot mutatja.

| Dátum | Szerep | Előző érték | Új érték | Kapcsolódó változás |
| --- | --- | --- | --- | --- |
| 2026. november 19. | Oldalháttér (`--palette-gray`) | `#E5E4DF` | `#F4F1EA` | Meleg törtfehér háttér; a semleges felületek és a származtatott árnyalatok is követik. |
| 2026. november 19. | Petrol alapszín (`--palette-petrol`) | `#287B76` | `#2A7F83` | A korábbi zöldes petrol helyett a kért petroltürkiz; címek, kártya, ikonok és lábléc is követi. |

A napsárga `#F2B824` ebben a módosításban nem változott.

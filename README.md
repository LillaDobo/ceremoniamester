# Ricsi – ceremóniamester

Magyar nyelvű, mobile-first, statikus weboldal Next.js App Router, TypeScript és Tailwind CSS alapokon. Világos bézs felületek, játékosan elforgatott kártyák, meleg színek és sötét fotóátmenet. Nincs backend, adatbázis, analitika vagy külső betűkészlet.

## Oldalak

- `/`: bemutatkozás → nagykép → hogyan lettem ceremóniamester → pár szó rólam → galéria → idézet → szolgáltatások → vélemények → kapcsolat és footer.
- `/kapcsolat/`: elérhetőségek, útmutató az első üzenethez és az ingyenes első konzultáció menete. A fejléc és a főoldali gombok ide vezetnek.

Az első konzultáció ingyenessége a főoldal tetején, alján, a footerben és a kapcsolatoldalon is megjelenik. A „Hogyan lettem ceremóniamester?” történet a megadott referenciából származik; további mintaszövegek jóváhagyást igényelnek. Két értékkártya maradt: Empatikus és Laza. A harmadik jelzőt szándékosan nem találtuk ki.

## Fejlesztés

Node.js 20.9+ szükséges.

```bash
npm ci
npm run dev
```

Nyisd meg a http://localhost:3000 címet.

Windows PowerShell esetén, ha az npm.ps1 futtatását blokkolja a házirend, használd az `npm.cmd ci` és `npm.cmd run dev` parancsokat; nincs szükség a házirend módosítására.

```bash
npm run build
npm run typecheck
```

A build az `out/` mappába exportál mindkét oldalhoz statikus HTML/CSS/JS fájlokat. Helyi megtekintéshez például `npx serve out` használható. Nincs szükség Node.js szerverre az éles kiszolgáláshoz.

## Fotók: összesen tíz

A valós fotók még nincsenek megadva. Jelenleg egyértelműen jelölt fotóhelyek láthatók, nem kitalált esküvői referenciák.

1. Másold a képeket a `public/images/` mappába.
2. A `lib/site.ts` fájlban töltsd ki a `heroPhoto.src` és a kilenc `galleryPhotos` elem `src` mezőjét (például `/images/eskuvo-01.jpg`).
3. Add meg a megfelelő képleírást az `alt` és feliratot a `caption` mezőkben.

A főoldal egy nagy fotót és kilenc galériaképet jelenít meg. Asztali nézetben körülbelül 2,4 galériakártya látszik, mobilon 1,2. A galéria érintéssel, nyílgombokkal és billentyűzettel is lapozható; a két végén a gombok visszafordulnak a másik végre. Nincs automatikus forgatás. A jQuery kizárólag a görgetőkonténer pozícióját animálja, a React által kezelt elemeket nem módosítja. A csökkentett mozgás beállítását tiszteletben tartja.

## Vélemények

A `lib/site.ts` `reviews` listájába illeszd a 6–7 valódi véleményt:

```ts
{ id: "review-1", names: "A pár neve", text: "A pár eredeti véleménye", detail: "Opcionális kiegészítés" }
```

Amíg nincs megadott vélemény, a szekció „hamarosan” szöveget és három jól láthatóan megjelölt helyet mutat. Nincsenek kitalált értékelések vagy csillagok. A rács tetszőleges számú bejegyzést kezel, ezért az első három után a továbbiak is egyszerűen hozzáadhatók.

## Elérhetőségek és tartalom

- `lib/site.ts`: név, e-mail, telefon, történet, bemutatkozás, fotók, vélemények és szolgáltatások.
- `app/page.tsx`: főoldal.
- `app/kapcsolat/page.tsx`: kapcsolatoldal és az első üzenet sablonja.
- `app/globals.css`: közös színek, tipográfia és reszponzív elrendezés, Tailwind import és téma.
- `components/header.tsx`, `components/footer.tsx`: közös navigáció.
- `components/gallery.tsx`: lapozás.

Az e-mail és telefon szándékosan üres. Valós adatok megadása után a kapcsolatoldalon és a footerben működő e-mail/híváslinkek jelennek meg. A kapcsolatoldal e-mail-gombja kitöltendő üzenetsablonnal nyitja meg a látogató saját levelezőjét, nem küld automatikusan üzenetet. Az oldal nem gyűjt űrlapadatokat.

Öt mozaikos, natív lenyitható szolgáltatás: közös tervezés, lebonyolítás, kommunikáció a szolgáltatókkal, játékok és hangulat, opcionális szertartásvezetés.

## GitHub Pages

Almappás tárhelyhez:

```bash
NEXT_PUBLIC_BASE_PATH=/ceremoniamester npm run build
```

Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/ceremoniamester"
npm.cmd run build
```

Egyéni domainnél hagyd üresen a változót. Az `out/` tartalmát kell publikálni. A `trailingSlash` beállításnak köszönhetően a kapcsolatoldal külön `kapcsolat/index.html` fájlba kerül. A CI típusellenőrzést és buildet futtat, nem publikál automatikusan.

## Hozzáférhetőség

Magyar dokumentumnyelv, szemantikus szekciók, billentyűzettel használható natív szolgáltatásleírások, látható fókusz és tartalomra ugró link mindkét oldalon. A mobilmenü állapotát `aria-expanded` jelzi, Escape-pel bezárható. A galéria nem indul el automatikusan, és tiszteletben tartja a csökkentett mozgás beállítását.

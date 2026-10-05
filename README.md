# Ricsi – ceremóniamester

Magyar nyelvű, mobile-first, statikus weboldal Next.js App Router, TypeScript és Tailwind CSS alapokon. Világos bézs felületek, játékosan elforgatott kártyák, meleg színek és sötét fotóátmenet. Nincs backend, adatbázis, analitika vagy külső betűkészlet.

## Oldalak

- `/`: bemutatkozás → nagykép → hogyan lettem ceremóniamester → pár szó rólam → galéria → idézet → szolgáltatások → vélemények → kapcsolat és footer.
- `/kapcsolat/`: elérhetőségek, útmutató az első üzenethez és az ingyenes első konzultáció menete. A fejléc és a főoldali gombok ide vezetnek.

Az első konzultáció ingyenessége a főoldal tetején, alján, és a kapcsolatoldalon is megjelenik. A „Hogyan lettem ceremóniamester?” történet a megadott referenciából származik; további mintaszövegek jóváhagyást igényelnek. Három elforgatott kártya látható: Empatikus, Laza és Harmadik jelző. Az utolsó kártyán a „Még nem végleges” felirat jelzi a későbbi szövegcserét. A címbe két kis polaroidfotó került.

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

## Fotók

A feltöltött ZIP összes, azaz 12 fotója bekerült a projektbe. A `fokep.jpg` a főoldal teljes szélességű nagyképe, a másik 11 kép a galériában szerepel. A címben két galériakép kisebb, polaroidos változatban ismétlődik. A képek `public/images/` alatt WebP formátumban találhatók, legfeljebb 1800 pixel szélesen (a főképnél 2048), EXIF metaadatok nélkül. Az eredeti ZIP változatlan maradt.

- `heroPhoto`: a teljes szélességű nagykép.
- `titlePhotos`: a címbe illesztett két fotó.
- `galleryPhotos`: a galériaképek sorrendje, feliratai és képleírásai.
- A `position` mező állítja a képkivágás fókuszpontját.

Asztali nézetben körülbelül 2,4 galériakártya látszik, mobilon 1,2. A galéria érintéssel, nyílgombokkal és billentyűzettel is lapozható; a két végén a gombok visszafordulnak a másik végre. Nincs automatikus forgatás. A jQuery kizárólag a görgetőkonténer pozícióját animálja, a React által kezelt elemeket nem módosítja. A csökkentett mozgás beállítását tiszteletben tartja.

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

Hat mozaikos, natív lenyitható szolgáltatás: közös tervezés és forgatókönyvírás, helyszín-előkészítés, az egész nap koordinálása, szolgáltatói kommunikáció, játékok és hangulat, opcionális szertartásvezetés. A két független oszlopban egy kártya kinyitása nem nyújtja meg a másik oszlop kártyáit.

A bemutatkozás, célkitűzés és fiatalos esküvőkről szóló szöveg a kapott tartalom alapján, helyesírási javításokkal került be. A 225 000 Ft-os alapár kizárólag a kapcsolatoldalon látható, a `site.basePrice` mezőből.

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

## Fejléc és footer

A fejlécben a két soros „Richárd / Faur” név jobb oldalon áll, a navigáció asztali nézetben középre igazított. A kapcsolatlink és a footer kapcsolatlinkje finom aláhúzás- és nyílanimációt kapott; csökkentett mozgás esetén az animáció leáll.

A footer „Ricsi” feliratot, kapcsolati navigációt és készítői kreditet tartalmaz. Nincs benne ingyenes konzultációs szöveg vagy ceremóniamester alcím. A készítő neve (`site.creator`) a meglévő LICENSE szerzőmegjelöléséből származik. A credit nem állítja, hogy a fotók és minden szöveg szerzői joga a fejlesztőé. A meglévő MIT licenc változatlan maradt.

A favicon bézs alapon rajzolt mikrofon. A szolgáltatásmozaik egységes, enyhén eltérő bézs árnyalatokat használ.

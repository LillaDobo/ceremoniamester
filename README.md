# Ricsi – ceremóniamester

Magyar nyelvű, mobile-first bemutatkozó weboldal Next.js App Router, TypeScript és Tailwind CSS alapokon. Backend, adatbázis, analitika és külső betűkészlet nélkül. A referencia hangulatát törtfehér felületek, olívazöld részletek, szerif tipográfia és elforgatott kártyák idézik fel. Az SVG-illusztráció a projekthez készült; nem tartalmaz a referenciából átvett portrét.

## Fejlesztés

Node.js 20.9+ szükséges.

```bash
npm ci
npm run dev
```

Nyisd meg a http://localhost:3000 címet.

```bash
npm run build
npm run typecheck
```

A build statikus HTML/CSS/JS exportot készít az `out/` mappába. Ez statikus tárhelyre tölthető, Node.js szerver nélkül. A helyi megtekintéshez használj statikus webszervert, például `npx serve out`.

## Tartalom és elérhetőségek

- `lib/site.ts`: név, e-mail, telefonszám, bemutatkozás és szolgáltatások.
- `app/page.tsx`: szekciók és további szövegek.
- `app/globals.css`: színek, tipográfia és reszponzív elrendezés; a Tailwind import és téma itt található.
- `app/layout.tsx`: magyar nyelv és keresőoldali metaadatok.
- `components/header.tsx`: mobilmenü, az egyetlen kliensoldali komponens.

A szövegek jóváhagyásra váró mintaszövegek. Az e-mail és telefon szándékosan üres. Valós e-mail megadása után a kapcsolat szekcióban megjelenik az e-mail-kliensben megnyíló gomb; valós telefon megadása után a híváslink is. Az oldal nem küld űrlapadatokat. Élesítés előtt szükséges a végleges szöveg, az elérhetőségek és igény szerint a saját fotók beillesztése. A `portrait` mező a későbbi fotó helyének fenntartott adat; jelenleg nincs megjelenítéshez kötve.

## GitHub Pages

Almappás tárhelyhez az exportáláskor állítsd be a repo nevét:

```bash
NEXT_PUBLIC_BASE_PATH=/ceremoniamester npm run build
```

Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/ceremoniamester"
npm run build
```

Egyéni domainnél hagyd üresen a változót. Az `out/` tartalmát kell publikálni. A mellékelt CI kizárólag típusellenőrzést és buildet futtat; nem publikál automatikusan.

## Hozzáférhetőség

Szemantikus szekciók, magyar dokumentumnyelv, billentyűzettel működő natív lenyitható leírások, látható fókusz, tartalomra ugró link és csökkentett mozgás támogatása. A mobilmenü állapotát `aria-expanded` jelzi. Nincsenek kitalált értékelések, ügyfelek vagy referenciák.

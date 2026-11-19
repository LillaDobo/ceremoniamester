// The browser favicon is a separate SVG document: generate it from the same palette.
import { readFileSync, writeFileSync } from 'node:fs';
const palette = readFileSync(new URL('../app/colors.css', import.meta.url), 'utf8');
const read = name => {
  const value = palette.match(new RegExp(`--palette-${name}:\\s*(#[a-fA-F0-9]{6})`))?.[1];
  if (!value) throw new Error(`Missing palette colour: ${name}`);
  return value;
};
const gray = read('gray'), petrol = read('petrol'), yellow = read('yellow');
writeFileSync(new URL('../app/icon.svg', import.meta.url), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="${gray}"/><g fill="none" stroke="${petrol}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="22" y="12" width="20" height="29" rx="10"/><path d="M16 31v2a16 16 0 0 0 32 0v-2M32 49v8m-8 0h16M23 22h18m-18 7h18"/></g><circle cx="51" cy="13" r="5" fill="${yellow}"/></svg>\n`);

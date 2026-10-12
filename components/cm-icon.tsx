export function CmArtwork({ kind }: { kind: "host" | "plan" | "party" }) {
  return <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    {kind === "host" && <><circle cx="60" cy="60" r="52" fill="#eee5da" stroke="none"/><circle cx="35" cy="42" r="12" fill="#fffaf2"/><path d="M14 84V72a21 21 0 0 1 42 0v12" fill="#d8dec8"/><rect x="67" y="22" width="20" height="39" rx="10" fill="#e5cfc3"/><path d="M61 44v8a16 16 0 0 0 32 0v-8M77 68v18M65 86h24M72 32h10m-10 8h10"/><path d="M42 17h16l8 8v15H49l-7 6V17Z" fill="#faf7f0"/></>}
    {kind === "plan" && <><path d="M13 29q24-12 46 0v61q-22-12-46 0V29Z" fill="#f7ede0"/><path d="M59 29q22-12 46 0v61q-24-12-46 0V29Z" fill="#e0e5cf"/><path d="M59 29v61M23 42h23m-23 11h23m-23 11h15m36-21 5 5 10-11"/><circle cx="87" cy="85" r="23" fill="#fffaf2"/><path d="M87 72v14l10 6M87 66v3m16 16h3M68 85h3"/></>}
    {kind === "party" && <><path d="m23 34 29-7 7 28c2 15-24 21-29 6l-7-27Z" fill="#e5c8bd"/><path d="m65 27 29 7-7 27c-5 15-31 9-29-6l7-28Z" fill="#dce3cd"/><path d="m37 73 5 20m-16 4 29-7m18-17-5 20m-13-3 29 7M28 47l27-7m7 0 28 7M59 10v10m-14-5 5 7m23-7-5 7"/><path d="m98 14 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" fill="#b9977d"/><path d="m17 9 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#b9977d"/></>}
  </g>;
}

export function CmIcon({ kind }: { kind: "host" | "plan" | "party" }) {
  return <svg viewBox="0 0 120 120" className="cm-icon" fill="none" aria-hidden="true"><CmArtwork kind={kind} /></svg>;
}

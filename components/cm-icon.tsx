export function CmIcon({ kind }: { kind: "host" | "plan" | "party" }) {
  return <svg viewBox="0 0 80 80" className="cm-icon" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="40" cy="40" r="38" fill="#faf7f0" stroke="none" />
    {kind === "host" && <><rect x="27" y="15" width="20" height="33" rx="10" fill="#eadbd0"/><path d="M21 35v4a16 16 0 0 0 32 0V35M37 55v11M27 66h20M32 25h10m-10 7h10"/><path d="M60 21v11m-6-6h12"/></>}
    {kind === "plan" && <><rect x="20" y="18" width="36" height="46" rx="5" fill="#e6e9d8"/><path d="M28 14v9m20-9v9M20 31h36M28 41l4 4 8-8m-12 16h13"/><circle cx="57" cy="52" r="13" fill="#faf7f0"/><path d="M57 44v9l6 4"/></>}
    {kind === "party" && <><path d="m18 64 10-34 25 25-35 9Z" fill="#eedad3"/><path d="m26 43 12 12m-17-1 7 7M45 23l9-9m-18 8 1-10m16 28 13-1M53 30l8-6M19 24l-5-6"/><path d="M46 9c11-4 5 13 16 10M27 11c-5 6 7 9 3 15"/><circle cx="64" cy="52" r="3" fill="currentColor" stroke="none"/></>}
  </svg>;
}

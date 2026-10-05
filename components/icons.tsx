export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Motif({ kind, className = "" }: { kind: "rings" | "spark" | "glass"; className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {kind === "rings" ? <g stroke="currentColor" strokeWidth="2"><ellipse cx="38" cy="54" rx="23" ry="27" transform="rotate(-24 38 54)"/><ellipse cx="62" cy="54" rx="23" ry="27" transform="rotate(24 62 54)"/><path d="m32 24 6-12 9 5-2 12m9-1 2-11 10-4 5 12"/></g> : kind === "spark" ? <g stroke="currentColor" strokeWidth="2"><path d="M50 8c0 31-11 42-42 42 31 0 42 11 42 42 0-31 11-42 42-42-31 0-42-11-42-42Z"/><path d="m77 13 5 5m0-5-5 5M17 80l5 5m0-5-5 5"/></g> : <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="m22 15 27 7-9 28c-3 10-21 5-19-5l1-30ZM30 55l-6 25m-10-3 21 6m22-59 25-9 1 29c1 11-17 17-21 7l-5-27ZM73 57l8 24m-11 4 22-7M23 37l20 5m20 0 20-7"/><path d="m42 8 8 7m3-12 2 10m8-9-3 11"/></g>}
  </svg>;
}

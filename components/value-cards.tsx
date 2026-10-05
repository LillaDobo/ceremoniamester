function Doodle({ kind }: { kind: string }) {
  return <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "empathy" ? <><path d="M27 60 15 50 7 63l14 12 21 8h22l17-11 12-17-11-9-16 17-24 4-10-7Z"/><path d="m21 74 7-11m38 0 7 4 8-5"/><path d="M50 49 34 35c-16-16 8-32 16-16 8-16 32 0 16 16L50 49Z" fill="#d9bcb0"/><path d="m8 63 8 5m70-17 4 4"/></> : kind === "easy" ? <><path d="M36 86c-8-7-10-14-10-28V42c0-7 9-7 9 0v12-37c0-8 10-8 10 0v32-39c0-8 10-8 10 0v42-26c0-8 10-8 10 0v31l8-13c4-7 13-2 10 5L72 77c-4 8-10 12-21 12H36Z"/><path d="m35 60 8-5 11 9m-17 2c15-4 19 7 14 14M70 10l4 4m6 2 5 1M17 19l5 5"/><path d="M42 75c0-6 14-6 14 0" stroke="#bf907e" strokeWidth="3"/></> : <><path d="M24 19h45v63H24zM30 13h33v13H30zM33 40h26M33 50h21M33 60h15"/><path d="m65 53 7-9 10 8-7 9-21 19-8 3 3-8 16-22Z" fill="#dccab2"/><path d="m65 53 10 8M46 83l8-3"/></>}
  </svg>;
}
export function ValueCards() {
  return <div className="value-cards"><div className="value-card"><Doodle kind="empathy" /><span>Empatikus</span><small>Rátok figyelek.</small></div><div className="value-card"><Doodle kind="easy" /><span>Laza</span><small>Semmi kötelező feszengés.</small></div><div className="value-card value-card-draft"><Doodle kind="draft" /><span>Harmadik jelző</span><small>Még nem végleges.</small></div></div>;
}

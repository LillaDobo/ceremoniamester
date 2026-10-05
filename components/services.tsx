import { services } from "@/lib/site";

function ServiceIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="32" cy="32" r="29" fill="#f8f4ed" stroke="none" />
    {kind === "plan" && <><path d="M18 14h24v37H18z" fill="#e2d3bf"/><path d="M14 20h5m-5 8h5m-5 8h5m-5 8h5M25 24h10m-10 7h7m-7 7h6"/><path d="m35 41 13-19 5 4-13 19-7 3 2-7Z" fill="#f8f4ed"/><path d="m35 41 5 4m5-18 5 4"/></>}
    {kind === "place" && <><path d="M13 52V27a19 19 0 0 1 38 0v25M20 52V28a12 12 0 0 1 24 0v24M8 52h48"/><path d="M16 23c-9-2-10-9-5-11 6-1 8 4 5 11Zm3-6c-2-8 4-12 7-8 3 4-1 9-7 8Zm31 10c8-4 9-10 4-12-5-1-8 5-4 12Z" fill="#d7c1a3"/><path d="M16 30 8 25m8 15-9-2m43-5 6-4m-6 13 6-2"/></>}
    {kind === "day" && <><circle cx="31" cy="33" r="19" fill="#e2d3bf"/><path d="M31 19v15l9 6M25 10h12M31 10v4m16 3 4 4"/><path d="M17 33h3m22 0h3M31 47v3"/><path d="m46 45 5 5 8-10" strokeWidth="2.4"/></>}
    {kind === "team" && <><path d="M9 15h31v23H23l-9 7v-7H9z" fill="#e2d3bf"/><path d="M30 42h10l10 8v-8h6V25H45"/><circle cx="18" cy="26" r="1.5" fill="currentColor" stroke="none"/><circle cx="25" cy="26" r="1.5" fill="currentColor" stroke="none"/><circle cx="32" cy="26" r="1.5" fill="currentColor" stroke="none"/><path d="M39 33h11"/></>}
    {kind === "party" && <><path d="m11 53 10-33 23 22-33 11Z" fill="#e2d3bf"/><ellipse cx="32" cy="31" rx="6" ry="16" transform="rotate(-46 32 31)" fill="#f8f4ed"/><path d="m17 36 10 11m17-26 7-7m-14 3 1-9m9 26 10-1m-9 15 4 6M15 16l-4-5"/><path d="M46 8c9-2 3 10 11 8M27 7c-4 4 5 7 2 11"/><circle cx="52" cy="25" r="2" fill="#d7c1a3" stroke="none"/></>}
    {kind === "ceremony" && <><ellipse cx="25" cy="36" rx="13" ry="16" transform="rotate(-22 25 36)" fill="#e2d3bf"/><ellipse cx="40" cy="36" rx="13" ry="16" transform="rotate(22 40 36)"/><path d="m22 21 1-8 7-2 4 7-5 5-7-2Zm11-5 7-6 7 4-1 8-7 1-6-7Z" fill="#f8f4ed"/><path d="m26 9-1-4m23 5 4-3M9 27l-5-2"/></>}
  </svg>;
}

export function Services() {
  // Independent columns prevent an opened card stretching its neighbour.
  return <div className="service-mosaic">{[services.slice(0, 3), services.slice(3)].map((column, columnIndex) => <div className={`service-column service-column-${columnIndex + 1}`} key={columnIndex}>{column.map((service, index) => <details key={service.title} className={`service-tile service-tile-${columnIndex * 3 + index + 1}`}><summary><span className="service-topline">{service.optional && <span className="optional-label">Opcionális</span>}<span className="service-icon"><ServiceIcon kind={service.icon} /></span></span><span className="service-bottomline"><span className="service-title">{service.title}</span><span className="service-plus" aria-hidden="true">+</span></span></summary><div className="service-content"><h3>{service.subtitle}</h3><p>{service.text}</p></div></details>)}</div>)}</div>;
}

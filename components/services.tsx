import { services } from "@/lib/site";

function ServiceIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "plan" && <><path d="M12 9h24v32H12zM18 9V6h12v3M18 18h12M18 25h12M18 32h7"/><path d="m30 33 3 3 7-8"/></>}
    {kind === "place" && <><path d="M8 41V21a16 16 0 0 1 32 0v20M15 41V22a9 9 0 0 1 18 0v19M4 41h40"/><path d="m8 27-5-6m5 12-4-1m36-5 5-6m-5 12 4-1"/></>}
    {kind === "day" && <><circle cx="24" cy="24" r="17"/><path d="M24 12v13l9 5M24 7V4M7 24H4m37 0h3M24 41v3"/></>}
    {kind === "team" && <><path d="M6 8h25v19H17l-7 6v-6H6zM22 31h9l7 6v-6h4V17h-6"/><path d="M12 15h13M12 21h9"/></>}
    {kind === "party" && <><path d="m9 40 8-25 15 17-23 8ZM17 15l15 17M21 9l2-5m6 9 5-6m-1 16 10-2M14 25l9 10"/><circle cx="36" cy="13" r="2"/><path d="m39 34 2 3M10 12l-3-2"/></>}
    {kind === "ceremony" && <><ellipse cx="18" cy="27" rx="11" ry="13" transform="rotate(-20 18 27)"/><ellipse cx="31" cy="27" rx="11" ry="13" transform="rotate(20 31 27)"/><path d="m16 14 2-7 6 2-1 7m6 0 1-7 5-2 3 7"/></>}
  </svg>;
}

export function Services() {
  // Independent columns prevent an opened card stretching its neighbour.
  return <div className="service-mosaic">{[services.slice(0, 3), services.slice(3)].map((column, columnIndex) => <div className={`service-column service-column-${columnIndex + 1}`} key={columnIndex}>{column.map((service, index) => <details key={service.title} className={`service-tile service-tile-${columnIndex * 3 + index + 1}`}><summary><span className="service-topline"><span className="service-number">0{columnIndex * 3 + index + 1}</span>{service.optional && <span className="optional-label">Opcionális</span>}<span className="service-icon"><ServiceIcon kind={service.icon} /></span></span><span className="service-bottomline"><span className="service-title">{service.title}</span><span className="service-plus" aria-hidden="true">+</span></span></summary><div className="service-content"><h3>{service.subtitle}</h3><p>{service.text}</p></div></details>)}</div>)}</div>;
}

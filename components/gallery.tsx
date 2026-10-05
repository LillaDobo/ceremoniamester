"use client";

import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "@/lib/site";
import { PhotoContent } from "./photo";
import { Arrow } from "./icons";

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const jquery = useRef<JQueryStatic | null>(null);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    let mounted = true;
    const element = track.current;
    // jQuery needs a browser document: load after hydration, never during export.
    import("jquery").then(module => { if (mounted) jquery.current = module.default; }).catch(() => { /* Native scrolling remains available. */ });
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener("change", update);
    return () => { mounted = false; query.removeEventListener("change", update); if (element) jquery.current?.(element).stop(true); };
  }, []);

  function syncPosition() {
    const element = track.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    const items = Array.from(element.children) as HTMLElement[];
    const firstOffset = items[0]?.offsetLeft || 0;
    const nearest = items.reduce((best, item, i) => Math.abs(Math.min(item.offsetLeft - firstOffset, max) - element.scrollLeft) < Math.abs(Math.min(items[best].offsetLeft - firstOffset, max) - element.scrollLeft) ? i : best, 0);
    setActive(nearest);
  }

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    const items = Array.from(element.children) as HTMLElement[];
    const firstOffset = items[0]?.offsetLeft || 0;
    const step = items[1].offsetLeft - firstOffset;
    let target = Math.round(element.scrollLeft / step) * step + direction * step;
    if (direction === 1 && element.scrollLeft >= max - 4) target = 0;
    else if (direction === -1 && element.scrollLeft <= 4) target = max;
    target = Math.min(max, Math.max(0, target));
    if (!jquery.current) { element.scrollTo({ left: target, behavior: reducedMotion ? "instant" : "smooth" }); return; }
    // jQuery animates only the scroll container, never React-owned children.
    element.style.scrollSnapType = "none";
    jquery.current(element).stop(true).animate({ scrollLeft: target }, reducedMotion ? 0 : 380, () => { element.style.scrollSnapType = ""; syncPosition(); });
  }

  return <div className="gallery">
    <div className="gallery-track" ref={track} onScroll={syncPosition} onPointerDown={() => { if (track.current) { jquery.current?.(track.current).stop(true); track.current.style.scrollSnapType = ""; } }} role="region" aria-roledescription="képgaléria" aria-label="Esküvői képek" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      {galleryPhotos.map((photo, i) => <figure className="gallery-slide" key={photo.id}><div className="gallery-photo"><PhotoContent photo={photo} index={i + 2} /></div><figcaption><span>{photo.caption}</span><small>{String(i + 1).padStart(2, "0")}</small></figcaption></figure>)}
    </div>
    <div className="gallery-controls"><p>Húzzátok oldalra, vagy lapozzatok.</p><span className="gallery-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span><button type="button" aria-label="Előző kép" onClick={() => move(-1)}><Arrow className="arrow-back" /></button><button type="button" aria-label="Következő kép" onClick={() => move(1)}><Arrow /></button></div>
  </div>;
}

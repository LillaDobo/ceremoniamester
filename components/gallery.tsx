"use client";

import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "@/lib/site";
import { PhotoContent } from "./photo";

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointer: number; x: number; scroll: number } | null>(null);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function syncPosition() {
    const element = track.current;
    if (!element) return;
    const items = Array.from(element.children) as HTMLElement[];
    const max = element.scrollWidth - element.clientWidth;
    const first = items[0]?.offsetLeft || 0;
    const nearest = items.reduce((best, item, index) => Math.abs(Math.min(item.offsetLeft - first, max) - element.scrollLeft) < Math.abs(Math.min(items[best].offsetLeft - first, max) - element.scrollLeft) ? index : best, 0);
    setActive(nearest);
  }

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    const items = Array.from(element.children) as HTMLElement[];
    const step = items[1].offsetLeft - items[0].offsetLeft;
    const max = element.scrollWidth - element.clientWidth;
    let target = Math.round(element.scrollLeft / step) * step + direction * step;
    if (direction === 1 && element.scrollLeft >= max - 4) target = 0;
    if (direction === -1 && element.scrollLeft <= 4) target = max;
    element.scrollTo({ left: Math.min(max, Math.max(0, target)), behavior: reducedMotion ? "instant" : "smooth" });
  }

  function finishDrag() {
    const element = track.current;
    const current = drag.current;
    if (!element || !current) return;
    drag.current = null;
    if (element.hasPointerCapture(current.pointer)) element.releasePointerCapture(current.pointer);
    element.style.scrollSnapType = "";
    setDragging(false);
    syncPosition();
  }

  return <div className="gallery">
    <div className={`gallery-track drag-gallery${dragging ? " is-dragging" : ""}`} ref={track} onScroll={syncPosition}
      onDragStart={event => event.preventDefault()}
      onPointerDown={event => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        const element = event.currentTarget;
        drag.current = { pointer: event.pointerId, x: event.clientX, scroll: element.scrollLeft };
        element.style.scrollSnapType = "none";
        element.setPointerCapture(event.pointerId);
        setDragging(true);
        event.preventDefault();
      }}
      onPointerMove={event => {
        if (!drag.current || drag.current.pointer !== event.pointerId) return;
        event.currentTarget.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
      }}
      onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
      role="region" aria-roledescription="képgaléria" aria-label="Esküvői képek; egérrel húzható, nyílbillentyűkkel lapozható" tabIndex={0}
      onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      {galleryPhotos.map((photo, index) => <figure className="gallery-slide" key={photo.id}><div className="gallery-photo"><PhotoContent photo={photo} index={index + 2} /></div><figcaption><span>{photo.caption}</span><small>{String(index + 1).padStart(2, "0")}</small></figcaption></figure>)}
    </div>
    <div className="gallery-controls"><p>Húzzátok oldalra a képeket.</p><span className="gallery-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span></div>
  </div>;
}

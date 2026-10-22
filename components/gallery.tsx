"use client";

import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "@/lib/site";
import { PhotoContent } from "./photo";

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointer: number; x: number; scroll: number } | null>(null);
  const pan = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [opened, setOpened] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (opened === null) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, [opened]);

  function openPhoto(index: number) {
    if (suppressClick.current) return;
    setZoom(1); setOpened(index);
  }

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
    setDragging(false); syncPosition();
  }

  return <div className="gallery">
    <div className={`gallery-track drag-gallery${dragging ? " is-dragging" : ""}`} ref={track} onScroll={syncPosition}
      onDragStart={event => event.preventDefault()}
      onPointerDown={event => {
        suppressClick.current = false;
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        drag.current = { pointer: event.pointerId, x: event.clientX, scroll: event.currentTarget.scrollLeft };
      }}
      onPointerMove={event => {
        const current = drag.current;
        if (!current || current.pointer !== event.pointerId) return;
        if (Math.abs(event.clientX - current.x) > 6) {
          suppressClick.current = true;
          event.currentTarget.style.scrollSnapType = "none";
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }
        if (suppressClick.current) event.currentTarget.scrollLeft = current.scroll - (event.clientX - current.x);
      }}
      onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
      role="region" aria-roledescription="képgaléria" aria-label="Esküvői képek; húzható, nyílbillentyűkkel lapozható, kattintással nagyítható" tabIndex={0}
      onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      {galleryPhotos.map((photo, index) => <figure className="gallery-slide" key={photo.id}><button type="button" className="gallery-photo gallery-open" aria-label={`${photo.alt} – megnyitás nagyban`} onClick={event => { if (event.detail === 0) suppressClick.current = false; openPhoto(index); }}><PhotoContent photo={photo} index={index + 2} /></button></figure>)}
    </div>
    <div className="gallery-controls"><span className="gallery-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span></div>
    {opened !== null && <dialog ref={dialog} className="gallery-lightbox" aria-label="Nagyítható esküvői kép" onCancel={() => setOpened(null)} onClick={event => { if (event.target === event.currentTarget) setOpened(null); }}>
      <div className="lightbox-toolbar"><div role="group" aria-label="Kép nagyítása"><button type="button" aria-label="Kicsinyítés" disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value - .5))}>−</button><button type="button" aria-label="Eredeti nézet" onClick={() => { setZoom(1); viewport.current?.scrollTo(0, 0); }}>{Math.round(zoom * 100)}%</button><button type="button" aria-label="Nagyítás" disabled={zoom >= 3} onClick={() => setZoom(value => Math.min(3, value + .5))}>+</button></div><button type="button" autoFocus aria-label="Kép bezárása" onClick={() => setOpened(null)}>×</button></div>
      <div ref={viewport} className={`lightbox-viewport${zoom > 1 ? " is-zoomed" : ""}`} onDoubleClick={() => setZoom(value => value === 1 ? 2 : 1)}
        onPointerDown={event => { if (zoom <= 1 || event.pointerType !== "mouse" || event.button !== 0) return; pan.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop }; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerMove={event => { if (!pan.current) return; event.currentTarget.scrollLeft = pan.current.left - event.clientX + pan.current.x; event.currentTarget.scrollTop = pan.current.top - event.clientY + pan.current.y; }}
        onPointerUp={event => { pan.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }} onPointerCancel={() => { pan.current = null; }} onLostPointerCapture={() => { pan.current = null; }}>
        <div className="lightbox-image-canvas" style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}>
          {/* Native img keeps the full-resolution photograph available at every zoom level. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={galleryPhotos[opened].src.startsWith("/") ? `${basePath}${galleryPhotos[opened].src}` : galleryPhotos[opened].src} alt={galleryPhotos[opened].alt} draggable={false} />
        </div>
      </div>
    </dialog>}
  </div>;
}

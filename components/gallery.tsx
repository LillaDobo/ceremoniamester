"use client";

import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "@/lib/site";
import { PhotoContent } from "./photo";

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const drag = useRef<{ pointer: number; x: number; scroll: number } | null>(null);
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [opened, setOpened] = useState<number | null>(null);
  const [photoRatio, setPhotoRatio] = useState(1.5);
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
    setOpened(index);
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
      role="region" aria-roledescription="képgaléria" aria-label="Esküvői képek; húzható, nyílbillentyűkkel lapozható, kattintással megnyitható" tabIndex={0}
      onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      {galleryPhotos.map((photo, index) => <figure className="gallery-slide" key={photo.id}><button type="button" className="gallery-photo gallery-open" aria-label={`${photo.alt} – megnyitás nagyban`} onClick={event => { if (event.detail === 0) suppressClick.current = false; openPhoto(index); }}><PhotoContent photo={photo} index={index + 2} /></button></figure>)}
    </div>
    <div className="gallery-controls"><span className="gallery-count" aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span></div>
    {opened !== null && <dialog ref={dialog} className="gallery-lightbox" style={{ width: `min(98vw, ${96 * photoRatio}dvh)`, height: `min(96dvh, ${98 / photoRatio}vw)` }} aria-label="Esküvői kép nagy nézetben" onCancel={() => setOpened(null)} onClick={event => { if (event.target === event.currentTarget) setOpened(null); }}>
      <button type="button" className="lightbox-close" autoFocus aria-label="Kép bezárása" onClick={() => setOpened(null)}>×</button>
      <div className="lightbox-viewport">
        <div className="lightbox-image-canvas">
          {/* Show the full photograph fitted to the available viewport. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={galleryPhotos[opened].src.startsWith("/") ? `${basePath}${galleryPhotos[opened].src}` : galleryPhotos[opened].src} alt={galleryPhotos[opened].alt} draggable={false} onLoad={event => { const image = event.currentTarget; if (image.naturalWidth && image.naturalHeight) setPhotoRatio(image.naturalWidth / image.naturalHeight); }} />
        </div>
      </div>
    </dialog>}
  </div>;
}

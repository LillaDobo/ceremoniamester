"use client";

import { useEffect, useRef } from "react";
import type { Photo } from "@/lib/site";
import { PhotoContent } from "./photo";

export function QuoteBackdrop({ photo }: { photo: Photo }) {
  const backdrop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = backdrop.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    function update() {
      frame = 0;
      if (!element || !section) return;
      const rect = section.getBoundingClientRect();
      const offset = preference.matches ? 0 : Math.max(-70, Math.min(70, (window.innerHeight / 2 - rect.top - rect.height / 2) * .16));
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); preference.removeEventListener("change", schedule); };
  }, []);
  return <div ref={backdrop} className="quote-placeholder-photo parallax-backdrop" aria-hidden="true"><PhotoContent photo={photo} /></div>;
}

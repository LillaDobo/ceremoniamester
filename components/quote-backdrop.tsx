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
    let current = 0;
    let target = 0;
    let lastTime = 0;
    const paint = () => { element.style.transform = `translate3d(0, ${current.toFixed(3)}px, 0)`; };
    function animate(time = performance.now()) {
      frame = 0;
      const elapsed = lastTime ? Math.min(64, Math.max(1, time - lastTime)) : 16.67;
      lastTime = time;
      current += (target - current) * (1 - Math.exp(-elapsed / 110));
      if (Math.abs(target - current) < .05) current = target;
      paint();
      if (current !== target) frame = requestAnimationFrame(animate);
      else lastTime = 0;
    }
    function measure() {
      const rect = section!.getBoundingClientRect();
      target = preference.matches ? 0 : 300 * Math.tanh((window.innerHeight / 2 - rect.top - rect.height / 2) * .8 / 300);
    }
    function schedule() {
      measure();
      if (preference.matches) { cancelAnimationFrame(frame); frame = 0; current = 0; lastTime = 0; paint(); }
      else if (!frame) frame = requestAnimationFrame(animate);
    }
    measure(); current = target; paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); preference.removeEventListener("change", schedule); };
  }, []);
  return <div ref={backdrop} className="quote-placeholder-photo parallax-backdrop" aria-hidden="true"><PhotoContent photo={photo} /></div>;
}

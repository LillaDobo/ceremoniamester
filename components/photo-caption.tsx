"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function PhotoCaption({ children, className = "photo-fade caption-reveal" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); } }, { threshold: .2 });
    setReady(true); observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${className}${ready ? " is-ready" : ""}${visible ? " is-visible" : ""}`}>{children}</div>;
}

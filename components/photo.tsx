import Image from "next/image";
import type { Photo } from "@/lib/site";

export function PhotoContent({ photo, index = 1, priority = false }: { photo: Photo; index?: number; priority?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (photo.src) return <Image src={photo.src.startsWith("/") ? `${basePath}${photo.src}` : photo.src} alt={photo.alt} fill sizes={priority ? "100vw" : "(max-width: 768px) 85vw, 42vw"} priority={priority} className="photo-image" style={{ objectPosition: photo.position || "50% 50%" }} />;
  return <div className={`photo-placeholder photo-tone-${index % 3}`} role="img" aria-label={`${photo.alt} – a saját fotó még nincs feltöltve`}>
    <svg viewBox="0 0 64 64" width="52" height="52" fill="none" aria-hidden="true"><path d="M9 19h12l5-7h12l5 7h12v34H9V19Z" stroke="currentColor" strokeWidth="1.4"/><circle cx="32" cy="35" r="11" stroke="currentColor" strokeWidth="1.4"/><path d="M45 25h5" stroke="currentColor" strokeWidth="1.4"/></svg>
    <span>Saját fotó helye</span><small>{String(index).padStart(2, "0")} / 10</small>
  </div>;
}

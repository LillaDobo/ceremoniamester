import Image from "next/image";
import type { Photo } from "@/lib/site";

export function Polaroid({ photo, className = "" }: { photo: Photo; className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <span className={`title-polaroid ${className}`} aria-hidden="true"><span className="title-polaroid-image"><Image src={`${basePath}${photo.src}`} alt="" fill sizes="(max-width: 767px) 64px, 130px" className="photo-image" style={{ objectPosition: photo.position }} priority /></span></span>;
}

import { reviews } from "@/lib/site";

export function Reviews() {
  if (!reviews.length) return <div className="review-preview"><p className="review-pending">A párok visszajelzései hamarosan felkerülnek.</p><div className="review-grid" aria-label="Előkészített helyek a valódi véleményeknek">{[1, 2, 3].map(i => <article className="review-card review-placeholder" key={i}><span className="review-mark" aria-hidden="true">“</span><p>Vélemény helye</p><small>A pár neve és saját szavai</small></article>)}</div></div>;
  return <div className="review-grid">{reviews.map(review => <figure key={review.id} className="review-card"><span className="review-mark" aria-hidden="true">“</span><blockquote><p>{review.text}</p></blockquote><figcaption><strong>{review.names}</strong>{review.detail && <small>{review.detail}</small>}</figcaption></figure>)}</div>;
}

import { homeGallery } from '../../data/gallery'
import './Gallery.css'

export default function Gallery() {
  return (
    <section className="gallery-section" aria-label="Fotogalerie">
      <div className="gallery-grid">
        {homeGallery.map(({ src, alt, label }) => (
          <div key={src} className="gallery-item">
            <img src={src} alt={alt} loading="lazy" />
            <span className="gallery-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

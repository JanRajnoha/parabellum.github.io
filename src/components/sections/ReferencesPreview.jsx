import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { references } from '../../data/references'
import './ReferencesPreview.css'

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star star-filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function ReferencesPreview() {
  const preview = references.slice(0, 3)

  return (
    <section className="section references-preview">
      <div className="container">
        <SectionTitle label="Co říkají hosté" title="Reference" center />
        <div className="ref-preview-grid">
          {preview.map(({ id, name, text, rating }) => (
            <div key={id} className="ref-card">
              <Stars count={rating} />
              <p className="ref-text">„{text}"</p>
              <span className="ref-name">— {name}</span>
            </div>
          ))}
        </div>
        <div className="ref-preview-cta">
          <Link to="/references" className="ref-more-link">
            Zobrazit všechny reference →
          </Link>
        </div>
      </div>
    </section>
  )
}

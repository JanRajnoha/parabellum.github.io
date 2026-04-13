import { Helmet } from 'react-helmet-async'
import { references } from '../data/references'
import './References.css'

function Stars({ count }) {
  return (
    <div className="ref-stars" aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'ref-star ref-star-filled' : 'ref-star'}>★</span>
      ))}
    </div>
  )
}

export default function References() {
  return (
    <main className="references-page">
      <Helmet>
        <title>Reference — Para Bellum Lounge Brno</title>
        <meta name="description" content="Přečtěte si, co říkají hosté Para Bellum Lounge. Hodnocení a reference zákazníků hookah baru v centru Brna." />
        <meta property="og:title" content="Reference — Para Bellum Lounge Brno" />
        <meta property="og:description" content="Co říkají hosté Para Bellum Lounge — prémiového hookah baru v centru Brna." />
        <meta property="og:url" content="https://parabellumlounge.cz/references" />
        <link rel="canonical" href="https://parabellumlounge.cz/references" />
      </Helmet>
      <div className="ref-page-hero">
        <div className="ref-page-hero-overlay" />
        <div className="ref-page-hero-content">
          <span className="label-accent">Hosté o nás</span>
          <h1>Reference</h1>
          <p>Co říkají ti, kdo u nás byli</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="ref-page-grid">
            {references.map(({ id, name, text, rating }) => (
              <div key={id} className="ref-page-card">
                <Stars count={rating} />
                <blockquote className="ref-page-quote">„{text}"</blockquote>
                <footer className="ref-page-author">— {name}</footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

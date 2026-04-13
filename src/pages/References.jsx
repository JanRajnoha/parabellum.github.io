import { Helmet } from 'react-helmet-async'
import SectionTitle from '../components/ui/SectionTitle'
import { references } from '../data/references'
import './References.css'

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: references.map((ref, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Review',
      author: { '@type': 'Organization', name: ref.name },
      reviewBody: ref.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: ref.rating,
        bestRating: 5,
        worstRating: 1,
      },
      itemReviewed: {
        '@type': 'BarOrPub',
        name: 'Para Bellum Lounge',
        url: 'https://parabellumlounge.cz/',
      },
    },
  })),
}

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
        <meta name="description" content="Přečtěte si, co říkají naši klienti Para Bellum Lounge. Hodnocení a reference zákazníků shisha baru v centru Brna." />
        <meta property="og:title" content="Reference — Para Bellum Lounge Brno" />
        <meta property="og:description" content="Co říkají naši klienti Para Bellum Lounge — prémiového shisha baru v centru Brna." />
        <meta property="og:url" content="https://parabellumlounge.cz/references" />
        <link rel="canonical" href="https://parabellumlounge.cz/references" />
        <script type="application/ld+json">{JSON.stringify(reviewsSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="ref-hero">
        <div className="ref-hero-overlay" />
        <div className="ref-hero-content container">
          <h1>Reference</h1>
          <p>Co říkají naši klienti</p>
        </div>
      </div>

      {/* Reviews */}
      <section className="ref-section section">
        <div className="container">
          <SectionTitle label="Hodnocení" title="Co říkají klienti" center />
          <div className="ref-grid">
            {references.map(({ id, name, year, text, rating }) => (
              <div key={id} className="ref-card">
                <span className="ref-quote-mark">"</span>
                <Stars count={rating} />
                <blockquote className="ref-quote">{text}</blockquote>
                <footer className="ref-author">
                  <span className="ref-name">— {name}</span>
                  {year && <span className="ref-year">{year}</span>}
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

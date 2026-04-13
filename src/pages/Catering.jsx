import { Helmet } from 'react-helmet-async'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import { contact } from '../data/contact'
import { references } from '../data/references'
import { cateringGallery } from '../data/gallery'
import { cateringServices } from '../data/services'
import './Catering.css'

export default function Catering() {
  return (
    <main className="catering-page">
      <Helmet>
        <title>Catering & Akce — Para Bellum Lounge Brno</title>
        <meta name="description" content="Vodní dýmky, obsluha a atmosféra Para Bellum přímo na vaši akci. Soukromé oslavy, firemní večírky, festivaly. Catering po celé ČR." />
        <meta property="og:title" content="Catering & Akce — Para Bellum Lounge Brno" />
        <meta property="og:description" content="Vodní dýmky, obsluha a atmosféra Para Bellum přímo na vaši akci. Soukromé oslavy, firemní večírky, festivaly po celé ČR." />
        <meta property="og:url" content="https://parabellumlounge.cz/catering" />
        <link rel="canonical" href="https://parabellumlounge.cz/catering" />
      </Helmet>

      {/* Hero */}
      <div className="cat-hero">
        <div className="cat-hero-overlay" />
        <div className="cat-hero-content container">
          <span className="label-accent">Para Bellum</span>
          <h1>Catering & Akce</h1>
          <p>Prémiový zážitek s vodními dýmkami — kdekoli.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section cat-intro">
        <div className="container cat-intro-inner">
          <div>
            <SectionTitle label="Co nabízíme" title="Zážitek Para Bellum u vás" />
            <p className="cat-intro-text">
              Neumíme být na každém místě najednou — ale dokážeme přinést Para Bellum k vám.
              Profesionální obsluha, prémiové dýmky a atmosféra, na kterou vaši hosté nezapomenou.
              Celorepublikové působení, individuální přístup.
            </p>
          </div>
          <div className="cat-intro-numbers">
            <div className="cat-stat">
              <span className="cat-stat-num">50+</span>
              <span className="cat-stat-label">Akcí ročně</span>
            </div>
            <div className="cat-stat">
              <span className="cat-stat-num">CZ</span>
              <span className="cat-stat-label">Celá republika</span>
            </div>
            <div className="cat-stat">
              <span className="cat-stat-num">∞</span>
              <span className="cat-stat-label">Na míru</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="cat-services-section section">
        <div className="container">
          <SectionTitle label="Služby" title="Co pro vás zajistíme" center />
          <div className="cat-services-grid">
            {cateringServices.map(({ title, desc }) => (
              <div key={title} className="cat-service-card">
                <div className="cat-service-accent" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery grid */}
      <section className="cat-gallery-section section" aria-label="Fotogalerie">
        <div className="container">
          <div className="cat-gallery-grid">
            {cateringGallery.map(({ src, alt, width, height, className }) => (
              <div key={src} className="cat-gallery-item">
                <img src={src} alt={alt} loading="lazy" width={width} height={height} className={className} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="cat-testimonials section">
        <div className="container">
          <SectionTitle label="Reference" title="Co říkají hosté" center />
          <div className="cat-testimonials-grid">
            {references.map(({ id, name, text }) => (
              <div key={id} className="cat-testimonial-card">
                <span className="cat-testimonial-quote-mark">"</span>
                <blockquote className="cat-testimonial-text">{text}</blockquote>
                <footer className="cat-testimonial-author">— {name}</footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cat-cta-section">
        <div className="container cat-cta-inner">
          <div>
            <h2>Máte zájem o catering?</h2>
            <p>Napište nám — rádi připravíme nezávaznou nabídku na míru vaší akci.</p>
          </div>
          <Button href={`mailto:${contact.email}`} variant="primary">
            Nezávazná poptávka
          </Button>
        </div>
      </section>

    </main>
  )
}

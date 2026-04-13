import Button from '../ui/Button'
import { contact } from '../../data/contact'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-logo-wrap">
          <img
            src="/img/Web/logo-big-compressed.png"
            alt="Para Bellum Lounge — shisha bar Brno"
            className="hero-logo"
            width="640"
            height="200"
            fetchpriority="high"
          />
          <span className="visually-hidden">Para Bellum Lounge — shisha bar Brno</span>
        </h1>
        <Button href={contact.reservationUrl} variant="primary" className="hero-cta">
          Rezervovat místo
        </Button>
      </div>
      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  )
}

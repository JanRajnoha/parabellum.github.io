import { Link } from 'react-router-dom'
import { contact } from '../../data/contact'
import './Footer.css'

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* single container — no padding conflicts */}
      <div className="ft-wrap">

        <div className="ft-main">
          <div className="ft-info">
            <p className="ft-copy">
              © {year} Para Bellum Lounge.{' '}
              <span className="ft-copy-tagline">Crafted for the discerning.</span>
            </p>
            <p className="ft-legal">
              Sukova 49/4, Brno 602 00
              <span className="ft-legal-sep" />
              <a href={`mailto:${contact.email}`} className="ft-legal-email">{contact.email}</a>
            </p>
          </div>

          <div className="ft-icons">
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="ft-icon-btn" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="ft-icon-btn" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href={`mailto:${contact.email}`} className="ft-icon-btn" aria-label="E-mail">
              <IconMail />
            </a>
          </div>
        </div>

        <div className="ft-divider" />

        <nav className="ft-bottom">
          <Link to="/" className="ft-bottom-link">Domů</Link>
          <Link to="/catering" className="ft-bottom-link">Catering</Link>
          <Link to={{ pathname: '/', hash: '#contact' }} className="ft-bottom-link">Kontakt</Link>
          <a href={contact.reservationUrl} target="_blank" rel="noopener noreferrer" className="ft-bottom-link">
            Rezervace
          </a>
        </nav>

      </div>
    </footer>
  )
}

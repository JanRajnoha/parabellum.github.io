import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contact } from '../../data/contact'
import './Navbar.css'

const links = [
  { label: 'Domů',      to: '/',          hash: '' },
  { label: 'Catering',  to: '/catering',  hash: '' },
  { label: 'Kontakt',   to: '/',          hash: '#contact' },
]

function getIsOpen() {
  const now = new Date()
  const day = now.getDay()
  const t = now.getHours() + now.getMinutes() / 60
  const sched = { 0: [13,22], 1: [10,24], 2: [10,24], 3: [10,24], 4: [10,24], 5: [10,25], 6: [13,25] }
  const [o, c] = sched[day]
  if (t >= o && t < c) return true
  // still within previous day's over-midnight window (e.g. Sat closes at 01:00 Sun)
  const prev = (day + 6) % 7
  const [, prevClose] = sched[prev]
  return prevClose > 24 && t < prevClose - 24
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isOpen = useMemo(() => getIsOpen(), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleNavClick(hash) {
    setOpen(false)
    if (!hash) return
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const statusClass = isOpen ? 'navbar-status-open' : 'navbar-status-closed'

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${open ? 'navbar-menu-open' : ''}`}>
      <div className="container navbar-inner">

        {/* Logo — PB monogram icon */}
        <Link to="/" className="navbar-logo" onClick={() => handleNavClick('')}>
          <img src="/img/icons/fav/favicon-180.png" alt="Para Bellum Lounge" />
        </Link>

        {/* ── Status badge — visible in top bar on MOBILE only ── */}
        <span className={`navbar-status-bar ${statusClass}`} aria-live="polite">
          <span className="navbar-status-dot" />
          <span>{isOpen ? 'Otevřeno' : 'Zavřeno'}</span>
        </span>

        {/* ── Desktop nav / Mobile centered card ── */}
        <nav className={`navbar-links ${open ? 'navbar-links-open' : ''}`} aria-label="Hlavní navigace">

          {/* Decorative icon — mobile pane only, no link */}
          <img
            src="/img/icons/fav/favicon-180.png"
            alt=""
            aria-hidden="true"
            className="navbar-pane-icon"
          />

          {/* Nav links */}
          <div className="navbar-pane-links">
            {links.map(({ label, to, hash }) => (
              <Link
                key={label}
                to={to}
                className="navbar-link"
                onClick={() => handleNavClick(hash)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Status — desktop inline nav only */}
          <span className={`navbar-status navbar-status-desktop ${statusClass}`}>
            <span className="navbar-status-dot" />
            <span>{isOpen ? 'Otevřeno' : 'Zavřeno'}</span>
          </span>

          {/* CTA */}
          <a
            href={contact.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Rezervovat
          </a>
        </nav>

        {/* Burger — z-index keeps it above the pane */}
        <button
          className={`navbar-burger ${open ? 'navbar-burger-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

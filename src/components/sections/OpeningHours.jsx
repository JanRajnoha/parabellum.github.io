import { useMemo } from 'react'
import { hours } from '../../data/hours'
import { contact } from '../../data/contact'
import './OpeningHours.css'

// Map JS day index (0=Sun) to Czech day name in our hours array
const dayIndexToCzech = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota']

// Basic open/closed check based on current time
function getOpenStatus() {
  const now = new Date()
  const day = now.getDay()       // 0 Sun … 6 Sat
  const h = now.getHours()
  const m = now.getMinutes()
  const t = h + m / 60

  // [openH, closeH] — times past midnight use 24+
  const sched = {
    0: [13, 22],   // Sun
    1: [10, 24],   // Mon
    2: [10, 24],   // Tue
    3: [10, 24],   // Wed
    4: [10, 24],   // Thu
    5: [10, 25],   // Fri (01:00 next day)
    6: [13, 25],   // Sat (01:00 next day)
  }

  const [open, close] = sched[day]
  if (t >= open && t < close) return true
  // still within previous day's over-midnight window (e.g. Sat closes at 01:00 Sun)
  const prev = (day + 6) % 7
  const [, prevClose] = sched[prev]
  return prevClose > 24 && t < prevClose - 24
}

export default function OpeningHours() {
  const todayCzech = dayIndexToCzech[new Date().getDay()]
  const isOpen = useMemo(() => getOpenStatus(), [])

  return (
    <section className="oh-section" id="contact">
      <div className="container oh-layout">

        {/* ── Left column ─────────────────────────────── */}
        <div className="oh-left">

          {/* Live status badge */}
          <div className={`oh-live-badge ${isOpen ? 'oh-live-open' : 'oh-live-closed'}`}>
            <span className="oh-live-dot" />
            {isOpen ? 'Právě otevřeno' : 'Nyní zavřeno'}
          </div>

          <h2 className="oh-heading">Otevírací doba</h2>

          <ul className="oh-list">
            {hours.map(({ day, time }) => {
              const isToday = day === todayCzech
              return (
                <li key={day} className={`oh-row ${isToday ? 'oh-today' : ''}`}>
                  <span className="oh-day">{day}</span>
                  <span className="oh-time">{time}</span>
                </li>
              )
            })}
          </ul>

          {/* Location + Direct lines */}
          <div className="oh-meta">
            <div className="oh-meta-col">
              <span className="oh-meta-label">Adresa</span>
              <address className="oh-meta-address">
                Sukova 49/4<br />
                Brno 602 00
              </address>
            </div>
            <div className="oh-meta-col">
              <span className="oh-meta-label">Kontakt</span>
              <div className="oh-direct-lines">
                <div className="oh-direct-row">
                  <span className="oh-direct-name">Rezervace</span>
                  <a href={`tel:${contact.phoneReservations.replace(/\s/g, '')}`} className="oh-direct-phone">
                    {contact.phoneReservations}
                  </a>
                </div>
                <div className="oh-direct-row">
                  <span className="oh-direct-name">E-mail</span>
                  <a href={`mailto:${contact.email}`} className="oh-direct-phone">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right column — map ───────────────────────── */}
        {contact.mapEmbed && (
          <div className="oh-map-col">
            <div className="oh-map-wrap">
              <iframe
                src={contact.mapEmbed}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Para Bellum Lounge mapa"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { contact } from '../../data/contact'
import { eventImages } from '../../data/events'
import './Events.css'

export default function Events() {
  return (
    <section className="section events" id="events">
      <div className="container">
        <div className="events-inner">
          <div className="events-text">
            <SectionTitle label="Soukromé rezervace" title="Celý prostor jen pro vás" />
            <p>
              Plánujete narozeninovou oslavu, firemní akci nebo jen večer s přáteli?
              Para Bellum nabízí pronájem prostoru a catering s vodními dýmkami přímo k vám.
            </p>
            <ul className="events-perks accent-list">
              <li>Pronájem celého prostoru</li>
              <li>Catering s vodními dýmkami</li>
              <li>Individuální přístup a nabídka</li>
              <li>Dostupné i mimo Brno</li>
            </ul>
            <Button href={`mailto:${contact.email}`} variant="secondary">
              Nezávazná poptávka
            </Button>
          </div>

          <div className="events-gallery">
            {eventImages.map(({ src, alt, width, height }) => (
              <div key={src} className="events-gallery-item">
                <img src={src} alt={alt} loading="lazy" width={width} height={height} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

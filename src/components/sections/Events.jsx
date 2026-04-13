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
            <SectionTitle label="Soukromé akce" title="Celý prostor jen pro vás" />
            <p>
              Uvolněná lounge atmosféra je ideální jak pro start párty, tak pro celovečerní akci bez tlačenic a stresu. Zároveň si u nás můžeš pronajmout spodní prostor – ať už na oslavu narozenin, firemní briefing nebo soukromou párty.
            </p>
            <p>
              K dispozici máš televizor, karaoke i kompletní zázemí, takže všechno proběhne přesně podle tvých představ. Prostě místo, kde se potkává dobrá nálada, hudba a lidi, se kterými chceš být.
            </p>
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

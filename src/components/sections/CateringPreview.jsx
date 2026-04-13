import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './CateringPreview.css'

export default function CateringPreview() {
  return (
    <section className="section catering-preview" id="catering">
      <div className="container">
        <div className="cp-inner">
          <div className="cp-image-col">
            <div className="cp-image-main">
              <img src="/img/Events/Catering-1.jpg" alt="Catering Para Bellum Lounge Brno" loading="lazy" width="960" height="1280" />
            </div>
            <div className="cp-image-side">
              <img src="/img/Events/Catering-4.jpg" alt="Catering Para Bellum Lounge na akci" loading="lazy" width="1280" height="960" />
            </div>
          </div>

          <div className="cp-text-col">
            <SectionTitle label="Catering & akce" title="Přineseme zážitek k vám" />
            <p className="cp-lead">
              Vodní dýmky, obsluha a atmosféra Para Bellum — přímo na vaši soukromou akci,
              firemní večírek nebo festival.
            </p>
            <ul className="cp-features accent-list">
              <li>Narozeninové oslavy &amp; soukromé party</li>
              <li>Firemní akce a teambuildingové večery</li>
              <li>Festivaly a venkovní akce</li>
              <li>Dostupné po celé ČR</li>
            </ul>
            <Button href="/catering" variant="secondary" isRouterLink>
              Zjistit více o cateringu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

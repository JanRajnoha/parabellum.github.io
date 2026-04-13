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
              <img src="/img/Events/Catering-4.jpg" alt="Catering Para Bellum Lounge na akci" loading="lazy" width="1200" height="1600" />
            </div>
          </div>

          <div className="cp-text-col">
            <SectionTitle label="Catering & akce" title="Přineseme zážitek k vám" />
            <p className="cp-lead">
              Vodní dýmky, dinky, obsluha a atmosféra Para Bellum — přímo na vaši svatbě, soukromé akci,
              firemním večírku nebo festivalu.
            </p>
            <ul className="cp-features accent-list">
              <li>Svatby</li>
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

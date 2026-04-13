import SectionTitle from '../ui/SectionTitle'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <SectionTitle label="O nás" title="Útočiště klidu uprostřed města" />
          <p>
            Para Bellum je místo, kde se čas zpomalí. Přijďte si vychutnat prémiové vodní dýmky
            v příjemném, útulném prostředí — ať už s přáteli, nebo jen tak pro sebe.
          </p>
          <p className="about-text-2">
            Naším cílem je vytvořit prostor, kde se každý cítí vítaný. Žádný shon, žádný stres —
            jen klid, dobrá atmosféra a kvalitní zážitek.
          </p>
        </div>
        <div className="about-images">
          <div className="about-img-item">
            <img src="/img/Drinks/Coffee.jpg" alt="Vodní dýmka v Para Bellum Lounge Brno" loading="lazy" width="3640" height="2048" />
          </div>
          <div className="about-img-item">
            <img src="/img/Drinks/Drink-1.jpg" alt="Koktejl v hookah baru Para Bellum Lounge Brno" loading="lazy" width="2048" height="1365" />
          </div>
          <div className="about-img-item about-img-wide">
            <img src="/img/Para/Para-1.jpg" alt="Soukromá akce v Para Bellum Lounge Brno" loading="lazy" width="960" height="1280" />
          </div>
        </div>
      </div>
    </section>
  )
}

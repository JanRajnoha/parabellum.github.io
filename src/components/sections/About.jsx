import SectionTitle from '../ui/SectionTitle'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-text">
          <SectionTitle label="O nás" title="Útočiště klidu uprostřed města" />
          <p>
            Hledáš místo, kam můžeš vyrazit s přáteli večer, ale zároveň i přes den v klidu pracovat nebo studovat? Para Bellum Lounge je ideální volba pro obojí.
          </p>
          <p className="about-text-2">
            Přes den u nás najdeš příjemné prostředí pro home office i studium – vysoké stoly vhodné pro práci s notebookem, zásuvky téměř na každém místě a rychlou, stabilní Wi-Fi. To vše v klidné lounge atmosféře, kde si můžeš dát kávu nebo drink a nerušeně se soustředit. Práce i studium tady mají svůj klid a rytmus.
          </p>
          <p className="about-text-2">
            Večer se pak prostor promění v ideální místo na pohodový drink, pivko nebo dýmku s přáteli. Můžeš si u nás posedět, zahrát deskovky, dát si pár drinků na rozjezd před klubem, nebo u nás rovnou zůstat celý večer.
          </p>
        </div>
        <div className="about-images">
          <div className="about-img-item">
            <img src="/img/Drinks/Coffee.jpg" alt="Vodní dýmka v Para Bellum Lounge Brno" loading="lazy" width="1200" height="1800" />
          </div>
          <div className="about-img-item">
            <img src="/img/Drinks/Drink-1.jpg" alt="Koktejl v shisha baru Para Bellum Lounge Brno" loading="lazy" width="1200" height="1800" />
          </div>
          <div className="about-img-item about-img-wide">
            <img src="/img/Para/Para-1.jpg" alt="Soukromá akce v Para Bellum Lounge Brno" loading="lazy" width="1200" height="800" />
          </div>
        </div>
      </div>
    </section>
  )
}

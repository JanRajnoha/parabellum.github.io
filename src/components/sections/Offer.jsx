import SectionTitle from '../ui/SectionTitle'
import { offerItems } from '../../data/offer'
import './Offer.css'

const [shisha, drinks] = offerItems

export default function Offer() {
  return (
    <section className="section offer" id="shisha">
      <div className="container">
        <SectionTitle label="Naše nabídka" title="Vodní dýmky & Drinky" center />

        <div className="offer-shisha">
          <div className="offer-shisha-main">
            <img
              src={shisha.image.src}
              alt={shisha.image.alt}
              loading="lazy"
              width={shisha.image.width}
              height={shisha.image.height}
              className="offer-img-main"
            />
            <div className="offer-shisha-text">
              <span className="offer-category-label">{shisha.category}</span>
              <h3>{shisha.title}</h3>
              <p>{shisha.description}</p>
            </div>
          </div>
        </div>

        <div className="offer-drinks">
          <div className="offer-drinks-label">
            <span className="offer-category-label">{drinks.category}</span>
          </div>
          <div className="offer-drinks-grid">
            <div className="offer-drink-item">
              <img
                src={drinks.image.src}
                alt={drinks.image.alt}
                loading="lazy"
                width={drinks.image.width}
                height={drinks.image.height}
                className="offer-img-drink"
              />
            </div>
            <div className="offer-drink-text">
              <h3>{drinks.title}</h3>
              <p>{drinks.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Link } from 'react-router-dom'
import heroImage from '../assets/Hero image.png'
import bowlMug from '../assets/bowl&Mug.png'
import bigCloth from '../assets/bigCloth.png'
import light from '../assets/light.png'
import './Home.css'

function Home() {
  const collections = [
    { name: 'Ceramics', image: bowlMug },
    { name: 'Textiles', image: bigCloth },
    { name: 'Lighting', image: light },
  ]

  return (
    <main className="home">

      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero__img" />
        <div className="hero__overlay">
          <div className="hero__content">
            <h1 className="hero__title">
              ESSENTIAL OBJECTS<br />FOR MODERN LIVING
            </h1>
            <p className="hero__subtitle">Quality craftsmanship, timeless design.</p>
            <Link to="/products" className="hero__cta">SHOP NEW ARRIVALS</Link>
          </div>
        </div>
      </section>

      <section className="collections">
        <h2 className="collections__heading">Collections</h2>
        <div className="collections__grid">
          {collections.map((col) => (
            <Link to="/products" className="collections__item" key={col.name}>
              <div className="collections__img-wrap">
                <img src={col.image} alt={col.name} />
              </div>
              <p className="collections__label">{col.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
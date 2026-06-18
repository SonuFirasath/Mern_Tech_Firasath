import { useState } from 'react'
import { Link } from 'react-router-dom'
import bowl from '../assets/bowl.png'
import bigCloth from '../assets/bigCloth.png'
import stool from '../assets/stool.png'
import bowlMug from '../assets/bowl&Mug.png'
import smallCloth from '../assets/smallCloth.png'
import './Products.css'

const allProducts = [
  { id: 1, name: 'Ceramic Vase', price: 15.00, category: 'Home Decor', image: bowl },
  { id: 6, name: 'Minimalist Stool', price: 10.00, category: 'Furniture', image: stool },
  { id: 2, name: 'Linen Throw Blanket', price: 16.00, category: 'Textiles', image: bigCloth },
  { id: 3, name: 'Minimalist Stool', price: 15.00, category: 'Furniture', image: stool },
  { id: 4, name: 'Ceramic Vase', price: 13.00, category: 'Home Decor', image: bowlMug },
  { id: 7, name: 'Minimalist Stool', price: 10.00, category: 'Furniture', image: stool },
  { id: 9, name: 'Minimalist Stool', price: 10.00, category: 'Furniture', image: stool },
  { id: 5, name: 'Linen Throw Blanket', price: 18.00, category: 'Textiles', image: smallCloth },
  { id: 8, name: 'Minimalist Stool', price: 10.00, category: 'Furniture', image: stool },
  { id: 11, name: 'Linen Throw Blanket', price: 18.00, category: 'Textiles', image: smallCloth },
  { id: 10, name: 'Minimalist Stool', price: 10.00, category: 'Furniture', image: stool },
]

const categories = ['Home Decor', 'Furniture', 'Dining', 'All Categories']
const colors = ['#E8E4DF', '#C4C4C4', '#8B7355', '#6B7A5E']

function Products() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [priceRange, setPriceRange] = useState(700)
  const [activeColor, setActiveColor] = useState(null)

  const filtered = allProducts.filter((p) => {
    const inCategory = activeCategory ? p.category === activeCategory : true
    const inPrice = p.price <= priceRange / 10
    return inCategory && inPrice
  })

  return (
    <div className="products-page">
      <aside className="sidebar">
        <div className="sidebar__section">
          <p className="sidebar__label">Category</p>
          <ul className="sidebar__list">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`sidebar__item ${activeCategory === cat ? 'active' : ''}`}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
          <p className="sidebar__label">Price</p>
          <input
            type="range"
            min={10}
            max={700}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="sidebar__range"
          />
          <div className="sidebar__range-labels">
            <span>$1 - 500</span>
            <span>$50 - 700</span>
          </div>
        </div>

        {/* <div className="sidebar__section">
          <p className="sidebar__label">Color</p>
          <div className="sidebar__colors">
            {colors.map((color) => (
              <button
                key={color}
                className={`sidebar__color ${activeColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() =>
                  setActiveColor(activeColor === color ? null : color)
                }
              />
            ))}
          </div>
        </div> */}
      </aside>

      <main className="products-main">
        <h1 className="products-main__heading">SHOP ALL PRODUCTS</h1>
        <div className="products-grid">
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card__img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card__info">
                <p className="product-card__name">{product.name}</p>
                <p className="product-card__price">${product.price.toFixed(2)}</p>
              </div>
              <button className="product-card__btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Products
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingCart } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">MIKEY'S STORE</Link>
      </div>

      <ul className="navbar__links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Shop</Link></li>
        <li><Link to="#">About</Link></li>
      </ul>

      <div className="navbar__icons">
        <Search size={18} strokeWidth={1.5} />
        <User size={18} strokeWidth={1.5} />
        <ShoppingCart size={18} strokeWidth={1.5} />
      </div>
    </nav>
  )
}

export default Navbar
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-brand">
          <span className="header-logo-wrap">
            <img
              src="/logo.jpeg"
              alt="SR Advisory Services"
              className="header-logo"
              onError={(e) => {
                const img = e.target
                const next = ['/logo.png', '/logo-navasri.png'][parseInt(img.dataset.fb || '0', 10)]
                if (next) {
                  img.dataset.fb = String(parseInt(img.dataset.fb || '0', 10) + 1)
                  img.src = next
                } else {
                  img.style.display = 'none'
                }
              }}
            />
          </span>
          <span className="header-logo-text">SR Advisory Services</span>
        </Link>

        <div className="header-nav-group">
          <nav className="header-nav">
            <ul className="header-nav-list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`header-nav-link ${location.pathname === to ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <Link to="/contact" className="header-cta">
            Contact
          </Link> */}
        </div>

        <button
          type="button"
          className="header-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="header-nav-mobile">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`header-nav-link ${location.pathname === to ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

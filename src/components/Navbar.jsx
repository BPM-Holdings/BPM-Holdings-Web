// Navbar.jsx — Fixed navigation bar with scroll-aware styling
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // Add scrolled class after user scrolls past 60px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section by ID
  // From a sub-page (e.g. /terms) go home first, then scroll to the section.
  const scrollTo = (id) => {
    setMenuOpen(false)
    if (pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <button
        type="button"
        className="navbar__logo"
        onClick={() => scrollTo('hero')}
        aria-label="BPM Holdings — back to top"
      >
        <LogoMark />
        <span className="navbar__brand">BPM Holdings</span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {['about', 'ventures', 'partners', 'contact'].map((id) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)} className="navbar__link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

// Inline SVG logo mark — globe / meridian motif
const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.2"/>
    <ellipse cx="14" cy="14" rx="5.5" ry="12.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="1.5" y1="14" x2="26.5" y2="14" stroke="currentColor" strokeWidth="1"/>
    <line x1="3" y1="8.5" x2="25" y2="8.5" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2"/>
    <line x1="3" y1="19.5" x2="25" y2="19.5" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2"/>
  </svg>
)

export default Navbar

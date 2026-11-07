// Footer.jsx — Site footer with nav, ventures, legal, support and founder link
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SITE, VENTURE_LINKS } from '../config/site.js'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  // On the home page scroll; from any other page go home first, then scroll.
  const scrollTo = (id) => {
    if (pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Ventures', id: 'ventures' },
    { label: 'Partners', id: 'partners' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <FooterGlobe />
              <span className="footer__brand-name">BPM Holdings</span>
            </div>
            <p className="footer__brand-desc">
              Building technology ventures, digital systems,<br />
              and future-focused businesses.
            </p>
          </div>

          {/* Nav */}
          <div className="footer__col">
            <span className="label footer__col-title">Navigation</span>
            <ul className="footer__nav">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button className="footer__nav-link" onClick={() => scrollTo(l.id)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div className="footer__col">
            <span className="label footer__col-title">Ventures</span>
            <ul className="footer__nav">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="footer__nav-link footer__nav-link--ext"
                >
                  PathWise ↗
                </a>
              </li>
              <li>
                <a
                  href={VENTURE_LINKS.terraMarkets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__nav-link footer__nav-link--ext"
                >
                  Terra Markets ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="footer__col">
            <span className="label footer__col-title">Legal & Support</span>
            <ul className="footer__nav">
              <li><Link to="/terms" className="footer__nav-link">Terms of Service</Link></li>
              <li><Link to="/privacy" className="footer__nav-link">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="footer__nav-link">Cookie Policy</Link></li>
              <li><Link to="/support" className="footer__nav-link">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <span className="label footer__col-title">Contact</span>
            <a href={`mailto:${SITE.email}`} className="footer__email">
              {SITE.email}
            </a>
            <div className="footer__founder-link-wrap">
              <span className="label footer__col-subtitle">Founder</span>
              <Link to="/founder" className="footer__founder-link">
                Boipelo Madiba ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy label">
            © {year} BPM Holdings. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/terms" className="footer__bottom-link">Terms</Link>
            <span className="footer__bottom-sep">·</span>
            <Link to="/privacy" className="footer__bottom-link">Privacy</Link>
            <span className="footer__bottom-sep">·</span>
            <Link to="/cookies" className="footer__bottom-link">Cookies</Link>
            <span className="footer__bottom-sep">·</span>
            <Link to="/support" className="footer__bottom-link">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="11" cy="11" rx="3.8" ry="9.5" stroke="currentColor" strokeWidth="0.8"/>
    <line x1="1.5" y1="11" x2="20.5" y2="11" stroke="currentColor" strokeWidth="0.8"/>
  </svg>
)

export default Footer

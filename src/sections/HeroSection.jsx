// HeroSection.jsx — Full-screen hero with globe animation and brand statement
import React, { useEffect, useRef } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const globeRef = useRef(null)

  // Subtle parallax on the globe decoration on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!globeRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 18
      const y = (e.clientY / window.innerHeight - 0.5) * 18
      globeRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Background globe decoration */}
      <div className="hero__globe-wrap" ref={globeRef}>
        <GlobeDecoration />
      </div>

      {/* Noise overlay for texture */}
      <div className="hero__noise" />

      <div className="hero__content container">
        {/* BPM Holdings Logo */}

        <div className="hero__text">
          <p className="label animate-fade-up delay-2">Est.2026 — Technology Ventures</p>
          <h1 className="hero__headline animate-fade-up delay-3">
            Building<br />
            <em>Tomorrow's</em><br />
            Systems
          </h1>
          <p className="hero__sub animate-fade-up delay-4">
            Parent company of technology ventures shaping<br />
            digital infrastructure, markets, and the web.
          </p>

          <div className="hero__cta animate-fade-up delay-5">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover BPM Holdings
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Ventures →
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll animate-fade-in delay-5">
          <div className="hero__scroll-line" />
          <span className="label">Scroll</span>
        </div>
      </div>
    </section>
  )
}

// BPM Holdings text-based logo with globe icon
const BPMLogo = () => (
  <div className="bpm-logo">
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="23" stroke="white" strokeWidth="1.2"/>
      <ellipse cx="26" cy="26" rx="9" ry="23" stroke="white" strokeWidth="1"/>
      <line x1="3" y1="26" x2="49" y2="26" stroke="white" strokeWidth="1"/>
      <line x1="6" y1="17" x2="46" y2="17" stroke="white" strokeWidth="0.6" strokeDasharray="3 3"/>
      <line x1="6" y1="35" x2="46" y2="35" stroke="white" strokeWidth="0.6" strokeDasharray="3 3"/>
      <circle cx="26" cy="26" r="3" fill="white"/>
    </svg>
    <div className="bpm-logo__text">
      <span className="bpm-logo__name">BPM Holdings</span>
      <span className="bpm-logo__tagline">Global Technology Ventures</span>
    </div>
  </div>
)

// Large decorative globe in background
const GlobeDecoration = () => (
  <svg
    className="hero__globe-svg"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"/>
    <ellipse cx="300" cy="300" rx="110" ry="280" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"/>
    <ellipse cx="300" cy="300" rx="200" ry="280" stroke="white" strokeWidth="0.4" strokeOpacity="0.06"/>
    <line x1="20" y1="300" x2="580" y2="300" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"/>
    <line x1="25" y1="220" x2="575" y2="220" stroke="white" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="4 6"/>
    <line x1="25" y1="380" x2="575" y2="380" stroke="white" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="4 6"/>
    <line x1="50" y1="155" x2="550" y2="155" stroke="white" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="3 8"/>
    <line x1="50" y1="445" x2="550" y2="445" stroke="white" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="3 8"/>
    {/* Continent-like land masses, very abstract */}
    <path d="M 240 240 Q 280 220 310 245 Q 340 260 330 290 Q 320 310 295 305 Q 265 300 250 280 Q 235 260 240 240Z" stroke="white" strokeWidth="0.6" strokeOpacity="0.1" fill="none"/>
    <path d="M 340 280 Q 360 265 380 275 Q 400 285 395 305 Q 390 320 370 318 Q 350 315 342 298 Q 335 285 340 280Z" stroke="white" strokeWidth="0.6" strokeOpacity="0.1" fill="none"/>
    <path d="M 210 320 Q 230 310 250 320 Q 265 330 260 350 Q 255 365 238 362 Q 220 358 212 342 Q 205 330 210 320Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" fill="none"/>
    {/* Meridian lines */}
    <line x1="300" y1="20" x2="300" y2="580" stroke="white" strokeWidth="0.3" strokeOpacity="0.04"/>
    <line x1="100" y1="50" x2="500" y2="50" stroke="white" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="2 10"/>
    <circle cx="300" cy="300" r="4" fill="white" fillOpacity="0.15"/>
  </svg>
)

export default HeroSection

// FounderSection.jsx — Boipelo Madiba founder profile
import React from 'react'
import './FounderSection.css'

const FounderSection = () => {
  return (
    <section id="founder" className="founder section">
      <div className="container">
        <div className="founder__inner">
          {/* Decorative element */}
          <div className="founder__deco">
            <FounderGlobe />
          </div>

          <div className="founder__content">
            <p className="label">Founder</p>
            <div className="divider" />

            <h2 className="founder__name">
              Boipelo<br /><em>Madiba</em>
            </h2>

            <p className="founder__bio">
              Developer. Entrepreneur. Builder of systems.
            </p>

            <p className="founder__desc">
              Boipelo Madiba is the founder and driving force behind BPM Holdings.
              As a developer and entrepreneur, he creates technology ventures that solve
              real-world problems — from digital market infrastructure to premium web systems.
            </p>

            <p className="founder__desc">
              His philosophy is simple: build with intention, scale with precision,
              and innovate without compromise. Through BPM Holdings, he is assembling
              a portfolio of ventures that define the next generation of digital business.
            </p>

            <a
              href="https://boipelojunior.com"
              target="_blank"
              rel="noopener noreferrer"
              className="founder__link"
            >
              <span>Visit Personal Website</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          {/* Signature block */}
          <div className="founder__sig">
            <div className="founder__sig-line" />
            <div className="founder__sig-text">
              <span className="founder__sig-name">Boipelo Madiba</span>
              <span className="label">Founder & CEO, BPM Holdings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FounderGlobe = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="74" stroke="white" strokeWidth="0.8" strokeOpacity="0.15"/>
    <ellipse cx="80" cy="80" rx="30" ry="74" stroke="white" strokeWidth="0.6" strokeOpacity="0.12"/>
    <ellipse cx="80" cy="80" rx="58" ry="74" stroke="white" strokeWidth="0.5" strokeOpacity="0.08"/>
    <line x1="6" y1="80" x2="154" y2="80" stroke="white" strokeWidth="0.6" strokeOpacity="0.15"/>
    <line x1="10" y1="55" x2="150" y2="55" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" strokeDasharray="3 5"/>
    <line x1="10" y1="105" x2="150" y2="105" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" strokeDasharray="3 5"/>
    <circle cx="80" cy="80" r="5" fill="white" fillOpacity="0.2"/>
    <circle cx="80" cy="80" r="2" fill="white" fillOpacity="0.6"/>
    {/* Connecting lines from center */}
    <line x1="80" y1="80" x2="110" y2="50" stroke="white" strokeWidth="0.5" strokeOpacity="0.15"/>
    <line x1="80" y1="80" x2="50" y2="55" stroke="white" strokeWidth="0.5" strokeOpacity="0.15"/>
    <line x1="80" y1="80" x2="120" y2="95" stroke="white" strokeWidth="0.5" strokeOpacity="0.15"/>
    <circle cx="110" cy="50" r="2" fill="white" fillOpacity="0.3"/>
    <circle cx="50" cy="55" r="2" fill="white" fillOpacity="0.3"/>
    <circle cx="120" cy="95" r="2" fill="white" fillOpacity="0.3"/>
  </svg>
)

export default FounderSection

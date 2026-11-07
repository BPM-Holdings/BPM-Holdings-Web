// PartnersSection.jsx — Horizontal scrolling partners/sponsors marquee
import React from 'react'
import { PARTNERS } from '../config/site.js'
import './PartnersSection.css'

const PartnersSection = () => {
  // Repeat the list so the marquee fills wide screens and loops seamlessly (-50% keyframe)
  const doubled = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

  return (
    <section id="partners" className="partners section">
      <div className="container">
        <div className="partners__header">
          <p className="label">Collaborations & Partners</p>
          <div className="divider" />
          <p className="partners__sub">
            The companies we collaborate with and stand beside as we build the future.
          </p>
        </div>
      </div>

      {/* Full-width marquee — outside container for edge-to-edge */}
      <div className="partners__track-wrap" aria-label="Partners">
        <div className="partners__track">
          {doubled.map((p, i) => (
            <div className="partner-chip" key={i}>
              <span className="partner-chip__dot" />
              <span className="partner-chip__name">{p.name}</span>
              {p.role && <span className="partner-chip__role">{p.role}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Second row going opposite direction */}
      <div className="partners__track-wrap partners__track-wrap--reverse">
        <div className="partners__track partners__track--reverse">
          {doubled.map((p, i) => (
            <div className="partner-chip partner-chip--dim" key={i}>
              <span className="partner-chip__dot" />
              <span className="partner-chip__name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

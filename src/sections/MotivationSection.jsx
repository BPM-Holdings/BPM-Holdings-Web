// MotivationSection.jsx — Motivational statement section
import React from 'react'
import './MotivationSection.css'

const MotivationSection = () => {
  return (
    <section className="motivation section">
      <div className="container">
        <div className="motivation__inner">
          {/* Top label */}
          <p className="label motivation__label">Our Philosophy</p>

          {/* Central statement */}
          <blockquote className="motivation__quote">
            "The future belongs to those who<br />
            <em>build the systems</em> that run it."
          </blockquote>

          {/* Supporting lines */}
          <div className="motivation__lines">
            <div className="motivation__line-item">
              <span className="motivation__dot" />
              <p>We don't wait for the future — we architect it.</p>
            </div>
            <div className="motivation__line-item">
              <span className="motivation__dot" />
              <p>Every venture is a proof of concept for what technology can do.</p>
            </div>
            <div className="motivation__line-item">
              <span className="motivation__dot" />
              <p>Innovation without systems is just noise. We build the signal.</p>
            </div>
          </div>

          {/* Decorative horizontal rule with globe */}
          <div className="motivation__rule">
            <div className="motivation__rule-line" />
            <GlobeSmall />
            <div className="motivation__rule-line" />
          </div>

          <p className="motivation__byline label">BPM Holdings — Building tomorrow's systems, today.</p>
        </div>
      </div>
    </section>
  )
}

const GlobeSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    <ellipse cx="10" cy="10" rx="3.5" ry="8.5" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5"/>
    <line x1="1.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5"/>
  </svg>
)

export default MotivationSection

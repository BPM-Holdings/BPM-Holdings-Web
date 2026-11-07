// AboutSection.jsx — About BPM Holdings
import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const pillars = [
    { icon: '◈', title: 'Technology Ventures', desc: 'Incubating and scaling digital businesses built for the future.' },
    { icon: '◎', title: 'Digital Systems', desc: 'Designing infrastructure that powers modern enterprises.' },
    { icon: '◇', title: 'Trading Technology', desc: 'Intelligent systems for modern financial markets.' },
    { icon: '▣', title: 'AI Interagration', desc: 'Premium platform dedicated to helping students and young people.' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          {/* Left — text */}
          <div className="about__left">
            <p className="label">About</p>
            <div className="divider" />
            <h2 className="about__headline">
              A holding company<br />
              <em>built for builders</em>
            </h2>
            <p className="about__body">
              BPM Holdings is a parent company that conceives, builds, and scales
              technology-driven ventures. We operate at the intersection of innovation,
              digital infrastructure, and global markets — creating systems that last.
            </p>
            <p className="about__body">
              Each venture under our umbrella is purpose-built: focused, lean, and
              designed to solve real problems at scale. From the web to the markets,
              BPM Holdings is the engine behind tomorrow's platforms.
            </p>

            {/* Earth element */}
            <div className="about__globe-badge">
              <GlobeSmall />
              <span>Global Innovation Platform</span>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="about__right">
            <div className="about__pillars">
              {pillars.map((p, i) => (
                <div className="pillar" key={i}>
                  <span className="pillar__icon">{p.icon}</span>
                  <div>
                    <h4 className="pillar__title">{p.title}</h4>
                    <p className="pillar__desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="about__stats">
          {[
            { num: '2', label: 'Active Ventures' },
            { num: '∞', label: 'Systems Built' },
            { num: '1', label: 'Global Mission' },
          ].map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat__num">{s.num}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const GlobeSmall = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="0.8"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="0.8"/>
  </svg>
)

export default AboutSection

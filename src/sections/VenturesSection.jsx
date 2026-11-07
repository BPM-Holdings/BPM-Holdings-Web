// VenturesSection.jsx — Showcase BPM ventures: PathWise & Terra Markets
import React, { useState } from 'react'
import { VENTURE_LINKS } from '../config/site.js'
import './VenturesSection.css'

const ventures = [
  {
    id: 'pathwise',
    name: 'PathWise',
    tagline: 'AI Guidance Platform',
    desc: 'COMING SOON - We are working on behind the scenes to bring you something meaningful',
    tags: ['AI Guidance', 'Education', 'Youth Empowerment'],
    url: VENTURE_LINKS.pathwise,
    comingSoon: true,
    icon: '◈',
    index: '01',
  },
  {
    id: 'terra-markets',
    name: 'Terra Markets',
    tagline: 'Trading Technology Platform',
    desc: 'Intelligent trading systems and market infrastructure for the modern investor. Terra Markets is building the next generation of financial technology.',
    tags: ['Trading Tech', 'Market Systems', 'FinTech'],
    url: VENTURE_LINKS.terraMarkets,
    comingSoon: true,
    icon: '◎',
    index: '02',
  },
]

const VenturesSection = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="ventures" className="ventures section">
      <div className="container">
        <div className="ventures__header">
          <div>
            <p className="label">Our Ventures</p>
            <div className="divider" />
            <h2 className="ventures__headline">
              Two ventures.<br /><em>One mission.</em>
            </h2>
          </div>
          <p className="ventures__intro">
            Each venture is independently focused yet united by BPM Holdings'
            commitment to building technology that shapes tomorrow.
          </p>
        </div>

        <div className="ventures__grid">
          {ventures.map((v) => {
            const Card = v.comingSoon ? 'div' : 'a'
            const linkProps = v.comingSoon
              ? {}
              : { href: v.url, target: '_blank', rel: 'noopener noreferrer' }
            return (
            <Card
              key={v.id}
              {...linkProps}
              className={`venture-card ${hovered === v.id ? 'venture-card--hovered' : ''} ${hovered && hovered !== v.id ? 'venture-card--dimmed' : ''}`}
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="venture-card__index">{v.index}</div>

              <div className="venture-card__icon">{v.icon}</div>

              <div className="venture-card__body">
                <h3 className="venture-card__name">{v.name}</h3>
                <p className="venture-card__tagline">{v.tagline}</p>
                <p className="venture-card__desc">{v.desc}</p>

                <div className="venture-card__tags">
                  {v.tags.map((t) => (
                    <span key={t} className="venture-card__tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="venture-card__footer">
                <span className="venture-card__cta">
                  {v.comingSoon ? 'Coming soon' : `Visit ${v.name}`}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div className="venture-card__line" />
              </div>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default VenturesSection

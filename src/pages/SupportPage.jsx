// SupportPage.jsx — Support & Help page
import React from 'react'
import './LegalPage.css'
import './SupportPage.css'

const SupportPage = () => (
  <div className="legal-page section">
    <div className="container">
      <div className="legal-page__header">
        <p className="label">Help & Support</p>
        <div className="divider" />
        <h1 className="legal-page__title">Support</h1>
        <p className="legal-page__meta">We're here to help — reach out and we'll get back to you promptly.</p>
      </div>

      <div className="support-grid">
        <div className="support-card">
          <div className="support-card__icon">✉</div>
          <h3 className="support-card__title">General Enquiries</h3>
          <p className="support-card__desc">For general questions about BPM Holdings, our ventures, or partnership opportunities.</p>
          <a href="mailto:bpmholdings@gmail.com" className="support-card__link">
            bpmholdings@gmail.com
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="support-card">
          <div className="support-card__icon">⚖</div>
          <h3 className="support-card__title">Legal & Compliance</h3>
          <p className="support-card__desc">For legal inquiries, POPIA requests, intellectual property matters, or compliance issues.</p>
          <a href="mailto:bpmholdings@gmail.com" className="support-card__link">
            bpmholdings@gmail.com
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="support-card">
          <div className="support-card__icon">◈</div>
          <h3 className="support-card__title">PathWise Support</h3>
          <p className="support-card__desc">For questions or issues relating to the PathWise AI career guidance platform.</p>
          <a target="_blank" rel="noopener noreferrer" className="support-card__link">
            Coming Soon ↗
          </a>
        </div>

        <div className="support-card">
          <div className="support-card__icon">◎</div>
          <h3 className="support-card__title">Terra Markets Support</h3>
          <p className="support-card__desc">For questions or issues relating to Terra Markets trading technology platform.</p>
          <a href="https://terramarkets.com" target="_blank" rel="noopener noreferrer" className="support-card__link">
            Visit Terra Markets ↗
          </a>
        </div>
      </div>

      <div className="support-note">
        <p>We typically respond within <strong>1–2 business days</strong>. For urgent matters, please indicate the urgency in your subject line.</p>
      </div>
    </div>
  </div>
)

export default SupportPage

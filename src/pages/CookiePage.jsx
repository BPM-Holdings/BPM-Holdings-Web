// CookiePage.jsx — Cookie Policy
import React from 'react'
import './LegalPage.css'

const CookiePage = () => {
  const year = new Date().getFullYear()
  return (
    <div className="legal-page section">
      <div className="container">
        <div className="legal-page__header">
          <p className="label">Legal</p>
          <div className="divider" />
          <h1 className="legal-page__title">Cookie Policy</h1>
          <p className="legal-page__meta">Effective date: 1 January {year} · Last updated: October {year}</p>
        </div>

        <div className="legal-page__body">
          <section className="legal-section">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function correctly, improve performance, and provide information to the site's owners.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Cookies</h2>
            <p>BPM Holdings uses cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., pages visited, time on site). Data is aggregated and anonymised.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences to improve your experience on return visits.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted.</li>
              <li><strong>First-Party Cookies:</strong> Set directly by BPM Holdings.</li>
              <li><strong>Third-Party Cookies:</strong> Set by our trusted partners (e.g., analytics providers) in connection with our Services.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
            <ul>
              <li>View cookies stored on your device.</li>
              <li>Delete cookies individually or in bulk.</li>
              <li>Block cookies from specific or all websites.</li>
            </ul>
            <p>Please note that disabling certain cookies may affect the functionality of our Services.</p>
            <p>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('bpm:open-cookie-settings'))}
                style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Manage your cookie preferences
              </button>
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy periodically. Changes will be reflected by an updated "Last updated" date at the top of this page.</p>
          </section>

          <section className="legal-section">
            <h2>6. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at <a href="mailto:bpmholdings@gmail.com">bpmholdings@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiePage

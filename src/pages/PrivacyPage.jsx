// PrivacyPage.jsx — Privacy Policy
import React from 'react'
import './LegalPage.css'

const PrivacyPage = () => {
  const year = new Date().getFullYear()
  return (
    <div className="legal-page section">
      <div className="container">
        <div className="legal-page__header">
          <p className="label">Legal</p>
          <div className="divider" />
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__meta">Effective date: 1 January {year} · Last updated: October {year}</p>
        </div>

        <div className="legal-page__body">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>BPM Holdings ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services, in compliance with the Protection of Personal Information Act (POPIA) of South Africa.</p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, and any details you provide via contact forms.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Services, including pages visited and time spent.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and cookies (see our Cookie Policy).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, operate, and improve our Services.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Send relevant updates, where you have opted in.</li>
              <li>Comply with legal obligations.</li>
              <li>Protect the security and integrity of our Services.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share it with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party partners (e.g., Supabase for database hosting) who process data on our behalf under strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required to comply with applicable laws, court orders, or governmental requests.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Policy, or as required by law. Contact form submissions are typically retained for 24 months.</p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights (POPIA)</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your information (subject to legal obligations).</li>
              <li>Object to the processing of your information.</li>
              <li>Lodge a complaint with the Information Regulator of South Africa.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>Our Services may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by a new "Last updated" date. We encourage you to review this Policy periodically.</p>
          </section>

          <section className="legal-section">
            <h2>10. Contact Us</h2>
            <p>For privacy-related inquiries or to exercise your rights, contact us at <a href="mailto:bpmholdings@gmail.com">bpmholdings@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage

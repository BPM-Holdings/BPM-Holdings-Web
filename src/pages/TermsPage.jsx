// TermsPage.jsx — Terms of Service
import React from 'react'
import './LegalPage.css'

const TermsPage = () => {
  const year = new Date().getFullYear()
  return (
    <div className="legal-page section">
      <div className="container">
        <div className="legal-page__header">
          <p className="label">Legal</p>
          <div className="divider" />
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__meta">Effective date: 1 January {year} · Last updated: October {year}</p>
        </div>

        <div className="legal-page__body">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using any BPM Holdings website, product, or service (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you may not use the Services.</p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Services</h2>
            <p>BPM Holdings is a South African holding company that develops and operates technology ventures, including PathWise SA and Terra Markets. The Services include our websites, digital platforms, and associated tools provided by BPM Holdings and its subsidiaries.</p>
          </section>

          <section className="legal-section">
            <h2>3. Eligibility</h2>
            <p>You must be at least 13 years of age to use the Services. By using the Services, you represent that you meet this requirement and, if you are between 13 and 18, that you have your parent or guardian's consent.</p>
          </section>

          <section className="legal-section">
            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Services or related systems.</li>
              <li>Transmit any harmful, offensive, or disruptive content through the Services.</li>
              <li>Reverse engineer, decompile, or disassemble any software forming part of the Services.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>All content, trademarks, logos, and intellectual property displayed on or through the Services are the property of BPM Holdings or its licensors. You may not use, reproduce, or distribute any such materials without prior written consent.</p>
          </section>

          <section className="legal-section">
            <h2>6. Disclaimer of Warranties</h2>
            <p>The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. BPM Holdings does not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, BPM Holdings shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Services.</p>
          </section>

          <section className="legal-section">
            <h2>8. Governing Law</h2>
            <p>These Terms are governed by the laws of the Republic of South Africa. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of South Africa.</p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last updated" date. Continued use of the Services after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>If you have questions about these Terms, please contact us at <a href="mailto:bpmholdings@gmail.com">bpmholdings@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsPage

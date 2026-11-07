// ContactSection.jsx — Contact form and social links
import React, { useState } from 'react'
import { SITE, SOCIALS, WEB3FORMS_KEY } from '../config/site.js'
import './ContactSection.css'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error | mailto
  const [errorDetail, setErrorDetail] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  // Backendless submit:
  //  - With VITE_WEB3FORMS_KEY set, the message is delivered to your inbox via Web3Forms.
  //  - Without it, we open the visitor's email app with the message pre-filled.
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) { setStatus('success'); return } // honeypot tripped — pretend success to bots
    setErrorDetail('')
    setStatus('loading')

    console.log('[contact] Web3Forms key loaded?', Boolean(WEB3FORMS_KEY)) // temporary debug — delete once working

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${form.name} — BPM Holdings website`,
          from_name: 'BPM Holdings Website',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '', botcheck: '' })
      } else {
        console.error('Web3Forms rejected the submission:', res.status, data)
        setErrorDetail(data?.message || `HTTP ${res.status}`)
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form request failed:', err)
      setErrorDetail(err?.message || 'Network error')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__grid">
          {/* Left — info */}
          <div className="contact__info">
            <p className="label">Contact</p>
            <div className="divider" />
            <h2 className="contact__headline">
              Let's build<br /><em>something</em>
            </h2>

            <p className="contact__body">
              Whether you're interested in our ventures, a collaboration,
              or simply want to connect — we'd love to hear from you.
            </p>

            <div className="contact__email-block">
              <span className="label">Direct Email</span>
              <a href={`mailto:${SITE.email}`} className="contact__email">
                {SITE.email}
              </a>
            </div>

            <div className="contact__socials">
              <span className="label">Follow Us</span>
              <div className="contact__social-links">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                  >
                    {s.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 9L9 1M9 1H4M9 1V6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit}>
              {/* Honeypot (hidden from people, catches bots) */}
              <input
                type="text"
                name="botcheck"
                value={form.botcheck}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <div className="form-field">
                <label htmlFor="name" className="form-field__label label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-field__input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-field__label label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="form-field__input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-field__label label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-field__input form-field__textarea"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-status form-status--success" role="status">
                  ✓ Message sent. We'll be in touch.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--error" role="alert">
                  Something went wrong{errorDetail ? ` (${errorDetail})` : ''}. Please email us directly at {SITE.email}.
                </p>
              )}
              {status === 'mailto' && (
                <p className="form-status form-status--success" role="status">
                  Opening your email app… if nothing opens, please email us at {SITE.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
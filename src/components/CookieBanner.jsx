// CookieBanner.jsx — Cookie Consent Banner with POPIA & Privacy compliance
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

const STORAGE_KEY = 'bpm_cookie_consent'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true and locked
    analytics: false,
    preferences: false,
  })

  useEffect(() => {
    // Load any saved choice
    const stored = localStorage.getItem(STORAGE_KEY)
    let timer
    if (!stored) {
      // Small delay for smooth entrance after page load
      timer = setTimeout(() => setIsVisible(true), 1200)
    } else {
      try {
        const parsed = JSON.parse(stored)
        if (parsed && typeof parsed === 'object') {
          setPreferences((prev) => ({ ...prev, ...parsed }))
        }
      } catch {
        // ignore malformed value
      }
    }

    // Re-open settings from the Cookie Policy page (always registered)
    const handleOpenSettings = () => {
      setIsVisible(true)
      setShowDetails(true)
    }
    window.addEventListener('bpm:open-cookie-settings', handleOpenSettings)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('bpm:open-cookie-settings', handleOpenSettings)
    }
  }, [])

  const saveConsent = (choice) => {
    let settings
    if (choice === 'all') {
      settings = { essential: true, analytics: true, preferences: true, level: 'all' }
    } else if (choice === 'essential') {
      settings = { essential: true, analytics: false, preferences: false, level: 'essential' }
    } else {
      settings = { ...preferences, level: 'custom' }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    setPreferences(settings)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__container">
        <div className="cookie-banner__header">
          <div className="cookie-banner__title-wrap">
            <span className="cookie-banner__icon">◈</span>
            <span className="label cookie-banner__label">Privacy & Cookie Preferences</span>
          </div>
          <button
            className="cookie-banner__close"
            onClick={() => saveConsent('essential')}
            aria-label="Decline and close"
          >
            ✕
          </button>
        </div>

        <p className="cookie-banner__text">
          BPM Holdings uses essential cookies to ensure our digital platforms perform reliably and
          securely. We also use optional analytics to refine and improve your experience in compliance with South African privacy standards (POPIA).
          Learn more in our{' '}
          <Link to="/cookies" className="cookie-banner__link">
            Cookie Policy
          </Link>
          .
        </p>

        {showDetails && (
          <div className="cookie-banner__details">
            <div className="cookie-banner__option">
              <label className="cookie-banner__checkbox-label">
                <input type="checkbox" checked disabled className="cookie-banner__checkbox" />
                <span className="cookie-banner__option-name">Essential Cookies</span>
              </label>
              <p className="cookie-banner__option-desc">
                Required for core website security, session navigation, and accessibility. Cannot be disabled.
              </p>
            </div>

            <div className="cookie-banner__option">
              <label className="cookie-banner__checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="cookie-banner__checkbox"
                />
                <span className="cookie-banner__option-name">Analytics & Performance</span>
              </label>
              <p className="cookie-banner__option-desc">
                Aggregated, anonymous metrics that help us evaluate platform traffic and venture engagement.
              </p>
            </div>

            <div className="cookie-banner__option">
              <label className="cookie-banner__checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, preferences: e.target.checked }))
                  }
                  className="cookie-banner__checkbox"
                />
                <span className="cookie-banner__option-name">Experience & Preferences</span>
              </label>
              <p className="cookie-banner__option-desc">
                Stores your interface choices and theme configurations for future visits.
              </p>
            </div>
          </div>
        )}

        <div className="cookie-banner__actions">
          <div className="cookie-banner__secondary-group">
            <button
              type="button"
              className="cookie-banner__btn cookie-banner__btn--ghost"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'Manage Preferences'}
            </button>
            <button
              type="button"
              className="cookie-banner__btn cookie-banner__btn--ghost"
              onClick={() => saveConsent('essential')}
            >
              Essential Only
            </button>
          </div>

          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--primary"
            onClick={() => (showDetails ? saveConsent('custom') : saveConsent('all'))}
          >
            {showDetails ? 'Save Preferences' : 'Accept All'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

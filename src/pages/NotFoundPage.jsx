// NotFoundPage.jsx — shown for any unknown route
import React from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'

const NotFoundPage = () => (
  <div className="legal-page section">
    <div className="container">
      <div className="legal-page__header">
        <p className="label">Error 404</p>
        <div className="divider" />
        <h1 className="legal-page__title">Page not found</h1>
        <p className="legal-page__meta">
          The page you're looking for doesn't exist or has moved.{' '}
          <Link to="/" style={{ textDecoration: 'underline' }}>Back to home</Link>
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage

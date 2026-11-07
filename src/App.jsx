// App.jsx — Root component, manages routing and layout
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import HomePage from './pages/HomePage.jsx'

// Secondary pages load on demand so the home page ships less JS
const FounderSection = lazy(() => import('./sections/FounderSection.jsx'))
const TermsPage = lazy(() => import('./pages/TermsPage.jsx'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'))
const CookiePage = lazy(() => import('./pages/CookiePage.jsx'))
const SupportPage = lazy(() => import('./pages/SupportPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/founder" element={<FounderSection />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiePage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  )
}

export default App

// site.js — single source of truth for contact details, links and partners.
// Edit here; every component reads from this file.

export const SITE = {
  name: 'BPM Holdings',
  email: 'bpmholdings.sa@gmail.com',
  url: 'https://bpmholdings.com', // update to your real domain
}

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/bpmholdings' },
  { label: 'Twitter / X', href: 'https://twitter.com/bpmholdings' },
  { label: 'GitHub', href: 'https://github.com/bpmholdings' },
]

export const VENTURE_LINKS = {
  pathwise: 'https://pathwise.co.za',
  terraMarkets: 'https://terramarkets.com',
}

export const PARTNERS = [
  { name: 'ESCP', role: 'Collaboration Partner' },
  { name: 'PathWise', role: 'Collaboration Partner' },
  { name: 'Terra Markets', role: 'Collaboration Partner' },
  { name: 'Lani Laurent Group', role: 'Collaboration Partner' },
]

// Contact form delivery (no backend needed).
// Set VITE_WEB3FORMS_KEY in Vercel to deliver messages straight to your inbox.
// Without it, the form falls back to opening the visitor's email app.
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

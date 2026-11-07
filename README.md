# BPM Holdings — Corporate Website

A luxury, minimal corporate website for BPM Holdings, the parent company behind PathWise and Terra Markets.

**Fully static. No backend, no database, no server to host.** Push to GitHub, import into Vercel, done.

## Stack

React 18 + Vite + React Router, plain CSS. Fonts: Cormorant Garamond, Barlow, Barlow Condensed.

## Run locally

```powershell
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs ./dist
```

## Deploy (GitHub → Vercel)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → import the repo**. Framework is auto-detected as Vite (build `npm run build`, output `dist`).
3. Optional but recommended — enable the contact form (below) by adding the env var in **Project → Settings → Environment Variables**.

`vercel.json` already rewrites all routes to `index.html`, so `/terms`, `/privacy`, `/founder` etc. work on refresh and when shared.

## Contact form (no backend)

The form works in two modes:

| Mode | When | What happens |
|------|------|--------------|
| Inbox delivery | `VITE_WEB3FORMS_KEY` is set | Message is sent to your inbox via [Web3Forms](https://web3forms.com) (free; they email you the key). |
| Email fallback | key not set | Opens the visitor's email app with the message pre-filled. |

Copy `.env.example` to `.env` for local testing. The access key is meant to be public; it's safe in the browser.

## Where to edit content

Everything shared lives in `src/config/site.js`: contact email, social links, venture links, partners.

## Structure

```
src/
├── components/   Navbar, Footer, CookieBanner, ScrollManager
├── config/       site.js (email, links, partners, form key)
├── pages/        Home, Terms, Privacy, Cookies, Support, NotFound
├── sections/     Hero, About, Founder, Ventures, Motivation, Partners, Contact
└── styles/       globals.css (design tokens, animations)
```

© BPM Holdings. Built by Boipelo Madiba.

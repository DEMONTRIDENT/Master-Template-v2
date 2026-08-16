# PRD — The Flying Loaf Bakery Website

## Problem Statement
Build the best possible showcase website for The Flying Loaf Bakery (300-332 Grand Blvd, Shop 15, Craigieburn VIC 3064 — 4.6★, 1,000+ ratings on Uber Eats). User's goal: cold-call the bakery and sell the site for a high price. Must be simple, clear menu, but visually amazing.

## User Choices
- No online ordering — showcase site only (menu, location, hours, contact)
- Design: agent's choice, as impressive as possible
- Menu: scraped from real Uber Eats page
- Sections: essentials only (Hero, Menu, About, Reviews, Location/Hours, Contact)

## Architecture
- Frontend-only React SPA (backend template untouched, no DB needed)
- Design: warm editorial "flour & terracotta" theme — Playfair Display / Manrope / JetBrains Mono, #F4F1EB bg, #A84A22 accent, #1A1A1A dark
- Motion: Lenis smooth scrolling, framer-motion masked hero reveal + scroll reveals, hero image parallax (useScroll/useTransform), react-fast-marquee editorial ribbon, noise overlay
- Files: `src/App.js`, `src/App.css`, `src/data/menu.js`, `src/components/{Nav,Hero,Ribbon,Manifesto,MenuSection,Reviews,Visit,Footer}.jsx`

## Implemented (June 2026)
- Kinetic hero: masked line-by-line title reveal, parallax clipped image, rating badge
- Editorial marquee ribbon
- Numbered manifesto chapters (01 Crust / 02 Fill / 03 Ritual) with sticky left column
- Full real menu (5 categories, ~35 items with real prices) as tabbed editorial dotted-list
- Dark inversion reviews section: giant 4.6 wordmark + 6 real Uber Eats reviews
- Visit section: Google Maps embed, address, hours (7 days, 8AM–5PM), Uber Eats link
- Massive-type footer wordmark
- Mobile slide-out hamburger menu (dark full-screen panel, staggered links, closes on navigate)
- "From the Counter" photo gallery: slow drifting marquee of 6 AI-generated food photos (bánh mì, vanilla slice, donuts, pie, iced coffee, bread rolls), pause on hover
- Vercel deploy fixes: `.npmrc` (legacy-peer-deps), `vercel.json` (SPA rewrites), `ajv ^8` pin — user successfully deployed to Vercel
- MASTER TEMPLATE refactor: all business content centralized in `src/config/business.js` + `src/data/menu.js`; brand palette as Tailwind tokens (cream/ink/brand in tailwind.config.js); customization guide at `/app/TEMPLATE.md`; components are now business-agnostic
- GOD TEMPLATE upgrade: `features` flags toggle sections per business type; nav links auto-generate from enabled sections; generic `cta` (order/book/call/quote, url ""=hidden); `contact` (phone/email/socials, empty=hidden); rating null=hidden; TEMPLATE.md has business-type presets + copy-paste Claude brief

## Backlog
- P2: Catering enquiry form, SEO meta/OG tags, real bakery photography swap, hidden sales-pitch page
- P2: Ordering flow (explicitly declined by user)

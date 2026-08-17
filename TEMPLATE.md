# GOD TEMPLATE — One Codebase, Any Business

A premium, award-style website that adapts to any business type by editing **4 files**.
No component changes ever needed. Sections switch on/off via `features` flags.

---

## HOW TO BRIEF CLAUDE (copy-paste this with your client's details)

```
Use the master template in this project (read /app/TEMPLATE.md first).
Create a website for this business — edit ONLY src/config/business.js and
src/data/menu.js (plus generate photos):

BUSINESS NAME: ...
BUSINESS TYPE: (bakery / café / salon / barber / gym / tradie / retail / other)
LOCATION: (full address)
OPENING HOURS: ...
PHONE / EMAIL / SOCIALS: (or "none")
RATING & REVIEWS: (e.g. "4.8 on Google, 200+ reviews" + 4-6 real quotes, or "none")
MENU/SERVICES + PRICES: (paste list, or link to scrape)
PRIMARY ACTION: (e.g. "Order on Uber Eats: <url>" / "Book on Fresha: <url>" /
                 "Call for a quote" / none)
ABOUT / STORY: (2-3 things that make them special, or "write it for me")
ANNOUNCEMENT BAR: (e.g. "Closed public holidays" / promo, or "none")
FAQ: (common questions, or "write 4 sensible ones")
VIBE / COLOURS / FONTS: (or "you decide — make it unique")
PHOTOS: (links, or "generate fitting ones")

Then: set theme colours + fonts in BUSINESS.theme, set the feature flags for
this business type, write the SEO title/description, generate/collect photos,
and fill every config field. Do not redesign components.
Verify with a build + screenshot.
```

---

## BUSINESS-TYPE PRESETS (feature flags + wording)

| Business | menu navLabel | cta | features |
|---|---|---|---|
| Food / café / bakery | "Menu" | Order (Uber Eats/DoorDash/own) | all on |
| Salon / barber / beauty | "Services" | "Book Now" (Fresha/Square/phone) | gallery optional |
| Tradie / cleaner / landscaper | "Services" | "Get a Quote →" (tel: or mailto:) | gallery = job photos, contactForm ON |
| Gym / studio | "Programs" | "Join / Free Trial" | faq ON (memberships) |
| Retail / boutique | "What We Stock" | "Shop Online" or none | menu optional |
| Professional (law/accounting) | "Services" | "Book a Consultation" | marquee + gallery OFF, contactForm ON |

CTA works for anything: `url` can be `https://...`, `tel:+61390000000`, or `mailto:...`.
Set `url: ""` to hide the button entirely.

---

## THEME PRESETS (drop into BUSINESS.theme for instant variety)

| Vibe | cream | ink | brand | serif / sans / mono |
|---|---|---|---|---|
| Warm artisan (default) | #F4F1EB | #1A1A1A | #A84A22 | Playfair Display / Manrope / JetBrains Mono |
| Coastal fresh | #F2F5F3 | #12211C | #0E7C66 | Fraunces / Sora / Space Mono |
| Midnight luxe | #EFEDE8 | #14131A | #8A6DE9 | Cormorant Garamond / Outfit / IBM Plex Mono |
| Butcher bold | #F5F0E6 | #201512 | #B3261E | Bricolage Grotesque / Instrument Sans / Fragment Mono |
| Ocean pro | #F0F3F7 | #101826 | #1D4ED8 | Libre Caslon Text / Figtree / DM Mono |

New fonts: set `theme.googleFontsUrl` to the Google Fonts css2 URL for the three
families (they inject at runtime). For zero font-flash in production, also swap
the default `@import` at the top of `src/App.css`.

---

## THE 2 FILES THAT MATTER

### 1. `frontend/src/config/business.js` — the master switchboard (95% of a rebrand)
- `theme` — ALL colours + fonts for the entire site (runtime CSS variables)
- `seo` — Google title/description, link-preview (OG) tags, LocalBusiness
  structured data (schema type, rating, hours, address) — all auto-generated
- `features` — toggle marquee / story / gallery / menu / reviews / visit / faq / contactForm
- `announcement` — thin promo bar above the nav ("" = hidden)
- `contact` — phone, email, socials (empty = hidden automatically)
- `cta` — the one primary action (order/book/call/quote), shown in Visit + footer
- `rating` — hero star badge (`null` = hidden; also disable `features.reviews`)
- `faq` — accordion questions · `contactForm` — enquiry form copy
- Every heading, tagline, address, hours, story chapter, gallery photo
- Nav links auto-generate from enabled sections — no broken anchors

### 2. `frontend/src/data/menu.js` — menu/services & testimonials
- `CATEGORIES`: works for menus, service lists, price lists, programs
  `{ id, label, note?, items: [{ name, price, desc?, tag? }] }`
- `REVIEWS`: 6 quotes with names (any review source)
- `IMAGES`: hero + story-chapter photos

### Defaults only (rarely touched)
- `tailwind.config.js` + `src/App.css` hold fallback theme values — the real
  ones come from `BUSINESS.theme` at runtime.

---

## REUSABLE SECTIONS (components — never need editing)
ScrollProgress (brand progress bar) · Nav (announcement bar + auto links +
mobile slide-out) · Hero (kinetic reveal + parallax) · Ribbon (marquee) ·
Manifesto (numbered story) · Gallery (drifting photos) · MenuSection (tabbed
editorial list) · Reviews (dark, giant rating) · Visit (map/hours/contact/CTA) ·
FAQ (accordion) · ContactForm (dark enquiry form — works on free static hosting,
opens the visitor's email app pre-filled) · Footer (wordmark + columns)

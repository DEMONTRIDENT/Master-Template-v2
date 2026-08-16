# GOD TEMPLATE — One Codebase, Any Business

A premium, award-style website that adapts to any business type by editing **4 files**.
No component changes ever needed. Sections switch on/off via `features` flags.

---

## HOW TO BRIEF CLAUDE (copy-paste this with your client's details)

```
Use the master template in this project (read /app/TEMPLATE.md first).
Create a website for this business — edit ONLY the 4 customization files:

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
VIBE / COLOURS: (or "you decide")
PHOTOS: (links, or "generate fitting ones")

Then: pick fonts + 3 brand colours to match the vibe, set the feature flags
for this business type, generate/collect photos, and fill every config field.
Do not redesign components. Verify with a build + screenshot.
```

---

## BUSINESS-TYPE PRESETS (feature flags + wording)

| Business | menu navLabel | cta | features off |
|---|---|---|---|
| Food / café / bakery | "Menu" | Order (Uber Eats/DoorDash/own) | — |
| Salon / barber / beauty | "Services" | "Book Now" (Fresha/Square/phone) | gallery optional |
| Tradie / cleaner / landscaper | "Services" | "Get a Quote →" (tel: or mailto:) | menu→services, gallery = job photos |
| Gym / studio | "Programs" | "Join / Free Trial" | — |
| Retail / boutique | "What We Stock" | "Shop Online" or none | menu optional |
| Professional (law/accounting) | "Services" | "Book a Consultation" | marquee + gallery off |

CTA works for anything: `url` can be `https://...`, `tel:+61390000000`, or `mailto:...`.
Set `url: ""` to hide the button entirely.

---

## THE 4 CUSTOMIZATION FILES

### 1. `frontend/src/config/business.js` — the master switchboard
- `features` — turn marquee / story / gallery / menu / reviews / visit on or off
- `contact` — phone, email, socials (empty = hidden automatically)
- `cta` — the one primary action (order/book/call/quote), shown in Visit + footer
- `rating` — hero star badge (`null` = hidden; also disable `features.reviews`)
- Every heading, tagline, address, hours, story chapter, gallery photo
- Nav links auto-generate from enabled sections — no broken anchors

### 2. `frontend/src/data/menu.js` — menu/services & testimonials
- `CATEGORIES`: works for menus, service lists, price lists, programs
  `{ id, label, note?, items: [{ name, price, desc?, tag? }] }`
- `REVIEWS`: 6 quotes with names (any review source)
- `IMAGES`: hero + story-chapter photos

### 3. `frontend/tailwind.config.js` — 3 brand colours
```js
cream: '#F4F1EB',  // page background      (any light tone)
ink:   '#1A1A1A',  // text / dark sections (any near-black)
brand: '#A84A22',  // accent               (the personality colour)
```

### 4. `frontend/src/App.css` — fonts
Swap the Google Fonts import + 3 families (serif display / sans body / mono labels)
and the `::selection` colour. Randomize font pairings per client so no two sites match.

---

## REUSABLE SECTIONS (components — never need editing)
Nav (auto links + mobile slide-out) · Hero (kinetic reveal + parallax) ·
Ribbon (marquee) · Manifesto (numbered story) · Gallery (drifting photos) ·
MenuSection (tabbed editorial list) · Reviews (dark, giant rating) ·
Visit (map/hours/contact/CTA) · Footer (wordmark + columns)

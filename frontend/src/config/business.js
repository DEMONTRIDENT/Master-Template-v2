// ============================================================
// MASTER TEMPLATE — BUSINESS CONFIG
// To rebrand this site for a new business, edit ONLY:
//   1. This file        — all text, contact details, links, photos
//   2. src/data/menu.js — menu/services items, testimonials, core images
//   3. tailwind.config.js -> theme.extend.colors (cream / ink / brand)
//   4. src/App.css      — fonts (Google Fonts import) + ::selection color
// No component files need to change.
// ============================================================
import { IMAGES } from "../data/menu";
import { BARBER } from "./presets/barber";

const BAKERY = {
  name: "The Flying Loaf", // nav logo + mobile menu (a "." accent is appended automatically)
  navCtaLabel: "Visit Us", // top-right nav button text
  wordmark: "THE FLYING LOAF", // giant footer text — keep short so it fits one line

  // --- THEME — the ENTIRE look from one place (colours + fonts) ---
  theme: {
    cream: "#F4F1EB", // page background (any light tone)
    ink: "#1A1A1A", // text + dark sections (any near-black)
    brand: "#A84A22", // accent — the personality colour
    fontSerif: "Playfair Display", // display headings
    fontSans: "Manrope", // body text
    fontMono: "JetBrains Mono", // labels / prices / overlines
    googleFontsUrl: "", // set when changing fonts, e.g. "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700;900&family=Sora:wght@400;500&family=Space+Mono&display=swap"
  },

  // --- SEO — Google result + link previews + structured data ---
  seo: {
    title: "The Flying Loaf Bakery — Bánh Mì & Fresh Bakes, Craigieburn",
    description: "Craigieburn's favourite bakery. Crackle-skin bánh mì, fresh rolls, pies, cakes and Vietnamese iced coffee. Open 7 days, 8am–5pm on Grand Blvd.",
    schemaType: "Bakery", // schema.org type: Bakery, Restaurant, HairSalon, Electrician, ExerciseGym...
  },

  // Thin bar above the nav — "" hides it
  announcement: "Rated 4.6 ★ by 1,000+ locals — beat the midday rush",

  // --- FEATURE SWITCHES — turn sections on/off per business type ---
  // Food/café: menu + order CTA · Salon: services + book CTA · Trades: services + quote CTA
  features: {
    marquee: true, // scrolling tagline ribbon
    story: true, // numbered "about" chapters
    gallery: true, // drifting photo strip
    menu: true, // menu / services / pricing list
    reviews: true, // dark testimonials section (requires `rating`)
    visit: true, // map, address, hours, contact
    faq: true, // accordion of common questions
    contactForm: true, // dark enquiry form (requires contact.email — sends via the visitor's email app)
  },

  // --- Contact details (leave "" / [] to hide) ---
  contact: {
    phone: "", // e.g. "(03) 9000 0000" — shows in Visit section
    email: "hello@theflyingloafbakery.com.au", // PLACEHOLDER — replace with the real inbox
    socials: [], // e.g. [{ label: "Instagram", url: "https://instagram.com/..." }] — shows in footer
  },

  // --- Primary call-to-action: order / book / call / get a quote — anything ---
  cta: {
    prompt: "Can't make it in?", // small line above the button in the Visit section
    label: "Order on Uber Eats →", // button text
    url: "https://www.ubereats.com/au/store/the-flying-loaf-bakery/eT7d4DxzTNuXZswrcGHKkQ", // set "" to hide the button
    footerHeading: "Order", // footer column title (e.g. "Book", "Get a Quote")
    footerLabel: "Uber Eats — The Flying Loaf Bakery", // footer link text
  },

  hero: {
    overline: "Craigieburn, Melbourne — Est. Bakery & Bánh Mì House",
    titleLine1: "THE FLYING",
    titleLine2: "LOAF",
    titleItalic: "bakery", // italic accent word at the end of line 2
    description:
      "Crackle-skin pork bánh mì, crisp rolls baked every morning, and Vietnamese iced coffee worth crossing town for. This is Craigieburn's midday ritual.",
    ctaLabel: "See the Menu",
    image: IMAGES.hero,
    imageBadge: "Baked fresh · Open 7 days",
  },

  // Social proof — set to null to hide the hero badge (disable features.reviews too)
  rating: { score: "4.6", count: "1,000+ ratings", reviewCount: "1000" },

  // Scrolling ribbon phrases (business taglines / USPs)
  marquee: ["Freshly Baked Daily", "Vietnamese Inspired", "Craigieburn's Finest", "Crackle-Skin Bánh Mì", "Real Drip Coffee"],

  // "About" section — numbered story chapters
  story: {
    navLabel: "Our Story",
    overline: "Our Story",
    heading: "Three things we refuse",
    headingItalic: "to compromise.",
    chapters: [
      {
        no: "01",
        title: "The Crust",
        img: IMAGES.pastries,
        text: "Every roll leaves the oven the same morning it's sold. Shatteringly crisp outside, cloud-light inside — the foundation of every bánh mì we make, and the reason locals buy them by the half-dozen to take home.",
      },
      {
        no: "02",
        title: "The Fill",
        img: IMAGES.banhMi,
        text: "Crackle-skin roast pork carved to order. House pâté, pickled carrot and cucumber, fresh coriander and a hit of hoisin. Nothing pre-made, nothing rushed — 599 people rated our Roast Crackle 91% for a reason.",
      },
      {
        no: "03",
        title: "The Ritual",
        img: IMAGES.coffee,
        text: "Vietnamese iced coffee, dripped slow over condensed milk. Pair it with a vanilla slice or a warm pie and you'll understand why the midday queue goes out the door.",
      },
    ],
  },

  gallery: {
    overline: "From the Counter",
    heading: "Let the food",
    headingItalic: "do the talking.",
    photos: [
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/e351c1af50f3bdd1096d39a3925a5a4edb25fa9bca169fb5145b0502b372e63f.jpeg", caption: "Roast Crackle Bánh Mì" },
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/3a045a3fdb2b09f29e3dbf8223a22cd993c75dd9e626707814b882bb1458a1ee.jpeg", caption: "Vanilla Slice" },
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/5545d8d1074ebc9ad4a4f5da15ac751b1dc35574f44abb6b0b4bd4639ccb997c.jpeg", caption: "Donuts & Long Johns" },
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/5750368371a43cb1c8b6721e7d4fdd8cc7acd451545d4decaba770802f0e7296.jpeg", caption: "Beef & Cheese Pie" },
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/72d9078bfad9f0be482b3364849034deb884fb396b573992575d3f960f06f2c5.jpeg", caption: "Vietnamese Iced Coffee" },
      { src: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/24c5740273f9091ab3f1d7ce373d043d9d0b94c9bf22c3ec141ce9355260caf4.jpeg", caption: "Fresh Bread Rolls" },
    ],
  },

  // Menu section headings — the items themselves live in src/data/menu.js
  menu: {
    navLabel: "Menu", // e.g. "Services", "Pricing", "Programs"
    overline: "The Menu",
    heading: "Simple. Fresh.",
    headingItalic: "Every day.",
    note: "All prices in AUD · Walk-ins welcome",
  },

  reviews: {
    navLabel: "Reviews",
    overline: "What Craigieburn Says",
    sourceLine: "From 1,000+ verified ratings on Uber Eats",
  },

  // Location, hours & contact
  visit: {
    navLabel: "Visit",
    overline: "Find Us",
    heading: "Come say",
    headingItalic: "chào.",
    addressLine1: "Shop 15, 300–332 Grand Blvd",
    addressLine2: "Craigieburn, Victoria 3064",
    addressShort: "Shop 15, 300–332 Grand Blvd, Craigieburn",
    mapQuery: "300-332 Grand Blvd, Shop 15, Craigieburn VIC 3064", // plain address — used to build the Google Maps embed
    hoursDays: "Monday — Sunday",
    hoursTime: "8:00 AM – 5:00 PM",
    hoursNote: "Open 7 days · Come early for the crackle",
    hoursShort: "Open 7 days · 8AM – 5PM",
    hoursNumeric: { open: 8, close: 17, days: [0, 1, 2, 3, 4, 5, 6] }, // live "Open now" badge — remove to hide
  },

  footer: {
    copyrightName: "The Flying Loaf Bakery · Craigieburn",
    tagline: "Baked with pride, every morning",
  },

  faq: {
    navLabel: "FAQ",
    overline: "Good to Know",
    heading: "Questions,",
    headingItalic: "answered.",
    items: [
      { q: "When is the best time to come in?", a: "Everything is baked fresh from open. The midday rush is real — arrive before noon for the full range, especially the Roast Crackle Bánh Mì." },
      { q: "Do you cater for events or bulk orders?", a: "Yes — bread rolls by the half-dozen and platters on request. Drop in or message us a day ahead and we'll have it boxed and ready." },
      { q: "Any vegetarian options?", a: "The Marinated Tofu Roll is a local favourite — 98% loved on Uber Eats. Plus donuts, slices, cakes and pastries." },
      { q: "Can I get delivery?", a: "Absolutely — find us on Uber Eats and we'll bring the bakery to your door." },
    ],
  },

  contactForm: {
    navLabel: "Contact",
    overline: "Say Hello",
    heading: "Get in",
    headingItalic: "touch.",
    note: "Catering enquiry, feedback, or just craving something specific? Send us a message and we'll get back to you.",
    buttonLabel: "Send Message →",
  },
};

// ---- DEMO BRAND SWITCHER ----
// Open the site with ?demo=barber to preview this exact template as a barbershop.
// Add more demo brands in src/config/presets/ and register them below.
const DEMOS = { barber: BARBER };
const demoKey = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("demo") : null;
export const BUSINESS = DEMOS[demoKey] || BAKERY;

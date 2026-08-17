// DEMO BRAND — proves the template transforms per business type.
// View it live by opening the site with ?demo=barber
// (Fictional business for pitching — replace details when sold to a real client.)

const IMG = {
  hero: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/a129214136ba89f6837566c359577649ad8ac037ceb2d678e192f08b945ccf82.jpeg",
  fade: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/cdda0968fdce4fa8fb37d30f327fad245665a4772d90c95e2d7bd200c09f0d83.jpeg",
  shave: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/50131e7b3755727c74a1c79029c39aedf23598347637f8e1240041937dfcb5ea.jpeg",
  tools: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/9e2ff47ad9b04a604bc0027e477f483c5f431679a52681f1d76b35dbd6dd17f1.jpeg",
  beard: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/c805188f275dc8d8bc1c7b929c14f4bce77d21f1fea9365965a6fa000c103cdd.jpeg",
  client: "https://static.prod-images.emergentagent.com/jobs/56967123-c5b5-4dec-b3f2-3cd8cd11d80d/images/71a648d2edd44e3da14370f410d3e67193a6695214744afa80fbc5dc7bcee052.jpeg",
};

export const BARBER = {
  name: "Kings Cut",
  navCtaLabel: "Book Now",
  wordmark: "KINGS CUT",

  theme: {
    cream: "#F2F0EA",
    ink: "#15171C",
    brand: "#C19A3D",
    fontSerif: "Cormorant Garamond",
    fontSans: "Outfit",
    fontMono: "IBM Plex Mono",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@400;500&family=IBM+Plex+Mono:wght@400&display=swap",
  },

  seo: {
    title: "Kings Cut Barber Co. — Fades, Cuts & Hot Towel Shaves, Brunswick",
    description: "Brunswick's sharpest chair. Skin fades, scissor cuts, beard sculpts and traditional hot towel shaves. Book online or walk in — Tue–Sun on Sydney Rd.",
    schemaType: "HairSalon",
  },

  announcement: "Walk-ins welcome weekdays before 11am — or book your chair online",

  features: {
    marquee: true,
    story: true,
    gallery: true,
    menu: true,
    reviews: true,
    visit: true,
    faq: true,
    contactForm: true,
  },

  contact: {
    phone: "(03) 9000 1234",
    email: "bookings@kingscutbarber.com.au",
    socials: [{ label: "Instagram", url: "https://instagram.com" }],
  },

  cta: {
    prompt: "Ready for a sharper you?",
    label: "Book Your Chair →",
    url: "https://www.fresha.com",
    footerHeading: "Book",
    footerLabel: "Book online — takes 30 seconds",
  },

  rating: { score: "4.9", count: "320+ reviews", reviewCount: "320" },

  marquee: ["Precision Fades", "Hot Towel Shaves", "Brunswick's Sharpest", "Walk-Ins Welcome", "Est. Craftsmanship"],

  hero: {
    overline: "Brunswick, Melbourne — Traditional Barbering, Modern Standards",
    titleLine1: "KINGS",
    titleLine2: "CUT",
    titleItalic: "barber co.",
    description: "Precision fades, sculpted beards and hot towel shaves done the traditional way — leather chairs, sharp blades, no rush. This is grooming as it should be.",
    ctaLabel: "See Services",
    image: IMG.hero,
    imageBadge: "Walk-ins & bookings · Tue–Sun",
  },

  story: {
    navLabel: "Our Craft",
    overline: "Our Craft",
    heading: "Three rules of",
    headingItalic: "the chair.",
    chapters: [
      { no: "01", title: "The Cut", img: IMG.fade, text: "Every fade is mapped to your head shape, hairline and how you actually live. We take the time to get the blend right — because a week later is when a great cut proves itself." },
      { no: "02", title: "The Ritual", img: IMG.shave, text: "Hot towels, straight razor, cedarwood oil. The traditional shave isn't nostalgia — it's simply the closest, calmest shave a man can get. Thirty minutes that reset your whole week." },
      { no: "03", title: "The Finish", img: IMG.tools, text: "Sharp tools, honest advice, and product that suits your hair — not whatever's on the shelf. You leave knowing exactly how to keep the cut looking day-one fresh." },
    ],
  },

  gallery: {
    overline: "From the Chair",
    heading: "The work speaks",
    headingItalic: "for itself.",
    photos: [
      { src: IMG.fade, caption: "Skin Fade" },
      { src: IMG.shave, caption: "Hot Towel Shave" },
      { src: IMG.beard, caption: "Beard Sculpt" },
      { src: IMG.client, caption: "The Result" },
      { src: IMG.tools, caption: "The Tools" },
      { src: IMG.hero, caption: "The Shop" },
    ],
  },

  menu: {
    navLabel: "Services",
    overline: "The Services",
    heading: "Sharp. Precise.",
    headingItalic: "Every time.",
    note: "All prices in AUD · Card & cash",
  },
  categories: [
    {
      id: "cuts",
      label: "Cuts",
      note: "All cuts include wash & style",
      items: [
        { name: "Skin Fade", price: "55", tag: "Most Booked", desc: "Zero to blend, mapped to your head shape. Razor finish." },
        { name: "Classic Cut", price: "45", desc: "Clipper and scissor work, styled to finish." },
        { name: "Scissor Cut", price: "50", desc: "Full scissor cut for longer styles." },
        { name: "Buzz Cut", price: "35", desc: "All-over clipper, edged clean." },
        { name: "Kids Cut (U12)", price: "30", desc: "Patient, sharp, and quick." },
      ],
    },
    {
      id: "beard",
      label: "Beard & Shave",
      items: [
        { name: "Hot Towel Shave", price: "60", tag: "The Ritual", desc: "Traditional straight-razor shave with hot towels and cedarwood oil." },
        { name: "Beard Sculpt", price: "35", desc: "Shape, line-up and condition." },
        { name: "Line-Up", price: "25", desc: "Edges and neckline refreshed between cuts." },
      ],
    },
    {
      id: "packages",
      label: "Packages",
      items: [
        { name: "The Full King", price: "95", tag: "Best Value", desc: "Cut, beard sculpt and hot towel finish. The complete reset." },
        { name: "Father & Son", price: "70", desc: "One chair each, side by side." },
      ],
    },
  ],

  reviews: {
    navLabel: "Reviews",
    overline: "What Brunswick Says",
    sourceLine: "From 320+ verified Google reviews",
  },
  testimonials: [
    { quote: "Best fade I've ever had — and I've tried every shop on Sydney Rd.", name: "Marcus T." },
    { quote: "The hot towel shave is worth every cent. Left feeling brand new.", name: "Dave R." },
    { quote: "Finally a barber who listens. Same perfect cut, every single time.", name: "Alex K." },
    { quote: "Took my son for his first proper cut — they made his day.", name: "Sam W." },
    { quote: "Booked online, zero wait, sharpest line-up in the north.", name: "Jordan P." },
    { quote: "The Full King package is my monthly ritual now.", name: "Chris M." },
  ],

  visit: {
    navLabel: "Visit",
    overline: "Find Us",
    heading: "Pull up",
    headingItalic: "a chair.",
    addressLine1: "124 Sydney Rd",
    addressLine2: "Brunswick, Victoria 3056",
    addressShort: "124 Sydney Rd, Brunswick",
    mapQuery: "124 Sydney Rd, Brunswick VIC 3056",
    hoursDays: "Tuesday — Sunday",
    hoursTime: "9:00 AM – 6:00 PM",
    hoursNote: "Closed Mondays · Walk-ins before 11am",
    hoursShort: "Tue–Sun · 9AM – 6PM",
    hoursNumeric: { open: 9, close: 18, days: [0, 2, 3, 4, 5, 6] },
  },

  footer: {
    copyrightName: "Kings Cut Barber Co. · Brunswick",
    tagline: "Stay sharp",
  },

  faq: {
    navLabel: "FAQ",
    overline: "Good to Know",
    heading: "Questions,",
    headingItalic: "answered.",
    items: [
      { q: "Do I need to book?", a: "Bookings guarantee your chair, but walk-ins are welcome — weekdays before 11am you'll rarely wait." },
      { q: "How long does a cut take?", a: "Allow 45 minutes for a fade, an hour for The Full King. We don't rush chairs." },
      { q: "Do you do kids' cuts?", a: "Under-12s are $30, and first-cut certificates are on the house." },
      { q: "What products do you use?", a: "Matte clays, pomades and beard oils we actually rate — all available to take home." },
    ],
  },

  contactForm: {
    navLabel: "Contact",
    overline: "Say G'day",
    heading: "Get in",
    headingItalic: "touch.",
    note: "Group bookings, wedding parties, or a style question before you commit? Message us and we'll sort you out.",
    buttonLabel: "Send Message →",
  },
};

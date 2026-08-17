// Runtime theme + SEO engine — everything is driven by BUSINESS config.
export function applyTheme(business) {
  const { theme, seo } = business;
  const hexToRgb = (hex) => {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
  };
  const root = document.documentElement;
  root.style.setProperty("--cream", hexToRgb(theme.cream));
  root.style.setProperty("--ink", hexToRgb(theme.ink));
  root.style.setProperty("--brand", hexToRgb(theme.brand));
  root.style.setProperty("--font-serif", `'${theme.fontSerif}'`);
  root.style.setProperty("--font-sans", `'${theme.fontSans}'`);
  root.style.setProperty("--font-mono", `'${theme.fontMono}'`);
  if (theme.googleFontsUrl) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = theme.googleFontsUrl;
    document.head.appendChild(link);
  }

  document.title = seo.title;
  const setMeta = (attr, key, content) => {
    let m = document.querySelector(`meta[${attr}="${key}"]`);
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute(attr, key);
      document.head.appendChild(m);
    }
    m.setAttribute("content", content);
  };
  setMeta("name", "description", seo.description);
  setMeta("property", "og:title", seo.title);
  setMeta("property", "og:description", seo.description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:image", business.hero.image);

  // Google structured data (LocalBusiness)
  const ld = {
    "@context": "https://schema.org",
    "@type": seo.schemaType || "LocalBusiness",
    name: business.name,
    description: seo.description,
    image: business.hero.image,
    address: `${business.visit.addressLine1}, ${business.visit.addressLine2}`,
    openingHours: `${business.visit.hoursDays} ${business.visit.hoursTime}`,
  };
  if (business.contact.phone) ld.telephone = business.contact.phone;
  if (business.rating) {
    ld.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.rating.score,
      ratingCount: business.rating.reviewCount,
    };
  }
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.text = JSON.stringify(ld);
  document.head.appendChild(s);

  // FAQ rich results for Google
  if (business.features.faq && business.faq?.items?.length) {
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: business.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(faqLd);
    document.head.appendChild(s2);
  }
}

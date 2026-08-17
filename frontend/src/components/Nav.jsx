import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "../config/business";

// Nav links auto-generate from enabled sections in config/business.js
const links = [
  BUSINESS.features.menu && { label: BUSINESS.menu.navLabel, href: "#menu" },
  BUSINESS.features.story && { label: BUSINESS.story.navLabel, href: "#story" },
  BUSINESS.features.reviews && { label: BUSINESS.reviews.navLabel, href: "#reviews" },
  BUSINESS.features.visit && { label: BUSINESS.visit.navLabel, href: "#visit" },
  BUSINESS.features.faq && { label: BUSINESS.faq.navLabel, href: "#faq" },
  BUSINESS.features.contactForm && { label: BUSINESS.contactForm.navLabel, href: "#contact" },
].filter(Boolean);

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          data-testid="mobile-menu-panel"
          className="fixed inset-0 z-[60] bg-ink text-cream flex flex-col px-8 pt-6 pb-10 md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-bold tracking-tight">{BUSINESS.name}<span className="text-brand">.</span></span>
            <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-cream hover:text-brand transition-colors duration-300">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 mt-14 flex-grow">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="font-serif text-4xl py-3 border-b border-cream/10 hover:text-brand transition-colors duration-300"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40">
            {BUSINESS.visit.addressShort}<br />{BUSINESS.visit.hoursShort}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-500 ${
        scrolled ? "bg-cream/85 border-b border-ink/10" : "bg-cream/50"
      }`}
    >
      {BUSINESS.announcement && (
        <div data-testid="announcement-bar" className="bg-brand text-cream text-center font-mono text-[10px] uppercase tracking-[0.2em] py-2 px-4">
          {BUSINESS.announcement}
        </div>
      )}
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <a href="#top" data-testid="nav-logo" className="font-serif text-lg md:text-xl font-bold tracking-tight text-ink">
          {BUSINESS.name}<span className="text-brand">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70 hover:text-brand transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#visit"
            data-testid="nav-cta"
            className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-ink text-cream px-5 py-2.5 rounded-full hover:bg-brand transition-colors duration-300"
          >
            {BUSINESS.navCtaLabel}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 text-ink hover:text-brand transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
    </>
  );
};

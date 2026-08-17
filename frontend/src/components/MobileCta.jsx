import { useState, useEffect } from "react";
import { BUSINESS } from "../config/business";

export const MobileCta = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!BUSINESS.cta.url) return null;
  return (
    <a
      href={BUSINESS.cta.url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="mobile-cta"
      className={`md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 font-mono text-[11px] uppercase tracking-[0.2em] bg-brand text-cream px-8 py-4 rounded-full shadow-2xl whitespace-nowrap transition-[opacity] duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {BUSINESS.cta.label}
    </a>
  );
};

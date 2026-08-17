import { motion } from "framer-motion";
import { BUSINESS } from "../config/business";
import { OpenBadge } from "./OpenBadge";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export const Visit = () => (
  <section id="visit" data-testid="visit-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">{BUSINESS.visit.overline}</p>
      <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink mb-14 md:mb-20">
        {BUSINESS.visit.heading} <span className="italic font-normal text-brand">{BUSINESS.visit.headingItalic}</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="overflow-hidden border border-ink/10 min-h-[360px]">
        <iframe
          title={`${BUSINESS.name} map`}
          data-testid="visit-map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.visit.mapQuery)}&output=embed`}
          className="w-full h-full min-h-[360px] grayscale-[35%] contrast-[1.05]"
          loading="lazy"
        />
      </motion.div>

      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col justify-between gap-10">
        <div className="space-y-10">
          <div data-testid="visit-address">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mb-3">Address</p>
            <p className="font-serif text-2xl md:text-3xl text-ink leading-snug">
              {BUSINESS.visit.addressLine1}<br />{BUSINESS.visit.addressLine2}
            </p>
          </div>
          <div data-testid="visit-hours">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mb-3">Opening Hours</p>
            <div className="flex items-baseline gap-4 border-b border-ink/10 pb-3">
              <span className="font-serif text-xl text-ink">{BUSINESS.visit.hoursDays}</span>
              <span className="flex-grow border-b border-dotted border-ink/25" />
              <span className="font-mono text-sm text-ink">{BUSINESS.visit.hoursTime}</span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand mt-4">{BUSINESS.visit.hoursNote}</p>
            <div className="mt-4"><OpenBadge /></div>
          </div>
          {(BUSINESS.contact.phone || BUSINESS.contact.email) && (
            <div data-testid="visit-contact">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mb-3">Contact</p>
              {BUSINESS.contact.phone && (
                <a href={`tel:${BUSINESS.contact.phone}`} data-testid="visit-phone" className="block font-serif text-xl md:text-2xl text-ink hover:text-brand transition-colors duration-300">
                  {BUSINESS.contact.phone}
                </a>
              )}
              {BUSINESS.contact.email && (
                <a href={`mailto:${BUSINESS.contact.email}`} data-testid="visit-email" className="block font-serif text-xl md:text-2xl text-ink hover:text-brand transition-colors duration-300 mt-1">
                  {BUSINESS.contact.email}
                </a>
              )}
            </div>
          )}
          {BUSINESS.cta.url && (
            <div data-testid="visit-order">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mb-3">{BUSINESS.cta.prompt}</p>
              <a
                href={BUSINESS.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="visit-cta-link"
                className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] bg-ink text-cream px-7 py-3.5 rounded-full hover:bg-brand transition-colors duration-300"
              >
                {BUSINESS.cta.label}
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  </section>
);

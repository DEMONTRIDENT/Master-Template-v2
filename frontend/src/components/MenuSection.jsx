import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "../data/menu";
import { BUSINESS } from "../config/business";

// Menu items come from BUSINESS.categories (demo brands) or data/menu.js (default)
const MENU_CATEGORIES = BUSINESS.categories || CATEGORIES;

export const MenuSection = () => {
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);
  const cat = MENU_CATEGORIES.find((c) => c.id === active);

  return (
    <section id="menu" data-testid="menu-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">{BUSINESS.menu.overline}</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink">
            {BUSINESS.menu.heading} <span className="italic font-normal text-brand">{BUSINESS.menu.headingItalic}</span>
          </h2>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">{BUSINESS.menu.note}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 md:mb-16" data-testid="menu-tabs">
        {MENU_CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            data-testid={`menu-tab-${c.id}`}
            className={`font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border transition-colors duration-300 ${
              active === c.id
                ? "bg-ink text-cream border-ink"
                : "bg-transparent text-ink/70 border-ink/20 hover:border-brand hover:text-brand"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          data-testid={`menu-list-${active}`}
        >
          {cat.note && <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-8">{cat.note}</p>}
          <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {cat.items.map((item) => (
              <li key={item.name} data-testid="menu-item" className="group py-6 md:py-7 flex items-baseline gap-4 hover:bg-ink/[0.03] transition-colors duration-300 md:px-4 md:-mx-4">
                <div className="flex-shrink-0 max-w-[70%]">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:text-brand transition-colors duration-300">{item.name}</h3>
                    {item.tag && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] bg-brand/10 text-brand px-2.5 py-1 rounded-full">{item.tag}</span>
                    )}
                  </div>
                  {item.desc && <p className="text-ink/55 text-sm leading-relaxed mt-1.5 max-w-md">{item.desc}</p>}
                </div>
                <span className="flex-grow border-b border-dotted border-ink/25 translate-y-[-4px]" />
                <span className="font-mono text-sm md:text-base text-ink flex-shrink-0">${item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

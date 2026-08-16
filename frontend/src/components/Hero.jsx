import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "../data/menu";
import { BUSINESS } from "../config/business";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MaskedLine = ({ children, i, className }) => (
  <span className={`block overflow-hidden ${className || ""}`}>
    <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block will-change-transform">
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen pt-28 md:pt-36 px-6 md:px-12 max-w-[1600px] mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-brand mb-6 md:mb-10"
        data-testid="hero-overline"
      >
        {BUSINESS.hero.overline}
      </motion.p>

      <h1 data-testid="hero-heading" className="font-serif font-black text-ink leading-[0.95] tracking-tight text-[13.5vw] md:text-[9.5vw]">
        <MaskedLine i={0}>{BUSINESS.hero.titleLine1}</MaskedLine>
        <MaskedLine i={1}>
          {BUSINESS.hero.titleLine2} <span className="italic font-normal text-brand">{BUSINESS.hero.titleItalic}</span>
        </MaskedLine>
      </h1>

      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 order-2 md:order-1"
        >
          <p className="text-ink/70 text-sm md:text-base leading-relaxed max-w-sm" data-testid="hero-description">
            {BUSINESS.hero.description}
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#menu"
              data-testid="hero-menu-btn"
              className="font-mono text-[11px] uppercase tracking-[0.2em] bg-brand text-cream px-7 py-3.5 rounded-full hover:bg-ink transition-colors duration-300"
            >
              {BUSINESS.hero.ctaLabel}
            </a>
            {BUSINESS.rating && (
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink" data-testid="hero-rating">
                <span className="text-brand">★</span> {BUSINESS.rating.score} · {BUSINESS.rating.count}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(12% 8% 12% 8%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8 order-1 md:order-2 relative overflow-hidden h-[46vh] md:h-[58vh]"
          data-testid="hero-image-frame"
        >
          <motion.img
            src={BUSINESS.hero.image}
            alt={BUSINESS.name}
            style={{ y: imgY, scale: imgScale }}
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute bottom-4 left-4 bg-cream/90 backdrop-blur-md px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
            {BUSINESS.hero.imageBadge}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

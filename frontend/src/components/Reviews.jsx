import { motion } from "framer-motion";
import { REVIEWS } from "../data/menu";
import { BUSINESS } from "../config/business";

const TESTIMONIALS = BUSINESS.testimonials || REVIEWS;

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export const Reviews = () => (
  <section id="reviews" data-testid="reviews-section" className="bg-ink text-cream py-24 md:py-40">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <motion.div variants={reveal} custom={0} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-6">{BUSINESS.reviews.overline}</p>
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 mb-16 md:mb-24">
          <div data-testid="reviews-rating" className="font-serif font-black text-[26vw] md:text-[13vw] leading-[0.8] tracking-tighter">
            {BUSINESS.rating.score}
          </div>
          <div className="pb-2 md:pb-6">
            <div className="text-brand text-2xl md:text-3xl tracking-[0.2em]">★★★★★</div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50 mt-3">{BUSINESS.reviews.sourceLine}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
        {TESTIMONIALS.map((r, i) => (
          <motion.blockquote
            key={r.name}
            variants={reveal}
            custom={i + 1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            data-testid={`review-card-${i}`}
            className="bg-ink p-8 md:p-10"
          >
            <p className="font-serif text-lg md:text-xl leading-snug">"{r.quote}"</p>
            <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
              — {r.name} <span className="text-brand ml-2">★★★★★</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

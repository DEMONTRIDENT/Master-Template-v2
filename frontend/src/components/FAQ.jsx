import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { BUSINESS } from "../config/business";

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-36">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">{BUSINESS.faq.overline}</p>
      <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink mb-12 md:mb-16">
        {BUSINESS.faq.heading} <span className="italic font-normal text-brand">{BUSINESS.faq.headingItalic}</span>
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl border-t border-ink/10">
        {BUSINESS.faq.items.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-ink/10">
            <AccordionTrigger data-testid={`faq-question-${i}`} className="font-serif text-xl md:text-2xl font-normal text-ink hover:text-brand hover:no-underline text-left py-6 transition-colors duration-300">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-ink/60 text-sm md:text-base leading-relaxed pb-6 max-w-xl">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

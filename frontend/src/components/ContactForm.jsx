import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { BUSINESS } from "../config/business";

const field = "w-full bg-transparent border-b border-cream/25 focus:border-brand outline-none py-3 text-cream placeholder:text-cream/35 transition-colors duration-300";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${BUSINESS.contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app — hit send and we'll get back to you.");
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-ink text-cream py-24 md:py-36 border-b border-cream/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand mb-4">{BUSINESS.contactForm.overline}</p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            {BUSINESS.contactForm.heading} <span className="italic font-normal text-brand">{BUSINESS.contactForm.headingItalic}</span>
          </h2>
          <p className="text-cream/60 text-sm md:text-base leading-relaxed max-w-md">{BUSINESS.contactForm.note}</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
          data-testid="contact-form"
        >
          <input required value={form.name} onChange={set("name")} placeholder="Your name" data-testid="contact-name-input" className={field} />
          <input required type="email" value={form.email} onChange={set("email")} placeholder="Your email" data-testid="contact-email-input" className={field} />
          <textarea required rows={4} value={form.message} onChange={set("message")} placeholder="How can we help?" data-testid="contact-message-input" className={`${field} resize-none`} />
          <button
            type="submit"
            data-testid="contact-submit-btn"
            className="font-mono text-[11px] uppercase tracking-[0.2em] bg-brand text-cream px-8 py-4 rounded-full hover:bg-cream hover:text-ink transition-colors duration-300"
          >
            {BUSINESS.contactForm.buttonLabel}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

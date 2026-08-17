import { BUSINESS } from "../config/business";

// Live "Open Now / Closed" pill — needs visit.hoursNumeric { open, close, days }
export const OpenBadge = ({ dark }) => {
  const h = BUSINESS.visit.hoursNumeric;
  if (!h) return null;
  const now = new Date();
  const open = h.days.includes(now.getDay()) && now.getHours() >= h.open && now.getHours() < h.close;
  return (
    <span
      data-testid="open-badge"
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border ${
        dark ? "border-cream/20 text-cream/80" : "border-ink/15 text-ink/70"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-500" : "bg-red-400"}`} />
      {open ? "Open now" : "Closed now"}
    </span>
  );
};

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-testid="back-to-top"
      className={`hidden md:flex items-center justify-center fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-ink text-cream hover:bg-brand transition-[opacity,background-color] duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
};

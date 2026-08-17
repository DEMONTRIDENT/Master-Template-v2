import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand origin-left z-[70]"
    />
  );
};

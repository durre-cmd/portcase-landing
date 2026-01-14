import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (once = true, amount = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  return { ref, isInView };
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

"use client";

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const { ref, inView } = useInView({
   triggerOnce: false, // Change to false if you want the animation to restart every time it comes into view
 });
  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display drop-shadow-md",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;

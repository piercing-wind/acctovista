"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';


import { cn } from "@/lib/utils";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function SlightFlip({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) {
   const { ref, inView } = useInView({
      triggerOnce: false, // Change to false if you want the animation to restart every time it comes into view
    });
  return (
    <div className="flex flex-wrap justify-center mx-auto pl-1">
      <AnimatePresence mode="wait">
        {word.split(" ").map((word, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
          >
            {word}&nbsp;&nbsp;
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

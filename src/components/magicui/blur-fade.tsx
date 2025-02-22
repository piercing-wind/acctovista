"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { x?: number; y?: number };
    visible: { x?: number; y?: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number | string;
  xOffset?: number | string;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  xOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  direction = "up",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: false, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: yOffset };
      case "down":
        return { x: 0, y: -yOffset };
      case "left":
        return { x: xOffset, y: 0 };
      case "right":
        return { x: -xOffset, y: 0 };
      default:
        return { x: 0, y: yOffset };
    }
  };

  const offset = getOffset();

  const defaultVariants: Variants = {
    hidden: { x: offset.x, y: offset.y, opacity: 0, filter: `blur(${blur})` },
    visible: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
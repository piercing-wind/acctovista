"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';


type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: string;
  classN ?: string
};

export function FadeText({
  direction = "up",
  className,
  classN,
  framerProps = {
    hidden: { opacity: 0, transition:{ delay : 0.4} },
    show: { opacity: 1, transition: { type: "spring", delay:0.4 }},
  },
  text,
}: FadeTextProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 100, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);
  const { ref, inView } = useInView({
   triggerOnce: false, // Change to false if you want the animation to restart every time it comes into view
 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      viewport={{ once: false }}
      variants={FADE_ANIMATION_VARIANTS}
      className={classN}
    >
      <motion.span className={className}>{text}</motion.span>
    </motion.div>
  );
}

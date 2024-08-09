'use client';

import { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SlideImageProps = {
  className?: string;
  classN?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  framerProps?: Variants;
  src: string;
  alt: string;
};

export function SlideImage({
  direction = 'left',
  className,
  framerProps = {
    hidden: { opacity: 0, transition: { delay: 0.4 } },
    show: { opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 0.4 } },
  },
  src,
  classN,
  alt,
}: SlideImageProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 100, down: -100, left: -100, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';

  const SLIDE_ANIMATION_VARIANTS = useMemo(() => {
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
      animate={inView ? 'show' : 'hidden'}
      viewport={{ once: true }}
      variants={SLIDE_ANIMATION_VARIANTS}
      className={classN}
    >
      <motion.img className={className} src={src} alt={alt}/>
    </motion.div>
  );
}
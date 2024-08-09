'use client';

import { easeInOut, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MotionDivProps {
  children: React.ReactNode;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export const MotionDiv = ({
  children,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      y:[0, -20, 0],
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration : 1.5,
        y:{
         yoyo: Infinity,
         ease : easeInOut,
         duration: 1.5
        }
      },
    },
  },
  framerProps = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition:{
      duration: 2,
      ease: easeInOut
    } },
  },
  className,
}: MotionDivProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want the animation to restart every time it comes into view
  });

  return (
    <motion.div
      ref={ref}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      <motion.div variants={framerProps} className='flex w-full'>
        {children}
      </motion.div>
    </motion.div>
  );
};
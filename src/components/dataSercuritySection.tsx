'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DataSecurityComponentProps {
  heading: string;
  listItems: string[];
  delayForContainer: number;
   delayforSpan: number;
}

export const DataSecurityComponent: React.FC<DataSecurityComponentProps> = ({ heading, listItems, delayForContainer, delayforSpan }) => {
  const controls = useAnimation();
  const spanControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
      spanControls.start('hidden');
    }
  }, [controls, spanControls, inView]);

  const spanVariants = {
    hidden: { width: 0 },
    visible: {
      width: '40%',
      transition: { duration: delayforSpan, ease: 'easeInOut' },
    },
  };

  const verticalSpanVariants = {
    hidden: { height: 0 },
    visible: {
      height: '40%',
      transition: { duration: delayforSpan, ease: 'easeInOut' },
    },
  };

  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: delayForContainer , ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="flex-1 p-4 bg-black bg-opacity-25 relative"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={divVariants}
      onAnimationComplete={() => {
        if (inView) {
          spanControls.start('visible');
        }
      }}
    >
      <h1 className="text-lg md:text-xl font-bold brightness-125">
        {heading}
      </h1>
      <ul className="my-8 py-5 flex flex-col gap-5 text-lg font-medium list-disc list-inside">
        {listItems.map((item, index) => (
          <li key={index} className="marker:text-cyan-300">
            {item}
          </li>
        ))}
      </ul>
      <motion.span
        className="h-[4px] w-[40%] flex absolute right-0 bottom-0 bg-cyan-300"
        initial="hidden"
        animate={spanControls}
        variants={spanVariants}
      />
      <motion.span
        className="h-[40%] w-[4px] flex absolute right-0 bottom-0 bg-cyan-300"
        initial="hidden"
        animate={spanControls}
        variants={verticalSpanVariants}
      />
      <motion.span
        className="h-[4px] w-[40%] flex absolute left-0 top-0 bg-cyan-300"
        initial="hidden"
        animate={spanControls}
        variants={spanVariants}
      />
      <motion.span
        className="h-[40%] w-[4px] flex absolute left-0 top-0 bg-cyan-300"
        initial="hidden"
        animate={spanControls}
        variants={verticalSpanVariants}
      />
    </motion.div>
  );
};
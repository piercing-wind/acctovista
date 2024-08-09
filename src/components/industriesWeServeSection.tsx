'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Divider } from './divider';
import { 
   Cpu,
   EarthLock,
   Factory,
   HandPlatter,
   HardHat,
   HeartHandshake,
   Landmark,
   PhoneOutgoing,
   ShieldCheck,
   Store,
   Zap
 } from 'lucide-react';

export const IndustriesWeServeSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to animate every time it comes into view
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const spanVariants = {
    hidden: { width: 0 },
    visible: {
      width: '50%', // Increase the width to 100%
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  const verticalSpanVariants = {
    hidden: { height: 0 },
    visible: {
      height: '40%',
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  return (
      <div className="w-[95%] md:w-[50%] h-full relative flex p-5 flex-col" ref={ref}>
        <h4 className="my-4 text-4xl opacity-80 font-medium">Industries Vary, Needs Differ: Find All Your Solutions Under One Roof</h4>
         <Divider className='mb-0 ml-0 w-[20%] lg:w-[20%]'/>
        <p className='tracking-wide leading-8 my-4 text-xl opacity-75'>At Acctovista, we offer services to help your business solve problems and find new opportunities. We know that every industry has different challenges, but we are here to help with all your needs. Our solutions are easy to use, and we make sure they work well for you. We are committed to building trust by supporting you every step of the way.</p>
        <motion.span
          className="h-[4px] w-[40%] flex absolute right-0 bottom-0 bg-black"
          initial="hidden"
          animate={controls}
          variants={spanVariants}
        />
        <motion.span
          className="h-[40%] w-[4px] flex absolute right-0 bottom-0 bg-black"
          initial="hidden"
          animate={controls}
          variants={verticalSpanVariants}
        />
        <motion.span
          className="h-[4px] w-[40%] flex absolute left-0 top-0 bg-black"
          initial="hidden"
          animate={controls}
          variants={spanVariants}
        />
        <motion.span
          className="h-[40%] w-[4px] flex absolute left-0 top-0 bg-black"
          initial="hidden"
          animate={controls}
          variants={verticalSpanVariants}
        />
      </div>
  );
}


 
 export const AnimatedList = () => {
    const listVariants = {
       hidden: { opacity: 0, y: 20 },
       visible: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: {
           delay: i * 0.2,
         },
       }),
     };
   const { ref, inView } = useInView({
     triggerOnce: false, // Set to false to animate every time it comes into view
     threshold: 0.4, // Adjust as needed
   });
   const items = [
      'Banking and Financial Services',
      'Insurance',
      'Healthcare and Pharmaceuticals',
      'Retail and Consumer Goods',
      'Manufacturing',
      'Information Technology (IT)',
      'Real Estate and Construction',
      'Telecommunications',
      'Energy and Utilities',
      'Professional Service',
    ];

   const icons : JSX.Element[] = [
      <Landmark key="icon-0" className='text-slate-700' />,
      <ShieldCheck key="icon-1" className='text-green-700' />,
      <HeartHandshake key="icon-2" className='text-red-500' />,
      <Store key="icon-3" className='text-amber-900' />,
      <Factory key="icon-4" className='text-blue-400' />,
      <Cpu key="icon-5" className='text-yellow-500' />,
      <HardHat key="icon-6" className='text-orange-500' />,
      <PhoneOutgoing key="icon-7" className='text-neutral-500' />,
      <Zap key="icon-8" className='text-blue-300' />,
      <HandPlatter key="icon-9" className='text-lime-400' />,
    ];
 
   return (<div className='flex flex-col'>
      <h3 className='text-3xl font-extrabold'>Industries we Catered</h3>
     <ul ref={ref} className="mb-10 py-5 flex flex-col gap-5 text-lg sm:text-xl font-medium uppercase opacity-80">
       {items.map((item, index) => (
         <motion.li
           key={item}
           custom={index}
           initial="hidden"
           animate={inView ? 'visible' : 'hidden'}
           variants={listVariants}
           className='flex items-center text-nowrap'
         >
            {icons[index]}
            &nbsp;
            &nbsp;
           {item}
         </motion.li>
       ))}
     </ul>
     </div>
   );
 };
 
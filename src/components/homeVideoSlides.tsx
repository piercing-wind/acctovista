'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plus } from "lucide-react";

export const HomeVideoSlides = () => {
  const textLines = [
    "Struggling with Complex Accounting and Payroll Processes? Streamline Your Operations with Our Expertise.",
    "Concerned About Complex Audits? Enhance Accuracy and Compliance with Our Professional Auditing Services.",
    "Overwhelmed by Tax Regulations and Filing with Strategy? Simplify Your Tax Filing and Strategy with Our Expert Solutions.",
    "Facing Strategic Business Challenges? Optimize Your Leadership with Our Virtual CFO Services.",
    "Facing IT challenges? Achieve seamless business growth with our expert ITES solutions."
  ];
  const links = [
      '/accounting',
      '/auditing-assurance',
      '/taxation',
      '/virtual-cfo',
      '/ites'
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
      setHover(false);
    }, 6000); 

    return () => clearInterval(interval); 
  }, [textLines.length]);

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }} className="w-full h-full flex items-center justify-center lg:px-40">
      <motion.div
        key={currentTextIndex}
        initial={{ y: "100%" }}
        animate={{ y: "30%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1 }}
        style={{ display: "inline-block" }}
        className="w-full h-[80vh] flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-white lg:w-[70%] text-wrap mb-20">{textLines[currentTextIndex]}</h1>
       <div className="flex items-center gap-4">
        <Link href={links[currentTextIndex]} className={`text-white font-2xl font-medium p-2 my-8 border rounded-full flex items-center justify-between w-[10rem] border-yellow-200  bg-opacity-50 ${hover && 'border-yellow-500 text-yellow-500'}`}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         >
            View Service 
         <span className={`p-1 rounded-full bg-yellow-900 ${hover && 'bg-yellow-500 text-white'}`}><Plus size={15}/></span>
        </Link>
        <Link href="/contact" className={`text-neutral-900 font-2xl text-center font-medium p-2 my-8 border rounded-full flex items-center justify-center w-[10rem] bg-yellow-500 ${hover && 'bg-opacity-50 text-neutral-50'}`}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         >
            Request Service
        </Link>
       </div>
      </motion.div>
    </div>
  );
};
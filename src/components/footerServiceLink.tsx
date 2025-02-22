'use client'
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeText } from "@/components/magicui/fade-text";

export const FooterServiceList = () => {
   const ref = useRef(null);
   const inView = useInView(ref, { once: false });

  const link: { [key: string]: string } = {
      '/auditing-assurance/audit': 'Audit',
      '/accounting/bookkeeping': 'Book keeping',
      '/business-setup/business-setup-in-india': 'Business Setup In India',
      '/ites/bpa': 'Business RPA',
      '/ites/robust-data-analytics-ai': 'Data Analytics',
      '/taxation/international-tax': 'International Tax',
      '/ites/it-support': 'IT Support',
      '/accounting/payroll': 'Payroll',
      '/ites/software-development': 'Personalized Software Development',
      '/taxation/tax-planning-consultancy': 'Tax Planning Consultancy',
      '/taxation/tax-preparation-and-compliance': 'Tax Preparation And Compliance',
      '/ites/software-migration': 'Software Migration',
      '/taxation/transfer-pricing': 'Transfer Pricing',
      '/virtual-cfo/cfo': 'Virtual CFO',
   };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 50,
      }, 
    }),
  };

  return (
    <ul className="flex flex-col gap-2 opacity-80" ref={ref}>
      {Object.entries(link).map(([href, text], index) => {
     
        return (
          <motion.li
            key={href}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={listVariants}
          >
            <Link href={href} className="text-nowrap hover:font-semibold">{text}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export const LinkScroll = () => {
   return (
     <button 
     className="mt-6" 
     onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
     >
      <FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay:1 }},
            }} text="View Services" direction="up" className="text-white px-8 brightness-200 text-center p-2 border hover:text-[1.04rem] hover:bg-black"/>
     </button>
   );
 };
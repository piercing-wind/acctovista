'use client'
import Image from "next/image"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const FAQ=({faqData}:{faqData : Array<{question: string, answer: string}>})=>{
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const toggleFAQ = (index: number) => {
     setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="w-full lg:p-5 my-10">
         <div className="w-[95%] lg:w-[80%] mx-auto rounded-md py-4 flex flex-col items-center justify-center"
         style={{boxShadow : '0 0 10px 2px gray'}} >
            <h1 className="text-3xl font-semibold mx-auto mt-4 mb-2 text-center">Frequently Asked Question&apos;s</h1>
            <p className="text-xs">Get Answers to Your Common Questions</p>
            <div className="w-full flex flex-col md:flex-row items-center justify-between my-10">
               <div className="md:w-[60%] mx-2 md:mx-10">
               {faqData.map((faq, index) => (
                 <motion.div
                   key={index}
                   className="mb-4 p-4 border-b border-gray-200"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                 >
                   <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                     <h2 className="text-xl font-medium">{faq.question}</h2>
                     <motion.div
                       initial={{ rotate: 0 }}
                       animate={{ rotate: openIndex === index ? 180 : 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                     </motion.div>
                   </div>
                   {openIndex === index && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       transition={{ duration: 0.5 }}
                       className="overflow-hidden mt-2"
                     >
                       <p>{faq.answer}</p>
                     </motion.div>
                   )}
                 </motion.div>
               ))}
               </div>

               <div className="relative h-[19rem] w-[23rem] md:w-[30rem] mx-4 -mt-4">
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/faq.png"
                  alt="FAQ"
                  fill
                  style={{
                     objectFit: "cover"
                  }}
                  />
               </div>
         </div>

         </div>

      </div>
   )
}
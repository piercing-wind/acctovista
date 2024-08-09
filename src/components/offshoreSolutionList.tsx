'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';


export const OffshoreSolutionList = ({faqs}:{faqs :{question: string, answer : string}[]}) => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   
   const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="mb-4 border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium opacity-90 ">{faq.question}</h3>
              <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
              <Plus />
              </span>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 opacity-80">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
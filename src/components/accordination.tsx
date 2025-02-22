'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export const AddressingNeeds = ({ title, children, className }:{title: string, children : React.ReactNode, className?: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item px-2 lg:px-10">
      <button className={`accordion-title ${className}`} onClick={toggleOpen}>
        {title} 
        {isOpen ?  <Minus/> : <Plus/>}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="accordion-content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// const AccordionGroup = () => (
//   <div className="accordion-group">
//     <AddressingNeeds title="Accordion 1">Content for Accordion 1</AddressingNeeds>
//     <AddressingNeeds title="Accordion 2">Content for Accordion 2</AddressingNeeds>
//     <AddressingNeeds title="Accordion 3">Content for Accordion 3</AddressingNeeds>
//   </div>
// );

// export default AccordionGroup;
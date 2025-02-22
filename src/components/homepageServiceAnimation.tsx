'use client'
import { FadeText } from "@/components/magicui/fade-text";
import { useEffect, useState } from "react";

export const ServiceAnimation = () => {
  const services = [
    'Audit',
    'Book keeping',
    'Business Setup In India',
    'Business RPA',
    'Data Analytics',
    'International Tax',
    'IT Support',
    'Payroll',
    'Personalized Software Development',
    'Tax Planning Consultancy',
    'Tax Preparation And Compliance',
    'Software Migration',
    'Transfer Pricing',
    'Virtual CFO'
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [services.length]);

  return (
    <div>
      <FadeText
        className="text-4xl font-bold"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.5 } },
        }}
        text="l"
        />
        {services[currentServiceIndex]}
    </div>
  );
};
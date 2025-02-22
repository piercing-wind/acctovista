'use client'
import React, { useRef, useEffect, useState } from 'react';
import { EmployeeReviews } from "./employeeReviews";
import CSS from "@/components/header.module.css"
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

export const EmployeeReviewsScroll: React.FC = () => {
  const initialReviews = [
    {
      name: "Priya Sharma",
      position: "Finance Associate",
      quote:
        "Acctovista embraces innovation and values expertise. Continuous learning is part of the journey. The collaborative culture encourages exploring new solutions.",
    },
    {
      name: "Aarav Patel",
      position: "Tax Accountant",
      quote:
        "Acctovista's precision and supportive environment make it ideal for detailed financial work. Professional growth opportunities and team spirit drive our success.",
    },
    {
      name: "Aisha Khan",
      position: "Client Relations Specialist",
      quote:
        "Client satisfaction is core at Acctovista. The client-focused atmosphere is rewarding. Personalized service and strong client relationships are prioritized.",
    },
    {
      name: "Raj Mehta",
      position: "Auditor",
      quote:
        "Acctovista values thoroughness and integrity. It's a stimulating place for an Auditor. The collaborative environment emphasizes professional development.",
    },
    {
      name: "Sneha",
      position: "Tax Consultant",
      quote:
        "Acctovista encourages innovative tax solutions and values creative problem-solving. The positive work culture allows me to provide exceptional tax advice.",
    },
    {
      name: "Arjun Rao",
      position: "Operations Manager",
      quote:
        "Acctovista's focus on optimizing operations creates an efficient and enjoyable environment. The dedication to continuous improvement drives meaningful change.",
    },
    {
      name: "Anubhav Singh",
      position: "ITES Manager",
      quote:
      "Working at Acctovista has been a fantastic experience. The environment encourages innovation and collaboration, which has really helped me grow as a software engineer.",
   },
   {
     name: "Hanisha Arora",
     position: "ITES Associate",
     quote:
       "Acctovista provides a dynamic and supportive atmosphere for data scientists. The focus on cutting-edge technology and professional development is impressive.",
   },

  ];

  const [reviews, setReviews] = useState([...initialReviews]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) { // Adjust the threshold as needed
          setReviews((prevReviews) => [...prevReviews, ...initialReviews]);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
      <div className="relative w-full">
        <div
          className={` ${CSS.scroll_container} flex w-full overflow-x-auto gap-10 p-10`}
          ref={scrollContainerRef}
        >
          {reviews.map((review, index) => (
            <EmployeeReviews
              key={index}
              name={review.name}
              position={review.position}
              quote={review.quote}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className=" p-2 rounded-full mx-2 opacity-85"
            onClick={scrollLeft}
            style={{boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.1)"}}
          >
            <ArrowBigLeftDash />
          </button>
          <button
            className="p-2 rounded-full mx-2 opacity-85"
            onClick={scrollRight}
            style={{boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.1)"}}

          >
           <ArrowBigRightDash />
          </button>
        </div>
      </div>
  );
};

export default EmployeeReviewsScroll;
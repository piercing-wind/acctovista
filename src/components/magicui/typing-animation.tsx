"use client";

import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const { ref, inView } = useInView({
   triggerOnce: false, // Change to false if you want the animation to restart every time it comes into view
 }); 

   // Effect to reset and start the animation whenever the component comes into view
   useEffect(() => {
      if (inView) {
        setDisplayedText("");
        setI(0);
      }
    }, [inView]);
  
 useEffect(() => {
   if (inView) {
     const typingEffect = setInterval(() => {
       if (i < text.length) {
         setDisplayedText(text.substring(0, i + 1));
         setI(i + 1);
       } else {
         clearInterval(typingEffect);
       }
     }, duration);

     return () => {
       clearInterval(typingEffect);
     };
   }
 }, [duration, i, inView, text]);

  return (
    <h1
      ref={ref}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}

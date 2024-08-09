'use client'
import { ChevronRight } from "lucide-react"
import { SheetTrigger } from "./ui/sheet"
import { useEffect, useState } from "react";

export const MenuBarForMobile = () => {
   const [isScrollingUp, setIsScrollingUp] = useState(true);
   let lastScrollTop = 0;
 
   useEffect(() => {
     const handleScroll = () => {
       const scrollTop = window.scrollY || document.documentElement.scrollTop;
       if (scrollTop > lastScrollTop) {
         setIsScrollingUp(false);
       } else {
         setIsScrollingUp(true);
       }
       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
   return (
      <>
      {isScrollingUp && (
         <SheetTrigger>
         <span className="flex h-6 w-24 px-2 pb-1 items-center justify-center rounded-b-2xl bg-black bg-opacity-60 text-base flex-shrink-0 font-medium absolute left-1 -bottom-4 md:hidden">
         Menu <ChevronRight size={20}/>
         </span>
         </SheetTrigger>
      )}
      </>
   )
}
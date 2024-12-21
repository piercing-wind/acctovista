'use client';
import React from "react";
import CSS from "@/components/header.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { About, ServiceDropdown } from "./serviceDropdown";
import { Logo } from "./logo";
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from "@/components/ui/sheet"
import { MenuBarForMobile } from "./menuBarForMobile";
import { usePathname } from 'next/navigation';

export const Header = ({classNameForBg}: {classNameForBg?: string}) => {
   const pathname = usePathname();
   
  return (
    <div className={cn(`flex flex-col xl:flex-row items-center justify-center md:justify-between z-20 bg-opacity-40 backdrop-blur-[1px] bg-black  py-2 md:py-0 relative`, classNameForBg)}
    style={{width: 'inherit'}}
    >
      <div className="w-[80%] xl:w-[35rem] hidden md:flex items-center justify-center h-24 text-lg gap-10 brightness-200"> 
        <Link href={"/whyus"} className={`${CSS.link} ${pathname === '/whyus' && CSS.activeLink}`}>Why Us</Link>
        <Link href={"/stallite-office"} className={`${CSS.link} ${pathname === '/stallite-office' && CSS.activeLink}`}>Satellite Office</Link>
      </div>

      <Logo  />

      <div className="w-[80%] xl:w-[35rem] hidden md:flex items-center justify-center gap-x-10 h-24 text-lg gap-10 brightness-200">
         <ServiceDropdown/>
         <About />
         <Link href={"/blog"} className={`${CSS.link} ${pathname === '/blog' && CSS.activeLink}`}>Blog</Link>
         {/* <Link href={"/careers"} className={`${CSS.link} ${pathname === '/careers' && CSS.activeLink}`}>Careers</Link> */}
         {/* <Link href={"/contact"} className={`${CSS.link} ${pathname === '/contact' && CSS.activeLink}`}>Contact Us</Link> */}
         <Link href="/contact#contactform" className={`text-black text-center font-bold p-2 rounded-full flex items-center justify-center w-[10rem] bg-yellow-500  hover:bg-opacity-90  `}>
            Request Service
        </Link>
      </div>

         <div className="absolute left-2 -bottom-2 md:hidden">
            <Sheet>
               <MenuBarForMobile/>
              <SheetContent className="bg-black bg-opacity-80 text-white font-bold text-lg">
                <SheetHeader className="items-start my-10">
                  <Link href={"/whyus"} className={`${CSS.link}`}>Why Us</Link>
                  <Link href={"/stallite-office"} className={`${CSS.link}`}>Satellite Office</Link>
                  <ServiceDropdown/>
                  <Link href={"/blog"} className={`${CSS.link}`}>Blog</Link>
                  <About />
                  <Link href={"/careers"} className={`${CSS.link}`}>Careers</Link>
                  <Link href={"/contact"} className={`${CSS.link}`}>Contact Us</Link>
                  <Link href="/contact#contactform" className={`text-black text-center font-bold p-2 rounded-full flex items-center justify-center w-[10rem] bg-yellow-500  hover:bg-opacity-90  `}>
                      Request Service
                  </Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
         </div>

    </div>
  );
};

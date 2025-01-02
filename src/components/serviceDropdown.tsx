'use client'
import { useEffect, useRef, useState } from "react";
import CSS from "@/components/header.module.css";
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
import Link from "next/link";


export const ServiceDropdown = ({className}:{className?:string}) => {
   const [isOpen, setIsOpen] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      }
   },[])

   return ( 
      <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild aria-haspopup className="cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
         <span className={`${CSS.link}${className}`} >Services</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent ref={ref} className={`w-72 bg-black bg-opacity-50 text-white text-xs font-semibold border-transparent my-6`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}
      >
        <DropdownMenuLabel className="text-base">Our Outsourcing Portfolio</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
     
          <Link href="/accounting">
            <DropdownMenuItem className={CSS.servicesMenu}>
              <span>Accounting</span>
            </DropdownMenuItem>
          </Link>
         <Link href="/auditing-assurance">
          <DropdownMenuItem className={CSS.servicesMenu}>
            <span>Auditing &amp; Assurance</span>
          </DropdownMenuItem>
         </Link>
         <Link href="/taxation">
          <DropdownMenuItem className={CSS.servicesMenu}>
            <span>Taxation</span>
          </DropdownMenuItem>
         </Link>
         
         <Link href="/virtual-cfo" className="cursor-pointer">
          <DropdownMenuItem className={CSS.servicesMenu}>
            <span>Virtual CFO</span>
          </DropdownMenuItem>
         </Link>
         <Link href="/ites" className="cursor-pointer" title="Information Technology Enabled Services">
          <DropdownMenuItem className={CSS.servicesMenu}>
            <span>ITES</span>
          </DropdownMenuItem>
         </Link>

        </DropdownMenuGroup>
        <DropdownMenuGroup className="mt-2">
         <Link href="/business-setup">
            <DropdownMenuItem className={`py-2 ${CSS.servicesMenu}`}>
              <span>Business Set-Up in India</span>
            </DropdownMenuItem>
         </Link>
         </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
   )
}


export const About = ({className}:{className?:string}) => {
   const [isOpen, setIsOpen] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      }
   },[])
   return ( 
      <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild aria-haspopup className="cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
      >
         <span className={`${CSS.link}${className}`} >About</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent ref={ref} className={`w-56 items-center flex flex-col justify-center bg-black bg-opacity-50 text-white text-xs font-semibold border-transparent my-6`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}
      >
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
     
          <Link href="/about">
            <DropdownMenuItem className={CSS.servicesMenu}>
              <span>About AcctoVista</span>
            </DropdownMenuItem>
          </Link>
         <Link href="/our-team">
          <DropdownMenuItem className={CSS.servicesMenu}>
            <span>Our Team</span>
          </DropdownMenuItem>
         </Link>
        

        </DropdownMenuGroup>
       
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
   )
}
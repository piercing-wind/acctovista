import CSS from "@/components/header.module.css";
import { cn } from "@/lib/utils";

import Image from "next/image"
import Link from "next/link"

export const Logo =({size = 70, className, gap="gap-x-5"}:{size?:number, className?: string, gap?: string})=>{
   return (
      <Link href={"/"}>
      <div
        className="flex flex-col items-center justify-center gap-y-3"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className={`flex items-center justify-center w-[18rem] ${gap}`}>
        <Image
          src="https://d11wbp5a59q34o.cloudfront.net/public/Logo.svg"
          alt="Picture of the logo"
          height={size}
          width={size}
        />
        <div className="mx-2 flex flex-col items-center">
          <h1 className={cn(`flex text-4xl brightness-125 items-center relative`, className )}>
            <span className={`absolute -right-5 top-0 text-xs ${CSS.logoglow}`}>TM</span>
            <span className=" font-medium">ACCTO</span>
            <span className={`text-[#2663c6] font-extrabold`}>VISTA</span>
          </h1>
          <p className={`ml-4 text-thin tracking-[0.8rem] text-xs brightness-200 ${CSS.logoglow}`}>
            CONSULTING
          </p>
        </div>
       </div>
      </div>
      </Link>
   )
}
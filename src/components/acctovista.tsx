"use client";
import { cn } from "@/lib/utils";
import CSS from "./header.module.css";

export const Acctovista = ({
  className,
  tm,
}: {
  className?: string;
  tm?: string;
}) => {
  return (

       <span className="mx-2 flex flex-col items-center"
       style={{ fontFamily: "Montserrat" }}
       >
          {/* Changed h1 to inline-block and removed unnecessary flex properties */}
          <h1 className={`inline-block brightness-125 relative ${className}`}>
            <span className="font-medium">ACCTO</span>
            <span className={`text-[#2663c6] font-extrabold relative`}>
               VISTA
            <span className={cn(`absolute -right-5 top-0 ${CSS.logoglow}`, tm)}>
              TM
            </span>
               </span>
          </h1>
        </span>
  );
};

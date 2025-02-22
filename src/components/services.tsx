import React from 'react';
import Image from "next/image";
import { Divider } from "./divider";
import { ArrowUpRightIcon } from "lucide-react";
import CSS from "@/app/services/services.module.css";
import Link from 'next/link';
import { FadeText } from './magicui/fade-text';
import BlurFade from "@/components/magicui/blur-fade";
import { SlideImage } from './slideImage';
interface Flag {
   country: string;
   src: string;
 }

export const Services = ({ title, text1, link , img, alt, flags }: { title: string, text1: string, link: string, img : string , alt : string, flags?: Flag[]}) => {

  return (
    <div className={` md:flex 2xl:w-[100%] items-center justify-center rounded overflow-hidden relative transition-transform duration-500 ease-in-out md:p-4`}
    >
    <BlurFade delay={0.5} inView className='h-[16rem] md:h-[30rem] md:w-[50%]'>
      <div className="h-full w-full overflow-hidden relative rounded-lg"
        style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
      >
        <Image
          src={img}
          alt={alt}
          fill
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>
      </BlurFade>
      <div className="md:w-[45%] hover lg:h-[30rem] mt-14 lg:mt-0 flex-grow flex flex-col self-end backdrop-blur-lg tracking-normal items-start justify-center lg:px-10">
        <FadeText direction='right' classN="mx-4 text-black text-3xl opacity-90 font-semibold my-3" className='opacity-90' text={title} framerProps={{
        hidden: { opacity: 0, transition:{ delay : 1} },
        show: { opacity: 1, transition: { type: "spring", delay:1 }},
      }}/>
      <div className='flex mx-4 gap-x-2'>
      {flags?.map((flag, index) => (
          <div key={index} className='flex justify-center items-center gap-x-1 flex-wrap'>
             <SlideImage direction='right' className='opacity-90 text h-4 w-7 flex-shrink-0 max-w-7' src={flag.src} alt="Switzer land" framerProps={{
                hidden: { opacity: 0, transition:{ delay : 1} },
                show: { opacity: 1, transition: { type: "spring", delay: index * 0.25 + 1}},
              }}/>
             <FadeText direction='right' classN="" className='opacity-90 text-xs' text={flag.country} framerProps={{
                hidden: { opacity: 0, transition:{ delay : 1} },
                show: { opacity: 1, transition: { type: "spring", delay: index * 0.25 + 1}},
              }}/>
          </div>
          ))}

      </div>
        <FadeText direction='right' classN="mx-4 opacity-90 my-8 text-[1rem]" className='opacity-75 tracking-wide' text={text1} framerProps={{
        hidden: { opacity: 0, transition:{ delay : 1} },
        show: { opacity: 1, transition: { type: "spring", delay:1 }},
          }}/>
    
         <Link href={link} className='my-8'>
         <FadeText direction='right' classN="mx-4 text-[1rem] mx-4 rounded-3xl border px-4 py-2 text-center bg-slate-900 hover:bg-slate-800 text-white font-extrabold" className='tracking-wide py-2' text='Continue Reading' framerProps={{
            hidden: { opacity: 0, transition:{ delay : 1} },
            show: { opacity: 1, transition: { type: "spring", delay:1 }},
          }}/>
         </Link>
      </div>
    </div>
  );
}
export const ServicesRight = ({ title, text1, link , img, alt , flags}: { title: string, text1: string, link: string, img : string , alt : string, flags?: Flag[]}) => {

  return (
   <div className={` md:flex 2xl:w-[100%] items-center justify-center rounded overflow-hidden relative transition-transform duration-500 ease-in-out md:p-4`}
   >
   <BlurFade delay={0.5} inView className='h-[16rem] md:h-[30rem] md:w-[50%] md:hidden'>
     <div className="h-full w-full overflow-hidden relative rounded-lg"
       style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
     >
       <Image
         src={img}
         alt={alt}
         fill
         style={{
           objectFit: "cover",
           zIndex: -1,
         }}
       />
     </div>
     </BlurFade>
     <div className="md:w-[45%] hover lg:h-[30rem] mt-14 lg:mt-0 flex-grow flex flex-col self-end backdrop-blur-lg tracking-normal items-start justify-center lg:px-10">
       <FadeText direction='right' classN="mx-4 text-black text-3xl opacity-90 font-semibold my-3" className='opacity-90' text={title} framerProps={{
       hidden: { opacity: 0, transition:{ delay : 1} },
       show: { opacity: 1, transition: { type: "spring", delay:1 }},
     }}/>
     <div className='flex mx-4 gap-x-2'>
     {flags?.map((flag, index) => (
         <div key={index} className='flex justify-center items-center gap-x-1 flex-wrap'>
            <SlideImage direction='right' className='opacity-90 text h-4 w-7 flex-shrink-0 max-w-7' src={flag.src} alt="Switzer land" framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay: index * 0.25 + 1}},
             }}/>
            <FadeText direction='right' classN="" className='opacity-90 text-xs' text={flag.country} framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay: index * 0.25 + 1}},
             }}/>
         </div>
         ))}

     </div>
       <FadeText direction='right' classN="mx-4 opacity-90 my-8 text-[1rem]" className='opacity-75 tracking-wide' text={text1} framerProps={{
       hidden: { opacity: 0, transition:{ delay : 1} },
       show: { opacity: 1, transition: { type: "spring", delay:1 }},
         }}/>
   
        <Link href={link} className='my-8'>
        <FadeText direction='right' classN="mx-4 text-[1rem] mx-4 rounded-3xl border px-4 py-2 text-center bg-slate-900 hover:bg-slate-800 text-white font-extrabold" className='tracking-wide py-2' text='Continue Reading' framerProps={{
           hidden: { opacity: 0, transition:{ delay : 1} },
           show: { opacity: 1, transition: { type: "spring", delay:1 }},
         }}/>
        </Link>
     </div>
     <BlurFade delay={0.5} inView className='h-[20rem] md:h-[30rem] md:w-[50%] hidden md:block'>
     <div className="h-full w-full overflow-hidden relative rounded-lg"
       style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
     >
       <Image
         src={img}
         alt={alt}
         fill
         style={{
           objectFit: "cover",
           zIndex: -1,
         }}
       />
     </div>
     </BlurFade>
   </div>
  );
}
import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import CareerForm from "./contact";

export default function Page() {
      return (
         <>
         <div className="w-full overflow-x-hidden flex flex-col justify-center h-screen items-center relative ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/contact.mp4" type="video/mp4" />
        </video>
        <FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 0.5} },
               show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
            }} text="Connect with Us" direction="up" classN="flex items-center justify-center leading-9" className="text-3xl mx-auto lg:text-5xl font-semibold text-white lg:px-8 brightness-200 text-center "/>
      </div>

      <div className="w-[95%] md:w-[70%] mx-auto">
            <CareerForm/>
      </div>
      </>);
}
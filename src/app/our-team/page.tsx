import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { TeamChart } from "@/components/our-team";

const Page=()=>{
   return(
   <>
      <div className="w-full overflow-x-hidden flex flex-col justify-center h-[60vh] lg:h-screen items-center relative ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/out-team.mp4" type="video/mp4" />
        </video>
        <FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 0.5} },
               show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
            }} text="Meet Our Expert Team" classN="flex items-center justify-center" className="text-3xl mx-auto lg:text-5xl font-semibold text-white lg:px-8 brightness-200 text-center "/>
      </div>
      <div className=" flex flex-col items-center w-full">


{/* ********************************************** */}

            <TeamChart/>
      </div> 
   </>
)
}
export default Page;
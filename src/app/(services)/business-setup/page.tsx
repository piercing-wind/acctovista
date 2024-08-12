import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services } from "@/components/services";

const Page=()=>{
   return(
      <>
      <div className="w-full flex flex-col justify-center h-screen items-center relative bg-black bg-opacity-5">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/services/business-setup.mp4" type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center">
        <FadeText framerProps={{
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Business Set-Up in India" direction="up" className="text-5xl font-semibold text-white brightness-200 text-center mx-auto"/>
         </div>
      </div>

      <div className="w-[95%] mx-auto my-20 md:p-5 gap-10 flex flex-wrap justify-center items-center"> 
         <Services 
            title="Business Setup In India"
            text1="Setting up business in India is game-changing for foreign multinationals due to its booming economy, expected to become the third-largest globally by 2030. The country's youthful demographic, with over 65% of the population under 35, creates a dynamic market for consumer goods and services. Moreover, India's favorable FDI policies, competitive labour costs, and strategic initiatives like 'Make in India' drive high returns on investment and significant profit generation for foreign companies."
            link="/business-setup/business-setup-in-india"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/BusinessSetupinIndia.jpg"
            alt="Business SetUp"
          />
      
      </div>

      </>
   )
   
}
export default Page;
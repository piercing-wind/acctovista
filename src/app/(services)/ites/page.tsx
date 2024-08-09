import { Divider } from "@/components/divider";
import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services, ServicesRight } from "@/components/services";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

const Page=()=>{
   const flags=[
      {country : "US", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg"}, 
      {country : "CA", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Canada.png"}, 
      {country : "UK", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Kingdom.png"}, 
      {country : "AU", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Australia.webp"}, 
      {country : "IN", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_India.png"}
   ]
   return(
      <>
      <div className="w-full flex flex-col justify-center h-screen items-center relative bg-black bg-opacity-5 ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/services/ites.mp4" type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center ">
        <FadeText framerProps={{
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Our Information Technology Enabled Services" direction="up" className="text-5xl font-semibold text-white brightness-200 text-center mx-auto "/>
         </div>
      </div>

      <div className="w-[95%] mx-auto my-20 lg:p-5 gap-10 flex flex-wrap justify-center items-center"> 
         <Services 
            title="Business RPA"
            text1="Manual processes bring challenges such as inefficiencies, errors, and scalability issues, leading to higher costs and delayed decision-making. AcctoVista's business automation services transform these processes into efficient workflows, increasing accuracy, supporting scalability, and providing real-time insights. This leads to better decision-making, compliance, and significant cost savings."
            link="/ites/bpa"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/RPA.jpg"
            alt="B P A"
            flags={flags}
          />
          <div className="w-full my-10"/>
         <ServicesRight 
            title="Robust Data Analytics with AI"
            text1="Leverage the power of AI with Acctovista’s advanced data analytics to unlock actionable insights and drive strategic decisions. Our AI-driven solutions automate data processing, predict future trends, and uncover hidden patterns, enhancing your business intelligence. With real-time analysis and personalized recommendations, we help you stay ahead of the competition and optimize operations."
            link="/ites/robust-data-analytics-ai"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/DataAnalytics.jpg"
            alt="Data Analytics"
            flags={flags}
          />
          <div className="w-full my-10"/>
         <Services 
            title="Personalized Software Development"
            text1="At AcctoVista, we specialize in Personalized Software Development, crafting unique solutions tailored to your specific business needs. Our team of expert developers designs and builds custom software that seamlessly integrates with your existing systems and processes. By focusing on your unique requirements, we ensure that our solutions enhance efficiency, drive growth, and provide a competitive edge. With our personalized approach, we deliver software that truly aligns with your business goals and adapts to your evolving needs."
            link="/ites/software-development"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/SoftwareServices.jpg"
            alt="Personalized Software Development"
            flags={flags}
          />
          <div className="w-full my-10"/>
         <ServicesRight 
            title="IT Support Services"
            text1="At AcctoVista, we empower businesses with innovative IT support services that drive growth and efficiency. Our skilled professionals deliver tailored solutions, from remote support to cybersecurity, to meet your unique needs. We focus on maximizing your technology investments, providing reliable and responsive support every step of the way. Choose AcctoVista for unparalleled IT support that aligns with your business goals."
            link="/ites/it-support"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/IT-Support-Services.jpg"
            alt="IT Support Services"
            flags={flags}
          />
          <div className="w-full my-10"/>
          <Services 
            title="Software Migration"
            text1="Unlock expert financial planning and cash flow management with Virtual CFO services. Gain strategic insights to drive growth, accurate financial reporting, and budget analysis. Benefit from risk management and tailored solutions that help navigate financial complexities. Make informed decisions with proactive guidance. Experience the advantages of a dedicated CFO without the full-time cost."
            link="/ites/software-migration"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/SoftwareMigration.jpg"
            alt="Software Migration"
            flags={flags}
          />
      
      </div>

      </>
   )
   
}
export default Page;
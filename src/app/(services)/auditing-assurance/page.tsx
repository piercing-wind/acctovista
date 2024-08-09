import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services } from "@/components/services";

const Page=()=>{
   const flags =[{country : "US", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg"}]
   return(
      <>
      <div className="w-full flex flex-col justify-center h-screen items-center relative bg-black bg-opacity-20 ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/services/audit-assurance.mp4" type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center">
        <FadeText framerProps={{
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Our Auditing And Assurance Services" direction="up" className="text-5xl font-semibold text-white brightness-200 text-center mx-auto"/>
         </div>
      </div>

      <div className="w-[95%] mx-auto my-20 lg:p-5 gap-10 flex flex-wrap justify-center items-center"> 
         <Services 
            title="Auditing & Assurance Services"
            text1="CPA firms face increasing pressures to deliver exceptional audit services while managing rising costs and complexities. Acctvoista emerges as a strategic partner, offering a robust portfolio of audit solutions designed to enhance your firm's capabilities. By leveraging our expertise and cutting-edge technology, we empower you to focus on core competencies while we handle the intricacies of the audit process."
            link="/auditing-assurance/audit"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/Audit.jpg"
            alt="Aduting & Assurance"
            flags={flags}
          />
      
      </div>

      </>
   )
   
}
export default Page;
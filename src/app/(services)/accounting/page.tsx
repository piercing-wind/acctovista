import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services, ServicesRight } from "@/components/services";

const Page=()=>{
   const flags=[{country : "US", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg"}, {country : "CA", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Canada.png"}, {country : "UK", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Kingdom.png"}, {country : "AU", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Australia.webp"}, {country : "UAE", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Arab_Emirates.png"}, {country : "CH", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Switzerland.webp"}, {country : "DE", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Germany.png"}, {country : "NZ", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_New_Zealand.webp"}]
  
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
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/services/accounting.mp4" type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center">
        <FadeText framerProps={{
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Our Accounting Services" direction="up" className="text-5xl font-semibold text-white brightness-200 text-center mx-auto"/>
         </div>
      </div>

      <div className="w-[95%] mx-auto my-20 lg:p-5 gap-10 flex flex-wrap justify-center items-center"> 
         <Services 
            title="Book Keeping & Financial Reporting"
            text1="Empower your business with AcctoVista's accounting expertise. We offer a wide range of services, including bookkeeping, financial reporting, and strategic financial planning. Our team of skilled accountants is dedicated to providing exceptional service and support. We utilize the latest accounting software and industry best practices to ensure accuracy and efficiency."
            link="/accounting/bookkeeping"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/bookkeeping.jpg"
            alt="Virtual CFO"
            flags={flags}
          />
          <div className="w-full my-10"/>
         <ServicesRight 
            title="Payroll Services"
            text1="Streamline your operations with AcctoVista’s expert payroll services. We offer a full suite of payroll solutions, from processing wages and ensuring tax compliance to managing employee benefits. Our dedicated team uses advanced payroll systems and industry best practices to deliver accurate, timely, and efficient service, allowing you to focus on growing your business."
            link="/accounting/payroll"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/payrollAccouting.jpg"
            alt="Virtual CFO"
            flags={flags}
          />
      </div>

      </>
   )
   
}
export default Page;
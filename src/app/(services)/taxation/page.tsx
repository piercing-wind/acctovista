import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services, ServicesRight } from "@/components/services";

const Page=()=>{
   const flags=[
      {country : "US", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg"}, 
      {country : "CA", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Canada.png"}, 
      {country : "UK", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Kingdom.png"}, 
      {country : "AU", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Australia.webp"}, 
      {country : "UAE", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Arab_Emirates.png"}, 
      {country : "CH", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Switzerland.webp"}, 
      {country : "DE", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Germany.png"}, 
      {country : "NZ", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_New_Zealand.webp"},
      {country : "IN", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_India.png"}
   ]
   const flagForInternationalTax=[
      {country : "US", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg"}, 
      {country : "CA", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Canada.png"}, 
      {country : "UK", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Kingdom.png"}, 
      {country : "AU", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Australia.webp"}, 
      {country : "IN", src : "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_India.png"}
   ]

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
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/services/taxation.mp4" type="video/mp4" />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center">
        <FadeText framerProps={{
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Our Taxation Services" direction="up" className="text-5xl font-semibold text-white brightness-200 text-center mx-auto"/>
         </div>
      </div>

      <div className="w-[95%] mx-auto my-20 lg:p-5 gap-10 flex flex-wrap justify-center items-center"> 
         <Services 
            title="Tax Preparation And Compliance"
            text1="Inaccurate and untimely tax filings can lead to costly penalties and compliance issues. At AcctoVista, we ensure precision and timeliness in every tax filing, addressing potential issues before they arise. Our expert team handles your tax reporting needs meticulously, providing reliable and efficient solutions that keep your business compliant and financially secure."
            link="/taxation/tax-preparation-and-compliance"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/TaxFiling.jpg"
            alt="Tax Preparation And Compliance"
            flags={flags}
          />
          <div className="my-10"/>
         <ServicesRight 
            title="Tax Planning And Consultancy"
            text1="Tax planning is essential for optimizing financial efficiency and minimizing liabilities. Effective tax strategies can significantly impact your bottom line, ensuring you pay only what is necessary while taking advantage of available benefits. AcctoVista helps you navigate these complexities with tailored solutions that align with your financial goals. We ensure strategic planning that adapts to changing regulations and business needs, maximizing your tax efficiency and compliance."
            link="/taxation/tax-planning-consultancy"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/TaxPlanning.jpg"
            alt="Tax Planning Consultancy"
            flags={flags}
          />
          <div className="my-10"/>
         <Services 
            title="International Taxation Advisory"
            text1="Our comprehensive suite of international taxation services is designed to tackle the complexities of global tax compliance and strategy. We offer tailored solutions to address cross-border tax challenges, ensure regulatory adherence, and optimize your global tax structures. With a focus on accuracy and strategic insight, we support your international business operations effectively."
            link="/taxation/international-tax"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/InternationalTax.jpg"
            alt="International Taxation Advisory"
            flags={flagForInternationalTax}
          />
          <div className="my-10"/>
         <ServicesRight 
            title="Transfer Pricing"
            text1="Transfer pricing is key for regulatory compliance and financial efficiency. AcctoVista provides full-service support, from documentation and compliance to planning, benchmarking, audits, and dispute resolution. We tackle complex regulations and documentation challenges, optimize pricing strategies, and manage disputes to ensure timely compliance and improved financial performance."
            link="/taxation/transfer-pricing"
            img="https://d11wbp5a59q34o.cloudfront.net/public/services/TransferPricing.jpg"
            alt="Transfer Pricing"
            flags={flagForInternationalTax}
          />
      
      </div>

      </>
   )
   
}
export default Page;
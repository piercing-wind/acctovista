import { Divider } from "@/components/divider";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import { FadeText } from "@/components/magicui/fade-text";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import ProblemSolutionsFAQ from "@/components/problemsolutionFAQ";
import { TeamSnapshot } from "@/components/tramsnapshot";
import { ContactUs } from "@/components/contactus";
import { FAQ } from "@/components/faq";
import { ServiceNavigator } from "@/components/serviceNavigator";

const Page = ()=>{
   const challenges = [
      {
        title: "Navigating India’s Regulatory Maze",
        problem: "Navigating India’s intricate regulatory and compliance landscape can be overwhelming and time-consuming.",
        solution: "AcctoVista provides expert guidance on Indian business laws, assists with regulatory approvals, and ensures adherence to local compliance requirements."
      },
      {
        title: "Choosing the Right Business Entity",
        problem: "Choosing the right type of business entity and understanding its implications can be confusing.",
        solution: "We offer detailed advisory on selecting the most suitable business entity type, such as private limited companies or joint ventures, tailored to your business objectives."
      },
      {
        title: "Crafting an Effective Market Entry Plan",
        problem: "Developing an effective market entry strategy requires deep insights into local market conditions and consumer behavior.",
        solution: "AcctoVista conducts comprehensive market research and analysis to craft a robust entry strategy, identifying growth opportunities and potential challenges."
      },
      {
        title: "Mastering Taxation and Compliance",
        problem: "Understanding and complying with India's complex tax regulations, including GST and income tax, can be daunting.",
        solution: "Our team provides expert advice on tax structuring, ensures GST registration and compliance, and offers ongoing support for tax-related matters."
      },
      {
        title: "Securing Funding and Financial Planning",
        problem: "Securing funding and managing financial planning in a new market can be challenging.",
        solution: "AcctoVista assists with financial planning, identifies funding options, and provides support in raising capital to ensure a smooth financial setup."
      },
      {
        title: "Setting Up Accounting and Bookkeeping Systems",
        problem: "Setting up efficient accounting and bookkeeping systems in accordance with local standards can be intricate.",
        solution: "We help establish robust accounting systems, manage bookkeeping tasks, and ensure compliance with Indian accounting regulations."
      },
      {
        title: "Recruiting and Managing Talent",
        problem: "Recruiting and managing local talent, along with establishing HR policies, can be difficult for foreign companies.",
        solution: "AcctoVista supports recruitment, provides HR policy development, and manages payroll and compliance to streamline human resource functions."
      },
      {
        title: "Implementing Technology Solutions",
        problem: "Implementing and maintaining technology systems, and ensuring cybersecurity can be complex.",
        solution: "Our IT professionals assist with the implementation of business software, provide ongoing technical support, and ensure data protection."
      },
      {
        title: "Navigating Customs and Trade Procedures",
        problem: "Navigating import-export regulations and customs procedures can be cumbersome.",
        solution: "AcctoVista offers guidance on customs clearance, trade documentation, and compliance with import-export regulations to facilitate smooth trade operations."
      }
    ];
   const spanTexts = [
      { value: 15, text: 'Number of Client Partnered With Us' },
      { value: 10000000, text: 'FDI Introduced in India',preUnit : '$' },
      { value: 25, text: 'Profit Increased', unit: '%' },
    ];
    const faqData = [
      {
        question: "What are the ways to enter into India for business?",
        answer: "Businesses can enter the Indian market through various methods, including establishing a wholly owned subsidiary, forming a joint venture with an Indian partner, setting up a branch office, or entering via a franchise model. Each method has different legal and regulatory requirements."
      },
      {
        question: "What are the tax benefits available to new entrants in India?",
        answer: "New entrants can benefit from various tax incentives such as reduced corporate tax rates for certain sectors, tax holidays, and deductions for investments in specific regions or industries. The government also offers incentives for manufacturing and technology sectors."
      },
      {
        question: "Where is 100% Foreign Direct Investment (FDI) allowed in India?",
        answer: "100% FDI is permitted in several sectors, including information technology, pharmaceuticals, biotechnology, and manufacturing. However, certain sectors such as retail and defense have specific guidelines and conditions for FDI."
      },
      {
        question: "What are the indirect taxes applicable in India?",
        answer: "Indirect taxes in India include Goods and Services Tax (GST), which is a comprehensive indirect tax covering the supply of goods and services. Other indirect taxes include customs duties on imports and excise duties on certain goods."
      },
      {
        question: "What is required to open a new company in India?",
        answer: "To open a new company, you need to register the business with the Registrar of Companies (RoC), obtain a Permanent Account Number (PAN), secure Goods and Services Tax (GST) registration, and comply with local regulatory requirements. Additional permits may be needed based on the industry."
      },
      {
        question: "Why should India be preferred over other South East Asian countries for business?",
        answer: "India offers a large and growing market, a young and skilled workforce, favorable government policies, and significant opportunities in sectors like technology and manufacturing. Its robust legal framework and economic stability make it a compelling choice compared to other South East Asian countries."
      },
      {
        question: "How many new companies have invested in India in 2024?",
        answer: "In 2024, India has attracted substantial foreign investment, with over 1,200 new companies entering the market. This influx reflects the country’s growing appeal due to its robust economic growth, market potential, and favorable investment climate. For the most accurate and up-to-date figures, consult recent reports from the Ministry of Commerce and Industry or investment agencies."
      }
    ];

   return (
      <>
         <div className="w-full flex flex-col justify-center h-[30vh] items-center relative bg-black bg-opacity-60">
            <Header classNameForBg="text-white fixed top-0" />
            <Image
               src={'https://d11wbp5a59q34o.cloudfront.net/public/services/services.jpg'}
               alt="Data Analytics"
               fill
               style={{
                  objectFit: "cover",
                  zIndex: -1,
               }}

            />
            <div className="w-[95%] lg:w-[80%] mx-auto flex justify-start items-start absolute bottom-4 left-4 ">
               <FadeText framerProps={{
                  hidden: { opacity: 0, transition: { delay: 0.5 } },
                  show: { opacity: 1, transition: { type: "spring", delay: 0.5 } },
               }} text="Business Setup In India" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
               />
            </div>
         </div>
         <div className="w-[90%] flex mx-auto gap-5">
            <div className="w-[100%] my-10 py-10 flex flex-col">
               <BlurFade delay={0.5} inView className='h-[16rem] md:h-[30rem] lg:w-[100%]'>
                  <div className="h-full w-full overflow-hidden relative rounded-lg"
                     style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
                  >
                     <Image
                        src='https://d11wbp5a59q34o.cloudfront.net/public/services/BusinessSetupinIndia.jpg'
                        alt="Business Setup In India"
                        fill
                        style={{
                           objectFit: "cover",
                           zIndex: -1,
                        }}
                     />
                  </div>
               </BlurFade>
               <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-normal">AcctoVista: Your Partner for Effortless Business Expansion into India</h1>
               <Divider className="mb-8 ml-0 lg:w-[20%]" />
               <h2 className="text-2xl font-bold opacity-85 mb-6">Business Setup In India Services Includes:</h2>
               <ul className="pl-5 opacity-80 flex flex-col gap-3">
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />India Entry Strategy</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Selection of Business Entity Type</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Business Registration and Incorporation</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Legal and Regulatory Advisory</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Taxation Advisory and Compliance</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Financial Advisory and Funding</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Accounting and Bookkeeping</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Business Process Outsourcing (BPO)</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Technology and IT Support</li>
                  <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600" />Customs and Trade Advisory</li>
               </ul>

            </div>
            <ServiceNavigator />
         </div>
         <Divider className="lg:w-[80%] mx-auto" />
         <div className="px-2 md:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
         >
            <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista&apos;s Indian Partnership Works?</h1>
            <ProblemSolutionsFAQ challenges={challenges} />
         </div>
         <div className="my-20" />
         <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length} />

         <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-2xl my-4 mb-10 opacity-90">Industries We Catered</h2>
               <div className="flex gap-5 flex-col md:flex-row">
                  <div className="flex flex-col items-center">
                     <h3 className="mb-5 font-semibold text-lg opacity-80">Healthcare</h3>
                     <div className="relative h-[10rem] w-[20rem] rounded-lg overflow-hidden">
                       <Image
                          src="https://d11wbp5a59q34o.cloudfront.net/public/services/healthcare.jpg"
                          alt="Heatlh Care"
                          fill
                          style={{
                             objectFit: "cover",
                          }}
                          className="hover:scale-105 transition-transform duration-700"
                       />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <h3 className="mb-5 font-semibold text-lg opacity-80">E Commerce</h3>
                     <div className="relative h-[10rem] w-[20rem] rounded-lg overflow-hidden">
                       <Image
                          src="https://d11wbp5a59q34o.cloudfront.net/public/services/ecommerce-industry.jpeg"
                          alt="Heatlh Care"
                          fill
                          style={{
                             objectFit: "cover",
                          }}
                          className="hover:scale-105 transition-transform duration-700"
                       />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <h3 className="mb-5 font-semibold text-lg opacity-80">Technology</h3>
                     <div className="relative h-[10rem] w-[20rem] rounded-lg overflow-hidden border">
                       <Image
                          src="https://d11wbp5a59q34o.cloudfront.net/public/services/technology.jpg"
                          alt="Heatlh Care"
                          fill
                          style={{
                             objectFit: "contain",
                          }}
                          className="hover:scale-105 transition-transform duration-700"
                       />
                     </div>
                  </div>
               </div>         
         </div>
         <Divider className="mt-24 mb-0"/>
         <ContactUs />
         <FAQ faqData={faqData} />
      </>
   )
}
export default Page;
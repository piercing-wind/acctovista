import { AddressingNeeds } from "@/components/accordination";
import { Divider, DividerPlain } from "@/components/divider";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import { FadeText } from "@/components/magicui/fade-text";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";

import { BiConfused } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { SoftwareMarque } from "@/components/softwaresLogoMarque";
import { TeamSnapshot } from "@/components/tramsnapshot";
import { ContactUs } from "@/components/contactus";
import { FAQ } from "@/components/faq";
import ProblemSolutionsFAQ from "@/components/problemsolutionFAQ";
import { ServiceNavigator } from "@/components/serviceNavigator";

const Page = ()=>{
   const faqData = [
      {
        question: "What is offered by AcctoVista in tax filing services?",
        answer: "AcctoVista offers a comprehensive range of tax filing services, including personal and corporate tax returns, VAT/GST filings, sales tax filings, excise tax returns, property tax returns, tax credit and incentive claims, expatriate tax filing, estate and trust tax returns, partnership tax returns, and indirect tax filings. We ensure accurate and timely submissions to meet all your tax compliance needs."
      },
      {
        question: "How effectively does AcctoVista meet tax filing deadlines?",
        answer: "AcctoVista manages deadlines proactively through automated reminders and efficient workflows, ensuring that all tax filings are completed on time and avoiding potential penalties."
      },
      {
        question: "How will AcctoVista provide tax filing services?",
        answer: "We provide tax filing services through a streamlined process that includes gathering and analyzing necessary information, preparing and reviewing tax returns, and ensuring compliance with regulatory requirements. Our team utilizes advanced technology and best practices to deliver accurate and efficient services."
      },
      {
        question: "How efficient is AcctoVista in handling tax filings?",
        answer: "AcctoVista is highly efficient in handling tax filings due to our use of advanced software, expert knowledge, and well-established processes. We focus on accuracy and speed, ensuring that all tax filings are processed efficiently and without delay."
      },
      {
        question: "How experienced is AcctoVista’s team in tax filing?",
        answer: "Our team consists of experienced tax professionals with extensive knowledge of tax regulations and filing requirements. We stay updated with the latest changes in tax laws to provide expert guidance and ensure high-quality service."
      },
      {
        question: "How does AcctoVista achieve cost reduction in tax filing services?",
        answer: "AcctoVista achieves cost reduction by leveraging advanced technology and streamlined processes that enhance efficiency and minimize manual work. This approach allows us to offer cost-effective solutions while maintaining high-quality tax filing services."
      },
      {
        question: "Does tax filing include tax planning?",
        answer: "For individual tax returns, AcctoVista’s tax filing services include tax planning. We provide strategic advice to optimize tax outcomes and ensure that you benefit from available tax credits and deductions."
      }
    ];

    const images = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Netsuite.svg', alt: 'Net Suite', width: '20rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/CCH_Tax.svg', alt: 'Zoho', width: '10rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Ultratax.svg', alt: 'Bill', width: '12rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/CCH_Axcess.svg', alt: 'Bill', width: '10rem', height: '9rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Drake.svg', alt: 'Bill', width: '20rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Proconnect.svg', alt: 'Bill', width: '20rem', height: '10rem' },
    ];
    const spanTexts = [
      { value: 1520, text: 'Individual Tax Returns' },
      { value: 1220, text: 'Corporate Tax Returns' },
      { value: 410, text: 'Expatriate Tax Returns' },
      { value: 570, text: 'Partnership Tax Returns' },
      { value: 300, text: 'Eastate and Trust Tax Returns' },
      { value: 2270, text: 'Sales Tax Filings' },
      { value: 750, text: 'VAT/GST Filings' },
      { value: 7000, text: 'Tax Compliance Reviews' },
      { value: 50, text: 'Cost Reduction', unit :'%' },
    ];
    const challenges = [
      {
        title: "Navigating Complex Tax Regulations",
        problem: "Keeping up with evolving tax regulations and ensuring compliance can be challenging for businesses.",
        solution: "AcctoVista leverages advanced software and expertise to ensure compliance with the latest regulations."
      },
      {
        title: "Managing Filing Deadlines",
        problem: "Meeting multiple tax filing deadlines can be stressful and lead to penalties if not handled properly.",
        solution: "AcctoVista manages deadlines proactively with automated reminders and efficient workflows."
      },
      {
        title: "Handling Complex Tax Scenarios",
        problem: "Complex tax situations, such as international tax issues or intricate indirect tax rules, can be difficult to manage.",
        solution: "AcctoVista’s experts deliver tailored solutions for complex tax scenarios, guaranteeing accurate filings."
      },
      {
        title: "Ensuring Data Accuracy",
        problem: "Inaccurate data can lead to errors in tax filings and potential compliance issues.",
        solution: "AcctoVista uses rigorous validation processes and technology to ensure accurate data and compliance."
      },
      {
        title: "Streamlining Documentation",
        problem: "Gathering and organizing tax documentation can be time-consuming and cumbersome.",
        solution: "AcctoVista leverages digital tools to collect and organize documents efficiently, simplifying the process."
      }
    ];
   return(
      <>
       <div className="w-full flex flex-col justify-center h-[30vh] items-center relative bg-black bg-opacity-60">
         <Header classNameForBg="text-white fixed top-0"/>
         <Image
            src={'https://d11wbp5a59q34o.cloudfront.net/public/services/services.jpg'}
            alt="Bookking Main Page"
            fill
            style={{
               objectFit: "cover",
               zIndex: -1,
            }}
         
        />
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-start items-start absolute bottom-4 left-4 ">
          <FadeText framerProps={{
             hidden: { opacity: 0, transition:{ delay : 0.5} },
             show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
           }} text="Tax Preparation And Compliance" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
           />
         </div>
      </div>
      <div className="w-[90%] flex mx-auto  gap-5">
       <div className="w-[100%] my-10 py-10 flex flex-col">
          <BlurFade delay={0.5} inView className='h-[16rem] md:h-[30rem] lg:w-[100%]'>
          <div className="h-full w-full overflow-hidden relative rounded-lg"
            style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
          >
            <Image
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/TaxFiling.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Clear and Efficient Tax Filing: Tailored Solutions for Optimal Compliance and Timely Submission</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Tax Preparation &amp; Compliance Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, we streamline your tax filing process with our comprehensive suite of services:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Personal Tax Returns</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Corporate Tax Returns</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> VAT/GST Filings</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Sales Tax Filings</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Excise Tax Returns</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Property Tax Returns</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Credit and Incentive Claims</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Compliance Reviews</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Expatriate Tax Filing</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Estate and Trust Tax Returns</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Partnership Tax Returns</li>
         </ul>
         
       </div>

               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
       >
         <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Ensures Smooth and Timely Filing of Taxes?</h1>
          <ProblemSolutionsFAQ challenges={challenges} />
        </div>

        <div className="my-20">
         <h1 className="mx-20 pb-2 text-2xl font-semibold opacity-90">Key Software</h1>
         <Divider className="w-[20%] lg:w-[10%] mx-20 mb-8"/>
         <SoftwareMarque images={images} className="mx-10"/>
        </div>
        {/* <DividerPlain className=" w-[95%] mb-0"/> */}
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>

      </>
   )
}
export default Page;
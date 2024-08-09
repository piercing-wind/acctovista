import { AddressingNeeds } from "@/components/accordination";
import { Divider, DividerPlain } from "@/components/divider";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import { FadeText } from "@/components/magicui/fade-text";
import { CircleChevronRight } from "lucide-react";
import { BiConfused } from "react-icons/bi";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";
import { SoftwareMarque } from "@/components/softwaresLogoMarque";
import { TeamSnapshot } from "@/components/tramsnapshot";
import { Chat } from "@/components/icons";
import { MotionDiv } from "@/components/motiondiv";
import { ContactUs } from "@/components/contactus";
import { FAQ } from "@/components/faq";
import ProblemSolutionsFAQ from "@/components/problemsolutionFAQ";
import { ServiceNavigator } from "@/components/serviceNavigator";

const Page = ()=>{
   const faqData = [
      {
        question: "What services does AcctoVista offer?",
        answer: "AcctoVista provides a comprehensive suite of accounting services, including data entry, accounts receivable and payable, bank reconciliation, general ledger maintenance, finalization of accounts, financial statement preparation, and analysis."
      },
      {
        question: "Why should I consider outsourcing my accounting needs to AcctoVista?",
        answer: "Outsourcing to AcctoVista allows you to leverage our expertise and technology while focusing on your core business activities. It also provides access to skilled professionals and advanced tools, ensuring high-quality service and compliance with industry standards."
      },
      {
        question: "How does AcctoVista deliver its accounting services?",
        answer: "We deliver services through a combination of advanced technology and experienced professionals. Our team uses state-of-the-art software and best practices to ensure accurate and timely execution of accounting tasks."
      },
      {
        question: "How efficient are AcctoVista’s services?",
        answer: "AcctoVista is committed to efficiency through automation and streamlined processes. Our use of advanced technology enhances productivity, reduces errors, and speeds up task completion, ensuring prompt and accurate results."
      },
      {
        question: "What is the level of experience of AcctoVista’s team?",
        answer: "Our team consists of highly skilled and experienced accounting professionals who stay updated with the latest industry practices and regulations. Their expertise ensures high-quality service and effective management of your accounting needs."
      },
      {
        question: "How does AcctoVista achieve cost reduction?",
        answer: "AcctoVista achieves cost reduction by leveraging technology to automate routine tasks, reducing the need for extensive in-house resources. This efficiency translates to lower operational costs, which benefits our clients through more affordable service options."
      }
    ];
    const images = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Intuit_QuickBooks_logo.svg', alt: 'QuickBooks', width: 273, height: 70 },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Logo-Bill-Full-Color.svg', alt: 'Bill', width: 120, height: 70 },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/microsoft-dynamics-365-logo.svg', alt: 'Microsoft Dynamics 365', width: 300, height: 70 },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Xero_software_logo.svg', alt: 'Xero', width: 70, height: 70 },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/zoho-logo-web.svg', alt: 'Zoho', width: 160, height: 70 },
    ];
    const spanTexts = [
      { value: 40, text: 'Books Keeping Clients' },
      { value: 1800, text: 'Financial Statement Reviews' },
      { value: 1600, text: 'Bank Reconciliation' },
      { value: 1750, text: 'Financial Statement Preparation' },
      { value: 50000, text: 'Payable / Receivable Managed' },
      { value: 45, text: 'Cost Reduction', unit: '%' },
    ];
    const challenges = [
      {
        title: "Automation for Efficiency and Accuracy",
        problem: "Manual data entry, reconciliations, and payroll calculations can be time-consuming and prone to errors.",
        solution: "AcctoVista uses advanced automation to streamline routine tasks, reducing errors and boosting efficiency. Simplifying operations for faster and more accurate results."
      },
      {
        title: "Ensuring Data Accuracy and Integrity",
        problem: "Ensuring data accuracy is crucial, but human error can lead to mistakes with significant consequences.",
        solution: "AcctoVista enhances data accuracy and minimizes errors by streamlining the process. This approach safeguards the integrity of your financial information."
      },
      {
        title: "Safeguarding Against Fraud and Security Risks",
        problem: "Protecting sensitive financial data from unauthorized access and fraud is a constant concern.",
        solution: "We implement robust security measures to protect sensitive financial information. This ensures that your data remains secure from potential threats and breaches."
      },
      {
        title: "Expanding Operational Scalability",
        problem: "Growing businesses often face challenges in scaling their bookkeeping operations to meet increased demands.",
        solution: "AcctoVista provides flexible and scalable solutions to efficiently handle increased workload. This adaptability supports your business’s expansion."
      },
      {
        title: "Enhancing Focus on Core Competencies",
        problem: "Accountants may struggle to focus on higher-value activities due to the demands of routine bookkeeping.",
        solution: "AcctoVista by automating routine tasks allows accountants to concentrate on strategic activities. This promotes greater productivity and strategic growth."
      },
      {
        title: "Keeping Up with Evolving Regulations",
        problem: "Accounting standards are constantly evolving, requiring continuous updates and compliance efforts.",
        solution: "AcctoVista offers experienced professionals who stay current with regulations and best practices, ensuring your operations remain compliant and aligned with standards."
      },
      {
        title: "Books to Financial Statements",
        problem: "Transitioning from bookkeeping to financial statements can be complex, leading to errors and delays.",
        solution: "AcctoVista streamlines this process with advanced technology and expert oversight, ensuring accurate, timely, and compliant financial reporting."
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
         }} text="Book keeping & Financial Reporting" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
         />
         </div>
      </div>
      <div className="w-[90%] flex mx-auto  gap-5">
       <div className="w-[100%] my-10 py-10 flex flex-col">
          <BlurFade delay={0.5} inView className='h-[16rem] lg:h-[30rem] lg:w-[100%]'>
          <div className="h-full w-full overflow-hidden relative rounded-lg"
            style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
          >
            <Image
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/bookkeeping.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-3xl lg:text-4xl my-8 font-extrabold opacity-85 leading-snug lg:leading-relaxed">Expert Book Keeping and Financial Reporting: Precision in every Ledger, Insight in every Report</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Outsourced Book Keeping &amp; Financial Reporting Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, empower your business with our accounting expertise and innovative solutions. We offer the following services:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Data Entry</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Accounts Receivable</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Accounts Payable</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Bank Reconciliation</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> General Ledger Maintenance</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Finalization of Accounts</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Financial Statements Preparation</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Financial Statements Review and Analysis</li>
         </ul>
         
       </div>
      <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
       >
        <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Address Your Needs</h1>

         <ProblemSolutionsFAQ challenges={challenges}/>
        </div>

        <div className="my-20">
         <h1 className="mx-20 pb-2 text-2xl font-semibold opacity-90">Key Software</h1>
         <Divider className="w-[20%] lg:w-[10%] mx-20 mb-8"/>
         <SoftwareMarque images={images}/>
        </div>
        {/* <DividerPlain className=" w-[95%] mb-0"/> */}
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={6}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>

      </>
   )
}
export default Page;
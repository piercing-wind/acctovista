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
import { ContactUs } from "@/components/contactus";
import { FAQ } from "@/components/faq";
import ProblemSolutionsFAQ from "@/components/problemsolutionFAQ";
import { ServiceNavigator } from "@/components/serviceNavigator";

const Page = ()=>{
   const faqData = [
      {
         question: "What services does AcctoVista offer in Audit and Assurance?",
         answer: "AcctoVista provides comprehensive Audit and Assurance services, including financial audits, not-for-profit audits, reviews, compilations, agreed-upon procedures, government audits, and 401(k) audits. Our aim is to ensure the accuracy, integrity, and reliability of your financial information."
       },
       {
         question: "Why should I consider Outsourcing Audit and Assurance services?",
         answer: "Outsourcing your Audit and Assurance needs to AcctoVista allows you to leverage our expertise and experience, ensuring thorough and unbiased assessments. It helps in reducing the burden on your internal team, providing access to specialized skills and up-to-date knowledge of regulations and standards."
       },
       {
         question: "How does AcctoVista Provide Audit and Assurance services?",
         answer: "AcctoVista delivers Audit and Assurance services through a structured approach that includes planning, risk assessment, execution, and reporting. We use advanced audit tools and methodologies to conduct thorough and efficient audits, ensuring compliance and accurate reporting."
       },
       {
         question: "How does AcctoVista Perform Complex Audits?",
         answer: "For complex audits, AcctoVista employs a team of specialized auditors with expertise in various industries and complex financial systems. We use advanced analytical tools and techniques to handle intricate audit requirements, ensuring comprehensive and detailed assessments."
       },
       {
         question: "How efficient is AcctoVista’s Audit and Assurance service?",
         answer: "Our Audit and Assurance services are highly efficient, thanks to our use of advanced audit software and streamlined processes. We ensure the timely completion of audits with minimal disruption to your operations, providing clear and actionable insights."
       },
       {
         question: "What is AcctoVista’s approach to each Audit?",
         answer: "AcctoVista follows a systematic approach to each audit, starting with understanding your business and its unique risks. We then plan and execute the audit using a risk-based methodology, ensuring thorough coverage and compliance. Finally, we provide detailed reports and actionable recommendations."
       },
       {
         question: "What is the experience level of AcctoVista’s Audit team?",
         answer: "AcctoVista’s audit team comprises experienced professionals with extensive backgrounds in finance, accounting, and auditing. Our team members hold relevant certifications and stay current with the latest industry standards and regulatory changes, ensuring high-quality audit services."
       },
       {
         question: "How does AcctoVista achieve Cost Reduction in Audit and Assurance services?",
         answer: "AcctoVista achieves cost reduction by utilizing efficient audit processes and advanced technologies that minimize the time and resources required for audits. Our expertise allows us to identify potential cost savings and improvements in your financial processes, further reducing overall expenses."
       }
     ];

    const images = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/AdvanceFlow.svg', alt: 'AdvanceFlow', width: '25rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/caseware.svg', alt: 'Zoho', width: '25rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/CCH_Audit.svg', alt: 'Bill', width: '25rem', height: '10rem' },
    ];
    const spanTexts = [
      { value: 200, text: 'Financial Audits' },
      { value: 220, text: 'NFP Audits' },
      { value: 30, text: 'Single Audits' },
      { value: 70, text: 'Government Audits' },
      { value: 300, text: 'Reviews' },
      { value: 270, text: 'Compilations' },
      { value: 150, text: 'Agreed Upon Procedures' },
      { value: 250, text: '401k Audit' },
      { value: 50, text: 'Cost Reduction', unit :'%' },
    ];
    const challenges = [
      {
        title: "Navigating Complexity with Expertise",
        problem: "Regulatory changes and evolving business models complicate audits. Additionally, finding skilled and experienced auditors is challenging.",
        solution: "AcctoVista offers skilled professionals to ensure your audits meet regulatory standards and complex requirements, maintaining compliance and high audit quality."
      },
      {
        title: "Meeting Deadlines and Exceeding Expectations",
        problem: "Tight deadlines and increased audit workloads can impact audit quality, while rising client expectations demand more value-added services.",
        solution: "AcctoVista delivers cost-effective solutions and streamlined processes to handle time pressures, ensuring high-quality audits on time and meeting client expectations."
      },
      {
        title: "Harnessing Data and Mitigating Fraud Risks",
        problem: "The increasing volume of data and the complexity of identifying and assessing fraud risks can overwhelm internal resources.",
        solution: "AcctoVista’s advanced technology and expertise enhance data analysis and fraud detection, ensuring accurate audits and effective fraud risk mitigation."
      },
      {
        title: "Reducing Costs Without Compromising Quality",
        problem: "Rising operational costs and the need to manage expenses without compromising quality.",
        solution: "AcctoVista’s cost-effective solutions cut operational expenses while preserving high-quality audit services, reducing costs and maintaining quality."
      },
      {
        title: "Focusing on Strategic Initiatives",
        problem: "Balancing routine tasks with strategic initiatives can reduce overall efficiency.",
        solution: "Delegate routine tasks to AcctoVista experts, freeing your team to focus on high-value strategic initiatives, and enhancing efficiency and effectiveness."
      },
      {
        title: "Adapting to Workload Fluctuations",
        problem: "Managing fluctuating workloads can be challenging.",
        solution: "AcctoVista’s scalable service model adapts to your firm’s changing needs. This allows you to scale with flexibility and ease."
      },
      {
        title: "Ensuring Robust Data Security",
        problem: "Protecting sensitive client information is critical and challenging.",
        solution: "Benefit from AcctoVista’s robust security measures to safeguard sensitive data. This enhances data security and protects client information."
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
         }} text="Auditing & Assurance Services" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/Audit.jpg'
              alt="Auditing "
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Clarity Through Audit: Insightful Assurance Services for Transparent Financial Practices</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Auditing &amp; Assurance Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, elevate your business with our Specialized Auditing and Assurance Expertise. We offer the following services:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> For Profit Audits (Financial Audits)</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Not For Profit Audits (NFP Audits)</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Single Audits</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> 401K Audits</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Fund Audits</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Governmental Audit</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Reviews</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Compilations</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Agreed-Upon Procedures</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Compliance Audits</li>
         </ul>
         
       </div>
               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
       >
             <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Enhances Audit Efficiency and Excellence? </h1>

             <ProblemSolutionsFAQ challenges={challenges} />
        </div>

        <div className="my-20">
         <h1 className="mx-20 pb-2 text-2xl font-semibold opacity-90">Key Software</h1>
         <Divider className="w-[20%] lg:w-[10%] mx-20 mb-8"/>
         <SoftwareMarque images={images}/>
        </div>
        {/* <DividerPlain className=" w-[95%] mb-0"/> */}
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>

      </>
   )
}
export default Page;
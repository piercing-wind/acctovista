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
        question: "What transfer pricing services are offered by AcctoVista?",
        answer: "We provide a comprehensive range of transfer pricing services, including documentation, compliance, planning, benchmarking, audits, dispute resolution, and managing MAP proceedings."
      },
      {
        question: "Why should you outsource transfer pricing to AcctoVista?",
        answer: "Outsourcing transfer pricing to AcctoVista ensures expert handling of complex regulations, accurate documentation, and strategic pricing, all while reducing compliance risks and optimizing financial efficiency."
      },
      {
        question: "How does AcctoVista provide transfer pricing services?",
        answer: "We follow OECD guidelines and employ advanced methodologies to prepare comprehensive transfer pricing reports. Our services include detailed analyses, benchmarking studies, compliance with regional regulations, and up-to-date advisory on OECD’s Pillar 1 & 2 updates."
      },
      {
        question: "Which regions are covered by AcctoVista’s transfer pricing services?",
        answer: "We provide transfer pricing services for entities operating in the USA, UK, Australia, Canada, and India, ensuring compliance with regional regulations and international standards."
      },
      {
        question: "What are the various transfer pricing reports prepared by AcctoVista?",
        answer: "We prepare master files, local files, country-by-country reports, and other customized reports tailored to meet specific regulatory requirements of different regions."
      },
      {
        question: "What is the MAP procedure and how does AcctoVista assist?",
        answer: "The Mutual Agreement Procedure (MAP) is a mechanism to resolve disputes arising from double taxation. AcctoVista manages MAP proceedings, presenting accurate ALP computations and negotiating with tax authorities to achieve favorable outcomes."
      },
      {
        question: "How experienced is the AcctoVista team?",
        answer: "Our team consists of highly skilled professionals with extensive experience in global transfer pricing, ensuring that our clients receive expert advice and solutions tailored to their unique needs."
      },
      {
        question: "How does AcctoVista help in preparing and implementing transfer pricing policies?",
        answer: "AcctoVista helps by developing tailored transfer pricing policies through thorough business analysis and benchmarking studies, ensuring compliance with OECD guidelines and regional regulations. We create detailed documentation, provide training, integrate policies with financial systems, and offer continuous monitoring to maintain effective implementation and adapt to regulatory changes."
      },
      {
        question: "How is cost reduction achieved with AcctoVista’s transfer pricing services?",
        answer: "By outsourcing to AcctoVista, you benefit from our efficient processes, expert handling of complex issues, and strategic pricing solutions, all of which contribute to significant cost savings and enhanced compliance."
      },
      {
        question: "Do we follow OECD updates on Pillar 1 & 2 related to transfer pricing?",
        answer: "Yes, AcctoVista closely follows and incorporates OECD updates on Pillar 1 & 2 into our transfer pricing services, ensuring our clients remain compliant with the latest international tax standards."
      }
    ];

    const spanTexts = [
      { value: 50, text: 'Local File Preparation'},
      { value: 30, text: 'Master File Preparation'},
      { value: 20, text: 'Assistance in Dispute Resolution'},
      { value: 50, text: 'Benchmarking Studies'},
      { value: 5, text: 'Transfer Pricing Policy Across MNE'},
      { value: 40, text: 'Cost Reduction', unit :"%"},
   ];
   const challenges = [
      {
        title: "Simplifying Complex Transfer Pricing Regulations",
        problem: "Navigating intricate transfer pricing regulations can be overwhelming.",
        solution: "AcctoVista’s experts streamline compliance by providing clear, actionable guidance and ensuring your transfer pricing practices meet all regulatory requirements."
      },
      {
        title: "Ensuring Accurate and Timely Documentation",
        problem: "Preparing comprehensive and accurate transfer pricing documentation is time-consuming and prone to errors.",
        solution: "AcctoVista leverages advanced tools and expertise to produce precise documentation promptly, reducing errors and ensuring timely compliance."
      },
      {
        title: "Optimizing Transfer Pricing Strategies",
        problem: "Developing effective transfer pricing strategies can be challenging and requires careful analysis.",
        solution: "Our team provides strategic insights and tailored solutions to optimize intercompany pricing and minimize tax liabilities."
      },
      {
        title: "Handling Transfer Pricing Disputes Efficiently",
        problem: "Resolving disputes with tax authorities can be complex and disruptive.",
        solution: "AcctoVista offers expert assistance in managing and resolving transfer pricing disputes, helping you navigate negotiations, and maintain compliance."
      },
      {
        title: "Mutual Agreement Procedure (MAP)",
        problem: "Certain Transfer Pricing professionals don’t engage in MAP Proceedings.",
        solution: "AcctoVista can assist you in managing MAP proceedings and presenting your ALP computations effectively before tax authorities."
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
           }} text="Transfer Pricing" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
           />
         </div>
      </div>
      <div className="w-[90%] flex mx-auto  gap-5">
       <div className="w-[100%] my-10 py-10 flex flex-col">
          <BlurFade delay={0.5} inView className=' h-[16rem] md:h-[30rem] lg:w-[100%]'>
          <div className="h-full w-full overflow-hidden relative rounded-lg"
            style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
          >
            <Image
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/TransferPricing.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Balancing Compliance and Profitability through Expert Transfer Pricing</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Transfer Pricing Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, we specialize in providing comprehensive transfer pricing solutions to ensure compliance with global regulations and optimize your intercompany transactions:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Local File Preparation</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Master File Preparation</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Country-by-Country Reporting</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Benchmarking Studies</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Implementation of Transfer Pricing Policy Across &nbsp;<span title="MultiNational Enterprises">MNE</span></li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Assistance in Dispute Resolution</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Mutual Agreement Procedure (MAP) Limited to Indian Jurisdiction</li>
         </ul>
       </div>

               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white mb-20"
       >
         <h1 className="text-3xl md:text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Transforms Your Transfer Pricing Experience?</h1>
          <ProblemSolutionsFAQ challenges={challenges} />
        </div>

        {/* <DividerPlain className=" w-[95%] mb-0"/> */}
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>

      </>
   )
}
export default Page;
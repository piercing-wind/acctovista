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
        question: "What Is Offered by AcctoVista in Tax Planning Services?",
        answer: "AcctoVista provides Comprehensive Tax Planning Services designed to Optimize your Tax Position and Minimize Liabilities. Our offerings include Strategic Tax Planning, Risk Management, Compliance Checks, and Customized Solutions to ensure Efficient Tax Strategies that align with your Financial Goals."
      },
      {
        question: "Why Is Tax Planning Important?",
        answer: "Tax Planning is Crucial for Reducing Tax Liabilities, Maximizing Deductions, and Ensuring Compliance with Current Regulations. It helps optimize financial decisions, improve cash flow, and prevent costly tax errors."
      },
      {
        question: "How Does AcctoVista Achieve Its Tax Planning Goals?",
        answer: "We achieve our Tax Planning Goals by Leveraging In-Depth Knowledge of Tax Laws, Employing Advanced Planning Techniques, and Providing Tailored Strategies based on Individual or Business Needs. Our approach includes Detailed Analysis, Proactive Recommendations, and Ongoing Adjustments to adapt to Regulatory Changes."
      },
      {
        question: "What Are Some Examples of Tax Planning Strategies?",
        answer: "Examples of Tax Planning Strategies include Deferring Income to Lower Tax Brackets, Utilizing Tax-Advantaged Accounts, Maximizing Deductions and Credits, and Structuring Investments to Optimize Tax Efficiency. We also advise on Strategic Timing of Transactions and Income Recognition."
      },
      {
        question: "How Experienced Is Your Team in Tax Planning?",
        answer: "Our Team comprises Highly Experienced Tax Professionals with Extensive Knowledge in Various Tax Regulations and Planning Techniques. We have a Proven Track Record of Delivering Effective Tax Strategies and Solutions tailored to Diverse Client Needs."
      },
      {
        question: "What Is Tax Avoidance and How Is It Different from Tax Evasion?",
        answer: "Tax Avoidance involves using Legal Methods and Strategies to Minimize Tax Liabilities through Careful Planning and Compliance with Tax Laws. It is distinct from Tax Evasion, which is Illegal and involves Deliberately Falsifying Information or Concealing Income to Avoid Paying Taxes."
      }
    ];

    const spanTexts = [
      { value: 1000000, text: 'Tax Saved-Personal', preUnit : '$' },
      { value: 10000000, text: 'Tax Saved-Corporate', preUnit : '$' },
      { value: 500000, text: 'Tax Saved-Capital Gain', preUnit : '$' },
      { value: 30, text: 'Average Tax Saved', unit :'%' },
    ];
    
    const challenges = [
      {
        title: "Strategic Tax Planning",
        problem: "Inefficient tax planning can lead to missed savings opportunities and compliance challenges.",
        solution: "AcctoVista offers strategic tax planning strategies to minimize liabilities and maximize savings, ensuring your tax strategy aligns with your business objectives."
      },
      {
        title: "Compliance Management",
        problem: "Non-compliance with tax regulations can result in penalties and operational disruptions.",
        solution: "We provide comprehensive compliance management services, ensuring adherence to tax laws and regulations to mitigate risks and maintain operational continuity."
      },
      {
        title: "Tax Efficiency Strategies",
        problem: "Ineffective tax efficiency strategies can impact profitability and financial performance.",
        solution: "AcctoVista implements tailored tax efficiency measures to optimize your financial outcomes and improve overall profitability."
      },
      {
        title: "Transaction Advisory",
        problem: "Inadequate tax advice during transactions can lead to unforeseen tax implications.",
        solution: "We offer transaction advisory services to provide tax insights and planning throughout mergers, acquisitions, and other business transactions."
      },
      {
        title: "Tax Risk Assessment",
        problem: "Undetected tax risks can expose your business to financial liabilities and compliance issues.",
        solution: "We conduct thorough tax risk assessments to identify potential exposures and develop mitigation strategies to safeguard your business."
      },
      {
        title: "Tax Due Diligence",
        problem: "Incomplete tax due diligence can lead to undisclosed tax liabilities post-transaction.",
        solution: "AcctoVista performs rigorous tax due diligence to uncover potential risks and ensure comprehensive tax transparency during mergers, acquisitions, or restructuring activities."
      },
      {
        title: "Taxation Technology Solutions",
        problem: "Outdated tax technology and security vulnerabilities can compromise data integrity and operational efficiency.",
        solution: "We implement advanced tax technology solutions to streamline processes, enhance data security, and optimize tax management capabilities."
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
           }} text="Tax Planning Consultancy" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/TaxPlanning.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Tax Planning for Everyone: Tailored Solutions for Individuals, Businesses, and Organizations</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Tax Planning Consultancy Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, we deliver strategic tax planning services to optimize your tax position and enhance financial efficiency. Our Strategic Services Includes:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Personal Income Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Corporate Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Estate and Gift Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Capital Gains and Retirement Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> International and Expatriate Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Credits and Incentives Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> VAT/GST Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Risk Management and Compliance</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Real Estate Tax Planning</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Merger and Acquisition (M&A) Tax Planning</li>
         </ul>
         
       </div>

               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white mb-20"
       >
         <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista’s Tax Planning Deliver Superior Results?</h1>
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
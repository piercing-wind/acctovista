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
        question: "What is offered by AcctoVista for International Taxation?",
        answer: "AcctoVista provides a comprehensive range of international taxation services, including determining tax residence, managing foreign tax credits, advising on permanent establishment and withholding taxes, ascertaining capital gains liabilities, and creating tax-efficient structures. We also offer specialized advisory for digital nomads."
      },
      {
        question: "Why should you outsource international tax advisory to AcctoVista?",
        answer: "Outsourcing international tax advisory to AcctoVista ensures access to specialized expertise and strategic insights that simplify complex global tax issues, ensure compliance, and optimize tax strategies. Our experienced team helps you navigate cross-border regulations efficiently."
      },
      {
        question: "How will AcctoVista provide international tax services?",
        answer: "We deliver international tax services through a structured approach that includes detailed analysis, customized solutions, and ongoing support. Our process involves understanding your specific needs, applying global tax regulations, and providing actionable recommendations to manage your international tax obligations."
      },
      {
        question: "How much experience does AcctoVista have in international tax advisory?",
        answer: "AcctoVista has extensive experience in international tax advisory, with a team of experts who specialize in various aspects of global tax compliance and strategy. Our proven track record demonstrates our capability to manage complex international tax issues effectively."
      },
      {
        question: "How is cost reduction achieved with AcctoVista’s international tax services?",
        answer: "We achieve cost reduction by leveraging our expertise and efficient processes to streamline international tax management. Our tailored solutions minimize tax liabilities and administrative burdens, leading to overall cost savings for your business."
      },
      {
        question: "What is a digital nomad and what tax structuring is done for them?",
        answer: "A digital nomad is an individual who works remotely while traveling or living in different countries. We provide tailored tax structuring solutions for digital nomads to address the complexities of multi-jurisdictional tax obligations, ensuring compliance and optimizing tax outcomes based on their unique situation."
      }
    ];

    const spanTexts = [
      { value: 1000, text: 'Number of International Tax Advisory'},
      { value: 870, text: 'Foregin Tax Credit Claims'},
      { value: 100, text: 'Permanent Establishment Advisory'},
      { value: 30, text: 'Advisory on Withholding Taxes on Royalty/Fees for Technical Services'},
      { value: 50, text: 'Digital Nomad Tax Structuring'},
      { value: 45, text: 'Average Tax Saved', unit :"%"},
   ];
   const challenges = [
      {
        title: "Streamlining Global Tax Compliance",
        problem: "Navigating tax compliance across multiple countries can be intricate and overwhelming.",
        solution: "AcctoVista simplifies this process with expert guidance, ensuring your business remains compliant with international tax requirements."
      },
      {
        title: "Enhancing Efficiency in Tax Management",
        problem: "Managing international tax obligations can be administratively burdensome and time-consuming.",
        solution: "We streamline the management of your global tax responsibilities, handling all necessary filings and compliance tasks efficiently."
      },
      {
        title: "Optimizing Cross-Border Tax Strategies",
        problem: "Developing effective tax strategies for international operations involves complex planning.",
        solution: "AcctoVista provides strategic insights and solutions to enhance the efficiency of your global tax operations and reduce overall liabilities."
      },
      {
        title: "Ensuring Accurate Tax Compliance",
        problem: "Keeping up with varying tax regulations and requirements across different jurisdictions can be challenging.",
        solution: "Our expertise and advanced systems ensure accurate compliance with international tax laws, mitigating risks and ensuring adherence."
      },
      {
        title: "Providing Strategic Tax Advisory",
        problem: "Crafting tailored tax strategies for international activities requires in-depth knowledge and analysis.",
        solution: "We offer expert advisory services to develop effective tax strategies, addressing complex international tax challenges and optimizing outcomes."
      },
      {
        title: "Navigating International Tax Complexities",
        problem: "International tax scenarios can involve complex regulations and diverse requirements.",
        solution: "AcctoVista’s specialized knowledge helps you navigate these complexities, ensuring that your tax strategy aligns with global standards and reduces potential issues."
      },
      {
        title: "Comprehensive International Tax Solutions",
        problem: "Navigating international tax services involves complex challenges such as determining tax residence, managing foreign tax credits, and structuring tax-efficient operations.",
        solution: "AcctoVista provides expert solutions for tax residence, foreign tax credits, permanent establishment, withholding taxes, capital gains, and tax-efficient structuring, including specialized support for digital nomads."
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
           }} text="International Tax Advisory" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/InternationalTax.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Simplify Your Global Tax Obligations: Comprehensive Solutions for Compliance and Savings</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our International Tax Advisory</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, we specialize in comprehensive international taxation services designed to address the complexities of global tax compliance and strategy. We offer the following expertise:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cross-Border Tax Planning</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> International Tax Compliance</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Determining Tax Residence as per Treaties</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Foreign Tax Credit Claims</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Permanent Establishment Advisory</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Advisory on Withholding Taxes on Royalty/Fees for Technical Services</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Ascertaining Capital Gains Tax Liabilities</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Advantageous Structures Advisory</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Digital Nomad Tax Structuring</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Global Tax Reporting and Filing</li>
         </ul>
       </div>

               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white mb-20"
       >
         <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Elevates Your International Tax Strategy?</h1>
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
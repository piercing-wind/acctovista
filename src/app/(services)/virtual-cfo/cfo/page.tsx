import { AddressingNeeds } from "@/components/accordination";
import { Divider } from "@/components/divider";
import { Header } from "@/components/header";
import BlurFade from "@/components/magicui/blur-fade";
import { FadeText } from "@/components/magicui/fade-text";
import { CircleChevronRight } from "lucide-react";
import { BiConfused } from "react-icons/bi";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";
import ProblemSolutionsFAQ from "@/components/problemsolutionFAQ";
import { TeamSnapshot } from "@/components/tramsnapshot";
import { ContactUs } from "@/components/contactus";
import { FAQ } from "@/components/faq";
import { SoftwareMarque } from "@/components/softwaresLogoMarque";
import { ServiceNavigator } from "@/components/serviceNavigator";

const Page = ()=>{
   const challenges = [
      {
        title: "Accurate Financial Forecasting",
        problem: "Inaccurate budgeting and forecasting can lead to unexpected financial challenges and missed opportunities.",
        solution: "AcctoVista delivers precise budgeting, forecasting, and performance analysis to provide a clear and actionable financial roadmap."
      },
      {
        title: "Efficient Cash Flow Management",
        problem: "Poor cash flow management can disrupt operations and affect your ability to meet financial obligations.",
        solution: "We monitor and optimize your cash flow, ensuring smooth operations and freeing up resources for growth and investment."
      },
      {
        title: "Strategic Business Guidance",
        problem: "Lack of expert financial advice can result in missed growth opportunities and ineffective M&A strategies.",
        solution: "Our strategic guidance includes business strategy development and M&A advisory to align your financial strategies with your business goals."
      },
      {
        title: "Comprehensive Risk Management",
        problem: "Inadequate risk management exposes your business to financial risks and regulatory non-compliance.",
        solution: "We identify risks, develop mitigation strategies, and ensure compliance to protect your business from potential pitfalls."
      },
      {
        title: "Effective Tax Planning",
        problem: "Without proper tax planning, you may miss opportunities for savings and face compliance risks.",
        solution: "Our tax planning and compliance management help minimize liabilities and uncover potential savings."
      },
      {
        title: "Cost Management",
        problem: "Inefficient cost management can increase expenses and reduce profitability.",
        solution: "We analyze and control costs, implementing cost-saving measures to enhance your financial performance."
      },
      {
        title: "Successful Fundraising",
        problem: "Challenges with capital structuring and investor relations can hinder your fundraising efforts.",
        solution: "We offer advisory services for capital structure and investor relations to support your fundraising and growth."
      },
      {
        title: "Advanced Technology Integration",
        problem: "Outdated financial systems and data security issues can hinder efficiency and financial management.",
        solution: "We implement and optimize financial management software and ensure robust data security to enhance your operations."
      }
    ];
    const spanTexts = [
      { value: 60, text: 'Financial Planning and Analysis'},
      { value: 120, text: 'Cash Flow Management'},
      { value: 1550, text: 'Variance Analysis'},
      { value: 1200, text: 'Budgeting Decisions'},
      { value: 100, text: 'Data Security', unit :"%"},
      { value: 45, text: 'Cost Reduction', unit :"%"},
   ];

   const faqData = [
      {
        question: "What is a Virtual CFO?",
        answer: "A Virtual CFO (Chief Financial Officer) is an experienced financial professional who provides strategic financial management and oversight on a part-time or contract basis. They offer services similar to a full-time CFO but without the associated costs of a full-time position."
      },
      {
        question: "What services are included in Virtual CFO services?",
        answer: "Virtual CFO services typically include financial planning and analysis, cash flow management, budget preparation, financial reporting, risk management, and strategic advisory. They help businesses with financial strategy, operational efficiency, and growth planning."
      },
      {
        question: "How can a Virtual CFO benefit my business?",
        answer: "A Virtual CFO provides expert financial guidance and oversight, helps optimize cash flow, ensures accurate financial reporting, and supports strategic decision-making. They offer the benefits of high-level financial management and planning without the expense of a full-time CFO."
      },
      {
        question: "How does a Virtual CFO differ from a traditional CFO?",
        answer: "While a traditional CFO is a full-time, in-house executive, a Virtual CFO works remotely or on a part-time basis. Both roles involve similar responsibilities, but a Virtual CFO provides flexibility and cost savings, making it ideal for businesses that need expert financial management without a full-time commitment."
      },
      {
        question: "What industries can benefit from Virtual CFO services?",
        answer: "Virtual CFO services are beneficial for a wide range of industries, including technology, manufacturing, retail, healthcare, and professional services. Any business looking for expert financial management and strategic guidance can benefit from these services."
      },
      {
        question: "How does the engagement process with a Virtual CFO work?",
        answer: "The engagement process typically starts with an initial consultation to understand your business’s financial needs and goals. Following this, a customized plan is developed, and the Virtual CFO will work with your team to implement strategies, monitor financial performance, and provide ongoing support."
      },
      {
        question: "What are the costs associated with Virtual CFO services?",
        answer: "The cost of Virtual CFO services varies based on the scope of work, the level of expertise required, and the duration of the engagement. Generally, these services are more cost-effective than hiring a full-time CFO, with pricing often based on a monthly retainer or project-based fees."
      },
      {
        question: "How do I know if my business needs a Virtual CFO?",
        answer: "If your business requires advanced financial planning, strategic guidance, and professional financial oversight but cannot justify the cost of a full-time CFO, a Virtual CFO may be an ideal solution. Signs you might need one include complex financial challenges, rapid growth, or the need for strategic financial advice."
      },
      {
        question: "How can I get started with Virtual CFO services?",
        answer: "To get started, contact us for an initial consultation where we can discuss your specific financial needs and objectives. We will then develop a tailored plan to provide the financial expertise and support your business needs."
      },
      {
        question: "Can a Virtual CFO work alongside my existing accounting team?",
        answer: "Yes, a Virtual CFO can seamlessly integrate with your existing accounting team. They will collaborate with your team to enhance financial management, streamline processes, and provide strategic insights, ensuring a cohesive approach to your business’s financial health."
      }
    ];

    const softwares = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Fathom.svg', alt: 'QuickBooks',  width: '10rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Jirav.svg', alt: 'Zoho', width: '8rem', height: '8rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Logicgate.svg', alt: 'Bill', width: '12rem', height: '8rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Excel.svg', alt: 'Microsoft Dynamics 365', width: '6rem', height: '6rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Power_BI.svg', alt: 'Xero', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Resolver.svg', alt: 'Xero', width: '10rem', height: '10rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Tableau.svg', alt: 'Xero', width: '10rem', height: '10rem' },
    ];
   return(
      <>
       <div className="w-full flex flex-col justify-center h-[30vh] items-center relative bg-black bg-opacity-60">
         <Header classNameForBg="text-white fixed top-0"/>
         <Image
            src={'/services/services.jpg'}
            alt="Virtual CFO Main Page"
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
         }} text="Virtual CFO Services" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/virtualCFO.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-bold opacity-85">Achieve Strategic Success with Tailored Virtual CFO Services</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Outsourced Virtual CFO Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, our Virtual CFO services offer expert financial management solutions tailored to drive your business forward. Our services include:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Financial Planning and Analysis</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cash Flow Management</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Strategic Guidance</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Risk Management</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Financial Reporting and Compliance</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Planning and Compliance</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cost Management</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Fundraising and Capital Structure</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Technology and Systems Integration</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Variance Analysis</li>
           <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Capital and Financial Budgeting Decision</li>
         </ul>
         
       </div>

         <ServiceNavigator />
      </div>
       <Divider className="lg:w-[80%] mx-auto"/>
         <div className="md:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
         >
          <h1 className="text-4xl opacity-95 font-bold my-8 py-4 mx-2">How AcctoVista Address Your Needs</h1>
         <ProblemSolutionsFAQ challenges={challenges}/>
        </div>
        <div className="my-20">
         <h1 className="mx-2 md:mx-20 pb-2 text-2xl font-semibold opacity-90">Key Software</h1>
         <Divider className="w-[20%] lg:w-[10%] mx-20 mb-8"/>
         <SoftwareMarque images={softwares} className="mx-8"/>
        </div>
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>
      </>
   )
}
export default Page;
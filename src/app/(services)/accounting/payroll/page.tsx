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
        question: "What services does AcctoVista offer?",
        answer: "AcctoVista provides a comprehensive range of payroll services, including employee data management, wage and salary calculation, tax withholding (including TDS), deductions and benefits management, payroll tax deposits and reporting, check or direct deposit processing, payroll registers and reports, year-end processing, and compliance advisory."
      },
      {
        question: "Why should I consider outsourcing payroll services?",
        answer: "Outsourcing payroll services to AcctoVista allows you to focus on your core business activities while we handle complex payroll tasks. It ensures accurate processing, reduces administrative burdens, and leverages our expertise to stay compliant with changing regulations."
      },
      {
        question: "How does AcctoVista handle TDS withholding and reporting?",
        answer: "AcctoVista manages TDS (Tax Deducted at Source) withholding with precision, ensuring accurate deductions and timely compliance with tax regulations. We handle all aspects of TDS reporting, including calculating the correct amounts, generating reports, and facilitating tax deposits."
      },
      {
        question: "How does AcctoVista provide payroll services?",
        answer: "AcctoVista delivers payroll services through advanced technology and expert support. We utilize sophisticated payroll systems to automate processes, ensure accuracy, and integrate seamlessly with your existing HR and accounting systems."
      },
      {
        question: "How efficient is AcctoVista’s payroll service?",
        answer: "AcctoVista’s payroll services are highly efficient due to our use of cutting-edge technology and automation. We streamline payroll tasks, reduce manual errors, and ensure timely processing and reporting, which enhances overall operational efficiency."
      },
      {
        question: "What is the experience level of AcctoVista’s team?",
        answer: "Our team consists of experienced payroll professionals who stay current with industry best practices and regulatory changes. Their expertise ensures accurate and compliant payroll management, providing you with reliable support and insights."
      },
      {
        question: "How does AcctoVista achieve cost reduction in payroll services?",
        answer: "AcctoVista achieves cost reduction by automating payroll processes and reducing the need for in-house payroll staff. Our efficient systems and streamlined operations lower administrative costs and minimize errors, resulting in cost savings for your business."
      }
    ];
    const images = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Intuit_QuickBooks_logo.svg', alt: 'QuickBooks',  width: 273, height: 70 },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/zoho-logo-web.svg', alt: 'Zoho', width: '12rem', height: '5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/gusto-logo-vector.svg', alt: 'Bill', width: '10rem', height: '5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/razorpay.svg', alt: 'Microsoft Dynamics 365', width: '24rem', height: '5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Automatic_Data_Processing.svg', alt: 'Xero', width: 180, height: 79 },
    ];
    const spanTexts = [
      { value: 3000, text: 'Payrolls Processed' },
      { value: 15500, text: 'Number of Employees Paid' },
      { value: 12000, text: 'Tax Withholding Managed' },
      { value: 1750, text: 'Payroll Advisory' },
      { value: 50000, text: 'Payroll Tax Reports Filed' },
      { value: 1000, text: 'Payroll Adjustments Made' },
      { value: 40, text: 'Cost Reduction', unit: '%' },
    ];
    
    const challenges = [
      {
        title: "Efficient Administrative Management",
        problem: "Manual payroll management can be time-consuming, diverting valuable resources and attention from core business activities.",
        solution: "AcctoVista streamlines payroll processes through advanced systems, automating routine tasks and freeing up your resources to focus on core business functions."
      },
      {
        title: "Accurate and Reliable Processing",
        problem: "Relying on manual data entry and calculations increases the risk of errors, which can lead to financial discrepancies and employee dissatisfaction.",
        solution: "Our sophisticated payroll software automates calculations and data entry, significantly reducing the risk of human error and ensuring accurate payroll processing."
      },
      {
        title: "Seamless Adaptation to Employee Changes",
        problem: "Adjusting payroll systems to accommodate frequent changes in employee status, such as promotions or terminations, can be complex.",
        solution: "AcctoVista’s flexible payroll solutions easily accommodate employee status changes, including promotions, terminations, and other adjustments, ensuring smooth transitions."
      },
      {
        title: "Integrated and Efficient Systems",
        problem: "Payroll systems that don’t integrate well with other business systems (like HR or accounting software) can create inefficiencies and data inconsistencies.",
        solution: "Our payroll systems integrate seamlessly with your existing HR and accounting software, ensuring consistency and efficiency across all business functions."
      },
      {
        title: "Simplified Compliance Management",
        problem: "Navigating and adhering to a variety of local, state, and federal payroll regulations can be overwhelming and resource-intensive.",
        solution: "AcctoVista stays updated with the latest regulations and manages compliance for you, ensuring adherence to all local, state, and federal payroll laws."
      },
      {
        title: "Robust Data Security Measures",
        problem: "Ensuring the security and confidentiality of sensitive payroll information against potential breaches or unauthorized access is a critical concern.",
        solution: "Our payroll systems include advanced security measures to protect sensitive payroll information, safeguarding it against unauthorized access and potential breaches."
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
         }} text="Payroll Services" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/payrollAccouting.jpg'
              alt="Virtual CFO"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Streamlined Payroll: Accurate Payments, Timely Compliance, and Effortless Processing.</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Our Outsourced Payroll Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, elevate your business with our specialized payroll solutions and cutting-edge technology. We offer the following services:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Employee Data Management</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Wage and Salary Calculation</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tax Withholding</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Deductions and Benefits</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Payroll Tax Deposits and Reporting</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Check or Direct Deposit Processing</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Payroll Register and Reports</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Year-End Processing</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Compliance and Advisory</li>
         </ul>
         
       </div>
               <ServiceNavigator />
      </div>
      <Divider className="lg:w-[80%] mx-auto"/>
       <div className="px-2 lg:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
       >
          <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Execellently Manages Payroll?</h1>
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
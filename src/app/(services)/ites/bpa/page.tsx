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
        title: "Enhancing Efficiency and Reducing Errors",
        problem: "Manual processes are inefficient and prone to errors, causing delays and inaccuracies.",
        solution: "Automating repetitive tasks such as data entry, reporting, and reconciliation reduces errors and speeds up processes. This leads to more efficient operations and higher accuracy, saving time and resources."
      },
      {
        title: "Adapting to Regulatory Changes",
        problem: "Keeping up with constantly evolving regulations is challenging and time-consuming.",
        solution: "Automation tools ensure compliance by staying updated with regulatory changes and automatically applying them. This reduces the risk of non-compliance and penalties, while freeing up resources to focus on core business activities."
      },
      {
        title: "Managing Large Volumes of Data",
        problem: "Handling large volumes of data manually is cumbersome and prone to errors.",
        solution: "Automation solutions streamline data management, enabling real-time data analysis and reporting. This improves decision-making by providing accurate and timely insights."
      },
      {
        title: "Scaling Operations Efficiently",
        problem: "As businesses grow, manual processes become inefficient and cannot handle increased workloads.",
        solution: "Scalable automation solutions adapt to growing business needs, ensuring that operations remain efficient and effective. This allows businesses to grow without being constrained by manual processes."
      },
      {
        title: "Mitigating Fraud and Enhancing Security",
        problem: "Manual processes are susceptible to fraud and security breaches.",
        solution: "Automated systems include robust security measures and fraud detection algorithms to protect sensitive information. This enhances data security and reduces the risk of fraud."
      },
      {
        title: "Improving Customer Experience",
        problem: "Manual customer service processes can be inconsistent and slow, leading to dissatisfied customers.",
        solution: "Automation tools like chatbots, automated ticketing systems, and CRM integrations ensure consistent and timely customer support. This enhances customer satisfaction and loyalty."
      },
      {
        title: "Optimizing Inventory Management",
        problem: "Manual inventory management leads to stockouts and overstocking, impacting sales and increasing costs.",
        solution: "Automated inventory tracking and reordering systems optimize stock levels, ensuring product availability and reducing carrying costs."
      }
    ];
    const spanTexts = [
      { value: 90, text: 'Human Error Reduction', unit :"%"},
      { value: 80, text: 'Time Saved by Automating Manual Work', unit :"%"},
      { value: 200, text: 'Throughput Increase', unit :"%"},
      { value: 90, text: 'Manual Labour cost reduction', unit :"%"},
      { value: 90, text: 'Work Speed Increased', unit :"%"},
      { value: 75, text: 'Average Automation Achived', unit :"%"},
   ];

   const faqData = [
      {
        question: "What is Business Process Automation?",
        answer: "Business Process Automation (BPA) refers to the use of technology to automate repetitive and time-consuming tasks within business operations. It aims to enhance efficiency, reduce errors, and streamline workflows by implementing automated systems and tools across various business functions."
      },
      {
        question: "Why should manual processes be replaced by automation?",
        answer: "Manual processes are often inefficient, error-prone, and difficult to scale. Automation replaces these manual tasks, leading to improved accuracy, faster processing times, and cost savings. It also allows businesses to focus on strategic initiatives rather than routine tasks, leading to greater overall efficiency and effectiveness."
      },
      {
        question: "How does AcctoVista achieve automation, and can you provide some practical examples?",
        answer: "AcctoVista implements automation through advanced technologies such as AI, machine learning, and RPA (Robotic Process Automation). For instance, we automate invoicing and expense management to reduce manual data entry errors and speed up financial reporting. In customer service, we use chatbots and automated ticketing systems to provide consistent and timely support. Our solutions are tailored to meet specific business needs and enhance operational efficiency."
      },
      {
        question: "On average, how much automation is achieved by AcctoVista?",
        answer: "AcctoVista's automation solutions typically achieve up to 70-80% automation in key business processes. This significant level of automation helps businesses streamline their operations, reduce manual intervention, and achieve substantial improvements in efficiency and accuracy."
      },
      {
        question: "How experienced is the team at AcctoVista?",
        answer: "Our team comprises highly skilled professionals with extensive experience in business process automation. We have a proven track record of successfully implementing automation solutions across various industries, ensuring that our clients benefit from our expertise and industry best practices."
      },
      {
        question: "Can AcctoVista provide customized automation solutions?",
        answer: "Yes, AcctoVista offers customized automation solutions tailored to the specific needs of each business. We work closely with clients to understand their unique requirements and design automation strategies that align with their goals. Whether it's automating financial processes, customer service, or inventory management, we deliver solutions that address the specific challenges and opportunities of each client."
      }
    ];

    const softwares = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/gusto-logo-vector.svg', alt: 'Gusto',  width: '10rem', height: '8rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Blackline.svg', alt: 'Blackline', width: '12rem', height: '8rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Hubspot.svg', alt: 'Hubspot', width: '12rem', height: '8rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Odoo.svg', alt: 'Oddo', width: '12rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/UiPath.svg', alt: 'Uipath', width: '10rem', height: '7rem' },
    ];
   return(
      <>
       <div className="w-full flex flex-col justify-center h-[30vh] items-center relative bg-black bg-opacity-60">
         <Header classNameForBg="text-white fixed top-0"/>
         <Image
            src={'https://d11wbp5a59q34o.cloudfront.net/public/services/services.jpg'}
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
         }} text="Business RPA" direction="up" className="text-5xl font-extrabold text-white px-8 brightness-200 text-center mx-auto drop-shadow-2xl"
         />
         </div>
      </div>
      <div className="w-[90%] flex mx-auto  gap-5">
       <div className="w-[100%] my-10 py-10 flex flex-col">
          <BlurFade delay={0.5} inView className='h-[16rem] md:h-[34rem] lg:w-[100%]'>
          <div className="h-full w-full overflow-hidden relative rounded-lg"
            style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
          >
            <Image
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/RPA.jpg'
              alt="B  P  A"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-sung md:leading-normal">Leave Manual Processes Behind: Embrace the Future with Our Smart Automation Solutions for Unmatched Efficiency and Growth</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Business RPA</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, We Empower Your Business Through Seamless Automation. Our Automation fields include:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Accounting and Finance</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Sales and Marketing</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Supply Chain and Logistics</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Human Resources</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Customer Service</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Inventory Management</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Procurement</li>
         </ul>
         
       </div>
            <ServiceNavigator />
      </div>
       <Divider className="lg:w-[80%] mx-auto"/>
         <div className="md:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
         >
          <h1 className="text-4xl opacity-95 font-bold my-8 mx-2 py-4">How AcctoVista Address Your Needs</h1>
         <ProblemSolutionsFAQ challenges={challenges}/>
        </div>
        <div className="my-20">
         <h1 className="mx-2 md:mx-20 pb-2 text-2xl font-semibold opacity-90">Automation Partner&apos;s</h1>
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
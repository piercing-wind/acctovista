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
         title: "Outdated Systems Impeding Business Growth",
         problem: "Legacy systems can hinder scalability and limit growth potential.",
         solution: "AcctoVista modernizes outdated applications by migrating them to scalable cloud platforms and updating underlying technologies. This ensures your systems grow with your business needs, offering enhanced performance and flexibility."
      },
      {
         title: "Data Inconsistencies During Migration",
         problem: "Data migration often leads to inconsistencies and errors that can impact business operations.",
         solution: "AcctoVista employs rigorous data validation and cleansing techniques during migration. Our comprehensive data integrity checks ensure that your data remains accurate and consistent across new systems."
      },
      {
         title: "High Costs of Maintaining Legacy Systems",
         problem: "Maintaining old systems can be costly and inefficient.",
         solution: "By migrating to modern, cloud-based solutions, AcctoVista reduces maintenance costs and operational expenses. Our approach streamlines infrastructure and eliminates the need for costly legacy system upkeep."
      },
      {
         title: "Security Risks During Migration",
         problem: "Transitioning to new systems can expose businesses to security vulnerabilities.",
         solution: "AcctoVista implements robust security measures throughout the migration process. We use encryption, secure data transfer protocols, and thorough risk assessments to protect your data and ensure compliance with industry standards."
      },
      {
         title: "Integration Challenges with New Platforms",
         problem: "Integrating new systems with existing tools and processes can be complex and disruptive.",
         solution: "AcctoVista ensures seamless integration by employing advanced APIs and middleware solutions. Our team facilitates smooth connectivity between new platforms and your current systems, minimizing disruptions and enhancing overall efficiency."
      },
      {
         title: "Disruption of Business Operations During Transition",
         problem: "Software migration can cause significant downtime and operational disruptions.",
         solution: "AcctoVista plans and executes migrations with minimal impact on your business operations. We use phased migration strategies and comprehensive testing to ensure a smooth transition with minimal downtime."
      },
      {
         title: "Lack of User Training for New Systems",
         problem: "New software can be difficult for employees to learn, impacting productivity.",
         solution: "AcctoVista provides extensive training and support for your team. We offer customized training sessions, user guides, and ongoing support to ensure your staff is fully equipped to use new systems effectively."
      },
      {
         title: "Difficulty in Maintaining System Performance Post-Migration",
         problem: "New systems may experience performance issues if not properly optimized.",
         solution: "AcctoVista focuses on performance optimization during and after migration. We conduct thorough testing and fine-tuning to ensure your new systems operate at peak efficiency and meet your business needs."
      }
   ];
   const spanTexts = [
      { value: 95, text: 'Data Accuracy Post-Migration', unit: '%' },
      { value: 30, text: 'Faster Data Access and Retrieval', unit: '%' },
      { value: 75, text: 'Improved System Performance Post-Migration', unit: '%' },
      { value: 30, text: 'Reduction in System Latency', unit: '%' },
      { value: 85, text: 'Seamless Integration with Existing Systems', unit: '%' },
      { value: 40, text: 'Reduced Infrastructure Costs', unit: '%' },
      { value: 50, text: 'Savings on Maintenance and Support', unit: '%' },
    ];
   const faqData = [
      {
         question: "What Types of Software Migration Services Are Available?",
         answer: "Common software migration services include application migration, data migration, cloud migration, operating system migration, and database migration. These services help transition various components of your IT infrastructure to new systems or platforms."
      },
      {
         question: "How Is Data Integrity Maintained During Migration?",
         answer: "Data integrity is maintained through rigorous validation and cleansing processes. Ensuring data accuracy and consistency is critical to prevent errors and ensure reliable data transfer."
      },
      {
         question: "What Are the Benefits of Cloud Migration?",
         answer: "Cloud migration offers benefits such as reduced infrastructure costs, enhanced scalability, improved performance, and increased security. It enables businesses to leverage modern cloud technologies for greater efficiency."
      },
      {
         question: "How Are Security Concerns Addressed During Migration?",
         answer: "Security concerns are managed by implementing encryption, secure data transfer protocols, and conducting thorough risk assessments to protect data throughout the migration process."
      },
      {
         question: "What Is the Typical Duration for a Software Migration Project?",
         answer: "The duration of a software migration project depends on its complexity and scope. Detailed project plans and timelines are created to ensure efficient execution with minimal disruption."
      },
      {
         question: "How Does AcctoVista Minimize Downtime During Migration?",
         answer: "AcctoVista minimizes downtime by using phased migration strategies and conducting extensive pre-migration testing. This approach helps reduce the impact on business operations and ensures a smooth transition."
      },
      {
         question: "What Post-Migration Support and Training Are Provided?",
         answer: "Post-migration support includes training sessions, user guides, and ongoing assistance to help users adapt to new systems. Effective support ensures that teams can efficiently use the new technology."
      }
   ];

   return(
      <>
       <div className="w-full flex flex-col justify-center h-[30vh] items-center relative bg-black bg-opacity-60">
         <Header classNameForBg="text-white fixed top-0"/>
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
           hidden: { opacity: 0, transition:{ delay : 0.5} },
           show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
         }} text="Software Migration" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/SoftwareMigration.jpg'
              alt="Software Migration"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-normal">Streamline Your Business Operations with Comprehensive Software Migration Solutions</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Software Migration</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, Unlock New Potential with Innovative and Efficient Software Migration</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/>Application Migration</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Data Migration</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cloud Migration</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Operating System Migration</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Database Migration</li>
          </ul>
         
       </div>
     
               <ServiceNavigator />
      </div>
       <Divider className="lg:w-[80%] mx-auto"/>
         <div className="px-2 md:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
         >
          <h1 className="text-4xl opacity-95 font-bold my-8 py-4">How AcctoVista Improves your Business Forecasting?</h1>
         <ProblemSolutionsFAQ challenges={challenges}/>
        </div>
        <div className="my-20"/>
        <TeamSnapshot spanTexts={spanTexts} numberOfTickets={spanTexts.length}/>
        <ContactUs/>
        <FAQ faqData={faqData}/>
      </>
   )
}
export default Page;
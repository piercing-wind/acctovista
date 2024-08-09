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
         title: "Seamless System Integration for Enhanced Efficiency",
         problem: "Disparate Systems Leading to Operational Silos",
         solution: "AcctoVista specializes in integrating disparate systems into a cohesive network, streamlining operations and enhancing overall efficiency, enabling your business to function more smoothly and cohesively."
      },
      {
         title: "Reliable Data Backup Solutions for Peace of Mind",
         problem: "Risk of Data Loss from System Failures or Cyber Incidents",
         solution: "Our comprehensive data backup and disaster recovery services ensure that your data is securely backed up and easily recoverable, minimizing downtime and protecting your business against unexpected data loss."
      },
      {
         title: "Empower Your Workforce with Secure Remote IT Support",
         problem: "Challenges in Managing and Supporting a Remote Workforce",
         solution: "AcctoVista provides secure remote IT support and cloud solutions, allowing your employees to access essential tools and resources from anywhere, ensuring productivity and security for remote and hybrid work models."
      },
      {
         title: "Optimize IT Costs with Strategic Managed Services",
         problem: "Rising IT Costs Straining Your Budget",
         solution: "AcctoVista’s managed IT services offer a cost-effective approach by providing predictable IT expenses and optimized resource allocation, enabling you to focus on growth and innovation without budget concerns."
      },
      {
         title: "Protect Your Business with Advanced Cybersecurity Solutions",
         problem: "Growing Vulnerabilities and Threats from Cyber Attacks",
         solution: "AcctoVista implements advanced cybersecurity measures, including real-time threat monitoring and tailored security strategies, to protect your digital assets and maintain data integrity, ensuring your business remains secure against evolving cyber threats."
      },
      {
         title: "Enhance Collaboration with Unified Communications",
         problem: "Inefficient Communication and Collaboration Across Teams",
         solution: "AcctoVista's unified communications solutions integrate voice, video, and messaging platforms, facilitating seamless collaboration and improving productivity across teams by fostering effective communication."
      },
      {
         title: "Strategic IT Consulting for Future-Proofing Your Business",
         problem: "Lack of a Cohesive IT Strategy to Drive Business Growth",
         solution: "Our IT consulting services provide expert strategic planning and guidance, aligning your IT infrastructure with business goals to drive innovation and maintain a competitive edge in the marketplace."
      },
      {
         title: "Ensure Consistent Connectivity with Expert Network Management",
         problem: "Frequent Network Downtime Affecting Business Operations",
         solution: "AcctoVista’s expert network management services keep your network stable and secure, preventing outages and ensuring consistent connectivity to support uninterrupted business operations."
      }
   ];
    const spanTexts =[
      { value: 70, text: 'Reduction in IT Downtime', unit: '%' },
      { value: 80, text: 'Improved Cybersecurity Posture', unit: '%' },
      { value: 60, text: 'Increase in Remote Work Efficiency', unit: '%' },
      { value: 85, text: 'Enhanced System Integration Efficiency', unit: '%' },
      { value: 75, text: 'Cost Savings with Managed IT Services', unit: '%' },
      { value: 95, text: 'Data Backup and Recovery Reliability', unit: '%' }
    ];
   const faqData = [
      {
         question: "How Can AcctoVista Help Reduce IT Downtime for My Business?",
         answer:"AcctoVista uses proactive monitoring tools and a dedicated support team to identify potential issues before they escalate. This approach helps reduce IT downtime, ensuring your business operations remain uninterrupted and efficient."
      },
      {
         question: "What Should I Look for in a Reliable IT Support Provider?",
         answer:"When choosing an IT support provider, consider their response times, expertise in handling cybersecurity threats, scalability of services, and client testimonials. A reliable provider should offer tailored solutions that align with your business needs and have a proven track record of success."
      },
      {
         question: "How Does AcctoVista Enhance Cybersecurity for Businesses?",
         answer:"AcctoVista implements multi-layered cybersecurity measures, including firewalls, intrusion detection systems, and regular security audits. We also provide employee training to equip your team with the knowledge needed to recognize and mitigate potential threats."
      },
      {
         question: "What Are the Key Benefits of Managed IT Services?",
         answer:"Managed IT services offer predictable costs, improved system performance, and access to expert knowledge without the need for a full-time in-house team. They allow businesses to focus on core operations while the provider manages and optimizes the IT infrastructure."
      },
      {
         question: "How Can AcctoVista Support Our Transition to a Cloud-Based Infrastructure?",
         answer:"AcctoVista offers tailored cloud migration services that ensure a seamless transition from on-premises to cloud-based systems. We provide comprehensive support, including data migration, application integration, and ongoing management, to ensure your cloud environment is secure and efficient."
      },
      {
         question: "Why Is IT Consulting Important for Business Growth?",
         answer:"IT consulting helps businesses align their technology strategies with their growth objectives. By assessing current IT infrastructure and identifying areas for improvement, consulting services enable businesses to leverage technology effectively for innovation and competitive advantage."
      },
      {
         question: "What Does AcctoVista Offer in Terms of Data Backup and Disaster Recovery?",
         answer:"AcctoVista's data backup and disaster recovery solutions include automated backups, secure offsite storage, and rapid recovery processes. Our approach ensures that your data is protected and can be quickly restored in case of system failures or cyber incidents, minimizing downtime and safeguarding business continuity."
      },
      {
         question: "How Can I Ensure Compliance with Industry Regulations Through IT Support?",
         answer:"To ensure compliance, partner with an IT support provider that understands your industry’s regulatory landscape. They should offer services like regular audits, policy implementation, and employee training to keep your business aligned with industry standards."
      }
   ];

    const softwares = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/QuickAssist.png', alt: 'Quick Assist',  width: '7rem', height: '6.5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/TeamViewer_logo.svg', alt: 'Team viewr', width: '23rem', height: '5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/AnyDesk-logo.svg', alt: 'Any Desk', width: '25rem', height: '4.5rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/jira-logo-gradient-blue-attribution_rgb.svg', alt: 'Jira Atlassian', width: '13rem', height: '6rem' },
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
         }} text="IT Support Service" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/IT-Support-Services.jpg'
              alt="IT Support Services"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-normal">Delivering Unmatched IT Support Solutions to Empower Your Business with Seamless Operations.</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">IT Support Services</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, We are Empowering Businesses with Superior IT Support Solutions:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Remote IT Support</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cybersecurity</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Managed IT Services</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Helpdesk Support</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> IT Consulting and Strategy Planning</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Data Backup and Disaster Recovery</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cloud Services Management</li>
             <li className="flex items-center" title="Voice over Internet Protocol"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> VoIP</li>
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
        <div className="my-20">
         <h1 className="mx-2 md:mx-20 pb-2 text-2xl font-semibold opacity-90">Software &amp; Tools Used for AI-Driven Data Analytics</h1>
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
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
        title: "Enhancing Forecast Accuracy",
        problem: "Inaccurate forecasting leads to poor strategic planning and decision-making.",
        solution: "Acctovista’s AI-powered models deliver precise forecasts by analyzing historical data and trends, improving accuracy and planning."
      },
      {
        title: "Achieving Seamless Data Integration",
        problem: "Disparate data sources result in fragmented insights and limited analysis.",
        solution: "Acctovista’s AI tools integrate data from multiple sources into a unified platform, providing comprehensive and actionable insights."
      },
      {
        title: "Enabling Data-Driven Decisions",
        problem: "Relying on intuition rather than data can lead to suboptimal business decisions.",
        solution: "Acctovista utilizes AI to analyze data trends, offering actionable insights that enhance decision-making and drive business success."
      },
      {
        title: "Discovering Anomalies Efficiently",
        problem: "Manual methods fail to identify anomalies and unusual patterns in data.",
        solution: "Acctovista’s AI algorithms detect anomalies automatically, enabling early intervention and resolution of potential issues."
      },
      {
        title: "Unlocking Predictive Insights",
        problem: "Lack of predictive capabilities limits the ability to anticipate future trends and behaviors.",
        solution: "Acctovista’s AI generates predictive insights from historical data, helping businesses anticipate trends and make proactive decisions."
      },
      {
        title: "Streamlining Data Management",
        problem: "Manual data management is time-consuming and error-prone.",
        solution: "Acctovista’s AI automates data management tasks, including cleaning, categorization, and reporting, enhancing efficiency and accuracy."
      },
      {
        title: "Scaling Analytics Effortlessly",
        problem: "Traditional analytics struggle with large data volumes and complex analyses.",
        solution: "Acctovista’s AI-driven solutions scale effectively to handle vast datasets and complex analyses, providing deep insights without performance issues."
      },
      {
        title: "Accessing Real-Time Insights",
        problem: "Delayed data affects timely decision-making and responsiveness.",
        solution: "Acctovista’s AI delivers real-time data analysis, ensuring up-to-date insights for swift and informed decision-making."
      }
    ];
    const spanTexts = [
      { value: 73, text: 'Improved Decision Making', unit :"%"},
      { value: 25, text: 'Enhanced Customer Experience With AI', unit :"%"},
      { value: 50, text: 'Increased Sales and Revenue, Through targeted AI-driven insights', unit :"%"},
      { value: 90, text: 'Accuracy in Risk Management and Fraud Detection', unit :"%"},
      { value: 40, text: 'Work Speed Increased with AI', unit: "%" },
      { value: 20, text: 'Cost Reduction and Efficiency, after implementing AI-driven analytics', unit :"%"},
   ];
   const faqData = [
      {
         question: "What is data analytics, and why is it important for businesses?",
         answer: "Data analytics is the process of examining raw data to identify patterns and draw insights. It’s crucial for businesses because it transforms data into actionable information, aiding decision-making, optimizing operations, and identifying new opportunities for growth."
      },
      {
         question: "How does AI enhance data analytics?",
         answer: "AI enhances data analytics by automating data processing, identifying complex patterns, and predicting future trends. This results in more accurate insights, faster analysis, and the ability to handle large datasets effectively, which traditional methods may not achieve."
      },
      {
         question: "How can data analytics improve business performance?",
         answer: "Data analytics improves business performance by providing insights into customer behavior, optimizing supply chains, and enhancing decision-making. It allows companies to be proactive, reduce costs, improve efficiency, and gain a competitive edge in the market."
      },
      {
         question: "How does AcctoVista solve data analytics challenges for its clients?",
         answer: "AcctoVista solves data analytics challenges by offering AI-driven solutions tailored to each client’s specific needs. We leverage machine learning algorithms to extract meaningful insights, automate workflows, and deliver data that supports strategic decisions."
      },
      {
         question: "What sets AcctoVista apart from other data analytics providers?",
         answer: "AcctoVista stands out by offering personalized, innovative solutions focused on measurable outcomes. We collaborate closely with clients to understand their unique challenges, ensuring our strategies align with their business goals and deliver tangible results."
      },
      {
         question: "Can you provide an example of how AcctoVista solved a big data problem using Apache Spark?",
         answer: "Certainly! AcctoVista assisted a retail client by analyzing millions of sales transactions with Apache Spark. We developed a scalable solution to process data efficiently, identify purchasing trends, and optimize inventory management across various locations, which improved stock control and boosted sales efficiency."
      },
      {
         question: "How does AcctoVista ensure data quality for its clients?",
         answer: "AcctoVista ensures data quality through rigorous cleaning and validation processes, employing automated tools to eliminate errors, and integrating data from multiple sources. This provides a reliable foundation for analysis, ensuring that the insights delivered are both accurate and actionable."
      }
   ];

    const softwares = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Python.svg', alt: 'Gusto',  width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/SQL.svg', alt: 'Zoho', width: '12rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/apacheSpark.svg', alt: 'Apache Spark', width: '10rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Power_BI.svg', alt: 'Power Bi', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/PyTorch_logo_icon.svg', alt: 'Py Torch', width: '5rem', height: '6.1rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Sql.svg', alt: 'Py Torch', width: '12rem', height: '6rem' },
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
         }} text="Robust Data Analytics with AI" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/DataAnalytics.jpg'
              alt="Robuts Data Analytics with AI"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-relaxed">Transform Your Business with Advanced AI-Driven Data Analytics: Uncover Insights, Optimize Operations, and Drive Growth</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Robust Data Analytics With AI</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, We Elevate Your Business with Smart AI Data Analytics for Better Insights and Efficiency with:</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Advanced Pattern Recognition</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Predictive Analytics and Forecasting</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Prescriptive Analytics</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Visualization and Reporting</li>
            <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Personalized Recommendations</li>
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
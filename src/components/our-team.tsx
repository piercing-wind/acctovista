'use client'
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { Divider } from "./divider"
import { Achievements, Breifcase, Role, Skill } from "./icons"
import { motion,useInView } from 'framer-motion';
import { cn } from "@/lib/utils"

interface TeamMemberProps{
   name:string,
   role:string,
   skills:string,
   achievements:string,
   experience:string,
   job:string

}

const TeamMember=({name,role,skills,achievements, experience, job}: TeamMemberProps)=>{

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          damping: 20,
          staggerChildren: 0.3,
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

   return(
      <motion.div
      ref={ref}
      className="w-[95%] lg:w-[70%] mx-auto mb-20 opacity-80"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
 
      <motion.h2 className="text-2xl font-medium my-8 flex flex-col" variants={itemVariants}>
        {name}
        <span className="text-neutral-800 text-base">{role}</span>
      </motion.h2>
      <motion.p className="text-lg tracking-wide leading-9 my-6" variants={itemVariants}>
        <strong style={{ display: 'ruby' }}>
          <span>
            <Skill size={25} />
          </span>
          &nbsp; Key Skills:&nbsp;
        </strong>
        {skills}
      </motion.p>
      <motion.p className="text-lg tracking-wide leading-9 my-6" variants={itemVariants}>
        <strong style={{ display: 'ruby' }}>
          <span>
            <Breifcase size={25} />
          </span>
          &nbsp; Experience:&nbsp;
        </strong>
        {experience}
      </motion.p>
      <motion.p className="text-lg tracking-wide leading-9 my-6" variants={itemVariants}>
        <strong style={{ display: 'ruby' }}>
          <span>
            <Achievements />
          </span>
          &nbsp;Achievements:&nbsp;
        </strong>
        {achievements}
      </motion.p>
      <motion.p className="text-lg tracking-wide leading-9 my-6" variants={itemVariants}>
        <strong style={{ display: 'ruby' }}>
          <span>
            <Role />
          </span>
          &nbsp;Role at AcctoVista:&nbsp;
        </strong>
        {job}
      </motion.p>
    </motion.div>
   )
}

export const TeamChart=()=>{
   const [activeIndex, setActiveIndex] =useState<number[]>([0])
   const [currentService, setCurrentService] = useState<string>("ITES (Information Technology Enabled Services)")
   const [windowWidth, setWindowWidth] = useState(501);

   useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth); // Set initial window width
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const teamMembers : TeamMemberProps[]=[
      {
         name: "Our Team",
         role : "Managing Partner and Team Lead- ITES at AcctoVista",
         skills : "ITES-related Services, Software Development, AI Technology, Real-time Data Analytics, Automation",
         experience : "Our team has extensive experience in developing numerous software solutions, demonstrating exceptional skills in overcoming complex obstacles that can hinder business progress. Their expertise in AI and computer technology is invaluable for helping businesses run smoothly and stay ahead of their competitors.",
         achievements : "Our team's presence at AcctoVista has significantly contributed to automating manual tasks, reducing both time and costs through AI and software development. They provide real-time data analytics to business owners, enabling them to anticipate changes and make informed decisions for better outcomes.",
         job : "As Managing Partner and Team Lead, our team oversees all ITES-related services, ensuring the implementation of cutting-edge technology solutions that enhance business operations. Their leadership and technological expertise drive innovation and efficiency at AcctoVista, ensuring clients receive top-tier service."
      },
      {
         name: "CA Akhil Aggarwal",
         role: "Managing Partner and Team Lead-Virtual CFO & Business Set-up in India at AcctoVista",
         skills: "Virtual CFO Services, Financial Planning & Analysis (FP&A), Business Setup in India, Accounting, Budget Management, Strategic Financial Advice",
         experience: "Akhil is a Chartered Accountant based in India who is actively pursuing a CPA license. He brings a comprehensive skill set in Virtual CFO services, FP&A, and business setup in India. His extensive accounting experience complements his roles, having provided detailed financial reporting, budget management, and strategic financial advice across various sectors.",
         achievements: "Akhil has successfully helped numerous clients set up their businesses in India, enabling them to capitalize on market opportunities while implementing effective tax planning for legitimate tax savings. His extensive experience as a Virtual CFO for many MNCs has enabled businesses to manage their statutory requirements and compliance efficiently and effectively. Throughout his career, he has successfully served hundreds of clients.",
         job: "As a Managing Partner and Team Lead, Akhil oversees the Virtual CFO services and business setup initiatives, ensuring the highest standards of service delivery and strategic guidance. His leadership and expertise drive the firm's commitment to excellence and client satisfaction."
      },
      {
        name: "Yash Jhanwar, US CMA",
        role: "Managing Partner and Team Lead- Audit and Accounting at AcctoVista",
        skills: "Financial Audits, 401(k) Audits, Financial Reporting, Budget Oversight, Strategic Financial Planning",
        experience: "Yash holds a Master of Commerce degree and is currently halfway through his CPA journey. With over half a decade of experience, he has developed extensive expertise as a seasoned auditor, specializing in financial and 401(k) audits. His strong educational background, combined with hands-on experience in accounting, provides him with a profound understanding of financial regulations and accounting principles.",
        achievements: "Yash has effectively managed financial reporting, budget oversight, and strategic financial planning throughout his career. He is dedicated to delivering precise, timely, and comprehensive audit services tailored to meet the specific needs of US-based CPA firms. His commitment to excellence ensures that each audit is conducted with the utmost attention to detail and adherence to regulatory standards, enhancing the reliability and effectiveness of financial reporting for his clients.",
        job: "As a Managing Partner and Team Lead, Yash oversees the audit services division, ensuring high standards in financial reporting and compliance. His expertise and dedication drive the firm's commitment to delivering reliable and thorough audit services."
      },
      {
         name: "Shivansh Sharma, US CMA",
         role: "Managing Partner and Team Lead- Audit at AcctoVista",
         skills: "U.S. Auditing, Financial Planning & Analysis (FP&A), Accounting, Grant Compliance, Budget Management, Strategic Financial Planning",
         experience: "Shivansh is a USA-designated Certified Management Accountant (CMA) who is actively pursuing a CPA license. He brings a comprehensive skill set in U.S. auditing, financial planning & analysis (FP&A), and accounting. With extensive experience in auditing non-profit organizations, single audits, governmental entities, and 401(k) plans, Shivansh meticulously reviews grant compliance and assesses internal controls over federal awards.",
         achievements: "His governmental audit experience involves applying risk-based methodologies to evaluate financial statements and identify potential concerns. Additionally, his FP&A expertise enables him to analyze financial data, develop forecasts and budgets, and provide valuable insights for strategic decision-making. Shivansh's accounting expertise includes managing detailed financial reporting, overseeing budgets, and strategic financial planning, providing a well-rounded approach to financial management.",
         job: "As a Managing Partner and Team Lead, Shivansh oversees the auditing and financial planning teams, ensuring the highest standards of service delivery and strategic guidance. His leadership and expertise drive the firm's commitment to excellence and client satisfaction."
       },
       {
         name: "Suchita Verma, US CMA",
         role: "Managing Partner and Team Lead- Taxation & Accounting at AcctoVista",
         skills: "Tax Planning for Corporates & Individuals, International Taxation, Transfer Pricing, Accounting & Financial Reporting",
         experience: "Suchita is a seasoned tax professional with extensive expertise spanning individual and corporate taxation, trust and estate planning, business taxation, sales tax returns, and comprehensive accountancy and bookkeeping services. Her substantial accounting experience, gained from prestigious firms in Massachusetts, Georgia, and Texas, includes detailed financial reporting, budget management, and strategic financial planning.",
         achievements: "Suchita's strong background has honed her proficiency in navigating complex tax laws and providing strategic tax planning. She also has hands-on experience in business valuations and contributed expertise during tax seasons with Metromax International Group, enhancing her proficiency in preparing and strategizing tax returns for diverse client needs. This diverse background ensures a thorough understanding of regulatory compliance and effective tax management strategies to optimize financial outcomes for clients.",
         job: "As a Managing Partner, Suchita leads the tax planning and compliance division, and accounting team ensuring the delivery of high-quality services and strategic financial solutions. She plays a crucial role in shaping the firm's vision and strategy, driving growth and excellence in client service."
       },
          {
            name: "CA Shivam Sharma",
            role: "Managing Partner and Team Lead- Taxation at AcctoVista",
            skills: "International Taxation, Transfer Pricing, Strategic Tax Planning, Tax Strategies for Digital Nomads, Knowledge of USA, Canada, and Australia Tax Laws",
            experience: "Shivam is a Chartered Accountant based in India who provides professional services to both Indian and international clients. He brings extensive experience in international taxation and transfer pricing. Through his consultancy, many NRIs have successfully reduced their capital gain taxes in both India and Canada/USA. His expertise in international tax includes strategic planning in line with the Double Taxation Avoidance Agreement (DTAA) and relevant jurisdictional laws.",
            achievements: "Shivam specializes in creating tax strategies for digital nomads, such as incorporating US LLCs for tax savings. In the transfer pricing domain, he has conducted numerous transfer pricing studies for multinational enterprises and has provided valuable insights to clients in the USA and Australia on deficiencies in their existing transfer pricing approaches. Additionally, he has decent knowledge of tax laws in the USA, Canada, and Australia.",
            job: "As a Managing Partner and Team Lead, Shivam oversees the international taxation and transfer pricing teams, ensuring the highest standards of service delivery and strategic guidance. His leadership and expertise drive the firm's commitment to excellence and client satisfaction."
          },
    ]
   
   return (
      <>
      <div className="my-20 w-full flex flex-col items-center justify-center ">
       <div className="flex relative lg:w-[12rem] mx-auto ">
         {/* Business Setup */}
          <Image
             src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector-4.png"
             alt="Vector"
             width={windowWidth < 500 ? 150 : 200}
             height={windowWidth < 500 ? 150 : 200}
             className={cn(" cursor-pointer absolute -left-[7rem] lg:-left-[8rem] top-2", currentService === "Business Set-up in India" ? "scale-125" : "hover:scale-105")}
             onClick={()=>{
              setCurrentService("Business Set-up in India");
              setActiveIndex(()=>[1]);
            }}
          />
          {/* ITES */}
          <Image
             src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector.png"
             alt="Vector"
             width={windowWidth < 500 ? 150 : 200}
             height={windowWidth < 500 ? 150 : 200}
             className={cn("cursor-pointer -mt-2", currentService === "ITES (Information Technology Enabled Services)" ? "scale-125" : "hover:scale-105")}
             onClick={()=>{
               setActiveIndex(()=>[0]); 
               setCurrentService("ITES (Information Technology Enabled Services)");
               }}
          />
          {/* Accounting */}
          <Image
             src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector-1.png"
             alt="Vector"
             width={windowWidth < 500 ? 150 : 200}
             height={windowWidth < 500 ? 150 : 200}
             className={cn("cursor-pointer absolute -right-[7.5rem] lg:-right-[8.5rem] top-1", currentService === "Accounting" ? "scale-125" : "hover:scale-105")}
            onClick={()=>{
               setActiveIndex(()=>[4]); 
               setCurrentService("Accounting");
               }}
          />

        </div>
       <p className="font-extrabold text-2xl my-4 text-neutral-800">Our Team</p>
      <div className="flex relative lg:w-[12rem] mx-auto -mt-4">
         {/* Virtual CFO */}

      <Image
            src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector-5.png"
            alt="Vector"
            width={windowWidth < 500 ? 150 : 200}
            height={windowWidth < 500 ? 150 : 200}
            className={cn("cursor-pointer absolute -left-[7rem] lg:-left-[8rem] top-1", currentService === "Virtual CFO" ? "scale-125" : "hover:scale-105")}
            onClick={()=>{
               setActiveIndex(()=>[1,3]); 
               setCurrentService("Virtual CFO");
              }
            }
         />
         {/* Taxation */}
         <Image
            src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector-3.png"
            alt="Vector"
            width={windowWidth < 500 ? 150 : 200}
            height={windowWidth < 500 ? 150 : 200}
            className={cn("cursor-pointer mt-5 ", currentService === "Taxation" ? "scale-125" : "hover:scale-105")}
            onClick={()=>{
               setActiveIndex(()=>[4,5]);
               setCurrentService("Taxation");
               }
            }
         />
         {/* Audit */}

         <Image
            src="https://d11wbp5a59q34o.cloudfront.net/public/our-team/Vector-2.png"
            alt="Vector"
            width={windowWidth < 500 ? 150 : 200}
            height={windowWidth < 500 ? 150 : 200}
            className={cn("cursor-pointer absolute -right-[7.5rem] lg:-right-[8.5rem] top-1", currentService === "Audit" ? "scale-125" : "hover:scale-105")}
            onClick={()=>{setActiveIndex(()=>[3]);
               setCurrentService("Audit ");
            }
            }
         />

      </div>
      <div  className="w-[95%] lg:w-[70%] mx-auto mt-28 opacity-80">
      <motion.h1 
        className="text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentService}
      </motion.h1>
      </div>
      {/* <Divider className="mt-20 lg:w-full"/> */}
      { activeIndex.map((member, index)=>(
          <TeamMember 
          key={index + member + currentService} 
          name={teamMembers[member].name} 
          role={teamMembers[member].role} 
          skills={teamMembers[member].skills} 
          experience={teamMembers[member].experience} 
          achievements={teamMembers[member].achievements} 
          job={teamMembers[member].job} 
       />
         
      ))}

   
   </div> 
    
   </>
   )
}
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
         title: "Streamline Business Operations with Custom Software",
         problem: "Businesses struggle with inefficiencies due to outdated or generic software that doesn't align with their specific processes.",
         solution: "At AcctoVista, we create bespoke software solutions tailored to your business operations, streamlining workflows and improving efficiency by addressing your unique challenges."
      },
      {
         title: "Enhance Customer Experience through Tailored Applications",
         problem: "Off-the-shelf applications often fail to meet customer expectations, leading to decreased satisfaction and engagement.",
         solution: "AcctoVista develops custom web and mobile applications with intuitive designs and unique features that enhance user experience, improving customer satisfaction and loyalty."
      },
      {
         title: "Reduce Costs with Efficient Software Solutions",
         problem: "High licensing fees and unnecessary features in generic software can lead to increased operational costs.",
         solution: "Our personalized software solutions eliminate unnecessary features and focus on your core needs, helping reduce costs and maximize return on investment by providing exactly what you need."
      },
      {
         title: "Increase Productivity with Specialized Tools",
         problem: "Generic software can lead to inefficiencies and reduced productivity due to mismatched features and workflows.",
         solution: "AcctoVista’s custom-built software provides tools that align perfectly with your business processes, boosting productivity by ensuring that every feature is tailored to your specific needs."
      },
      {
         title: "Improve Data Accuracy with Tailored Solutions",
         problem: "Inconsistent data management across various systems can lead to errors and misinformed decision-making.",
         solution: "Our personalized software solutions integrate seamlessly with your existing systems, ensuring consistent data management and improving the accuracy of your business insights."
      },
      {
         title: "Stay Ahead of the Competition with Unique Software",
         problem: "Using standard software solutions makes it challenging to stand out in a competitive market.",
         solution: "At AcctoVista, we craft unique software solutions tailored to your business, giving you a competitive edge by offering features and functionalities that are perfectly aligned with your strategic goals."
      },
      {
         title: "Adapt to Change with Flexible Software Solutions",
         problem: "Businesses often struggle to adapt to new opportunities and challenges with rigid, one-size-fits-all software.",
         solution: "Our custom software solutions are designed to be flexible and adaptable, allowing your business to respond quickly to changing market conditions and capitalize on new opportunities."
      },
      {
         title: "Enhance Security with Custom Software Development",
         problem: "Off-the-shelf software might not address specific security requirements, leading to vulnerabilities.",
         solution: "AcctoVista builds custom software with integrated security features tailored to your specific needs, ensuring robust protection against threats and compliance with industry standards."
      }
   ];
   const spanTexts = [
      { value: 65, text: 'Increase in Operational Efficiency with Custom Solutions', unit: "%" },
      { value: 50, text: 'Boost in Customer Satisfaction Through Tailored Applications', unit: "%" },
      { value: 30, text: 'Reduction in Operational Costs via Bespoke Software', unit: "%" },
      { value: 80, text: 'Improvement in Data Security with Personalized Development', unit: "%" },
      { value: 75, text: 'Enhanced User Engagement from Custom Mobile Apps', unit: "%" },
      { value: 90, text: 'Scalability Achieved with Flexible Software Solutions', unit: "%" },
    ];
   const faqData = [
      {
         question: "What is Personalized Software Development, and How Can It Benefit My Business?",
         answer: "Personalized Software Development involves creating custom software solutions tailored to meet the specific needs and goals of your business. AcctoVista's tailored solutions ensure that your software aligns perfectly with your operations, enhancing efficiency, improving customer satisfaction, and providing a competitive edge by addressing your unique challenges and requirements."
      },
      {
         question: "How Does AcctoVista Ensure That Custom Software Solutions Align with My Business Goals?",
         answer: "At AcctoVista, we begin with an in-depth consultation to understand your business objectives, challenges, and processes. Our team works closely with you throughout the development process to design and build software that precisely fits your needs, ensuring alignment with your strategic goals and providing ongoing support to adapt as your business evolves."
      },
      {
         question: "What Technologies Does AcctoVista Use for Software Development?",
         answer: "AcctoVista utilizes a wide range of cutting-edge technologies tailored to your project needs, including React, NextJs for web development, React Native for mobile apps, and Electron for desktop applications. We choose the right technology stack based on your specific requirements, ensuring the best performance and scalability for your solution."
      },
      {
         question: "Can AcctoVista Integrate Custom Software with Our Existing Systems?",
         answer: "Yes, AcctoVista specializes in seamless integration of custom software with your existing systems, whether they're legacy platforms or modern applications. We ensure compatibility and interoperability, allowing your new software to work smoothly with your current infrastructure, enhancing efficiency without disrupting your workflows."
      },
      {
         question: "How Does AcctoVista Handle Software Security Concerns?",
         answer: "Security is a top priority at AcctoVista. We implement robust security measures tailored to your specific needs, including data encryption, user authentication, and compliance with industry standards. Our custom software solutions are designed to protect sensitive information and safeguard your business from potential threats."
      },
      {
         question: "How Long Does It Take to Develop a Custom Software Solution with AcctoVista?",
         answer: "The timeline for developing a custom software solution with AcctoVista depends on the project's complexity and specific requirements. We work with you to establish a realistic timeline, providing regular updates and maintaining transparency throughout the development process to ensure timely delivery without compromising on quality."
      },
      {
         question: "What Ongoing Support Does AcctoVista Provide After Software Deployment?",
         answer: "AcctoVista offers comprehensive post-deployment support, including maintenance, updates, and enhancements to ensure your software continues to meet your evolving business needs. Our team is committed to providing long-term support, addressing any issues, and implementing new features as required, ensuring your software remains efficient and relevant."
      },
      {
         question: "How Can AcctoVista Help My Business Scale with Custom Software Solutions?",
         answer: "AcctoVista's custom software solutions are designed with scalability in mind, allowing your business to grow without being limited by technology. We build flexible architectures that can easily adapt to increasing demands, enabling seamless expansion and accommodating new features and functionalities as your business evolves."
      }
   ];

    const softwares = [
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/JS.svg', alt: 'Java Script',  width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/TS.svg', alt: 'Type Script', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/react.svg', alt: 'React', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Python.svg', alt: 'Python', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Node.svg', alt: 'Node JS', width: '10rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Figma.svg', alt: 'Figma', width: '7rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Electron.svg', alt: 'Electron', width: '13rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/Azure.svg', alt: 'Azure', width: '13rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/AWS.svg', alt: 'Amazon Web Service', width: '8rem', height: '7rem' },
      { src: 'https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/next.svg', alt: 'Next JS', width: '10rem', height: '7rem' },
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
         }} text="Personalized Software Development" direction="up" className="text-5xl font-extrabold text-white brightness-200 text-center mx-auto drop-shadow-2xl"
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
              src='https://d11wbp5a59q34o.cloudfront.net/public/services/SoftwareServices.jpg'
              alt="Personalized Software Development"
              fill
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          </BlurFade>  
          <h1 className="text-2xl md:text-4xl my-8 font-extrabold opacity-85 leading-snug md:leading-normal">Custom Software Solutions Designed for Your Unique Business Needs by AcctoVista</h1>
         <Divider className="mb-8 ml-0 lg:w-[20%]"/>
          <h2 className="text-2xl font-bold opacity-85">Personalized Software Development</h2>
          <p className="text-base tracking-wide opacity-80 my-4">At AcctoVista, We Deliver Tailored Custom Software Solutions to Transform Your Business</p>   
          <ul className="pl-5 opacity-80 flex flex-col gap-3">
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Custom Web Development</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Bespoke Desktop Application Development</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Tailored Mobile Application Development</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> Cloud-Based Solutions</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> UI/UX Design and Development</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> AI Integration</li>
             <li className="flex items-center"><CircleChevronRight size={15} className="mx-4 text-orange-600"/> AI Chat Bot&apos;s Integration</li>
          </ul>
         
       </div>
               <ServiceNavigator />
      </div>
       <Divider className="lg:w-[80%] mx-auto"/>
         <div className="px-2 md:px-20 mx-auto flex flex-col items-center bg-slate-900 text-white"
         >
          <h1 className="text-4xl opacity-95 font-bold my-8 py-4">What Are the Key Business Challenges and Custom Software Solutions Offered by AcctoVista?</h1>
         <ProblemSolutionsFAQ challenges={challenges}/>
        </div>
        <div className="my-20">
         <h1 className="mx-2 md:mx-20 pb-2 text-2xl font-semibold opacity-90">Cutting-Edge Technologies for Software Development</h1>
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
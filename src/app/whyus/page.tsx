import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import { Reviews } from "@/components/reviews";
import { LinkScroll } from "@/components/footerServiceLink";

const Page=()=>{
   return(<>
      <div className="w-full overflow-x-hidden flex flex-col justify-center h-[60vh] lg:h-screen items-center relative ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/whyus.mp4" type="video/mp4" />
        </video>
        <FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 0.5} },
               show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
            }} text="Innovation in Outsourcing: Your Competitive Edge " direction="up" classN="flex items-center justify-center" className="text-3xl mx-auto lg:text-5xl font-semibold text-white lg:px-8 brightness-200 text-center "/>
      </div>
      <div className="w-[80%] mx-auto text-xl mt-10 tracking-wide text-left">
         <p>
            Choosing <span className="font-bold">AcctoVista&nbsp;</span>
            means partnering with a team of highly skilled professionals in offshore solutions for your business, whether it&lsquo;s your financial aspect or the IT aspect.
            We prioritize accessibility and responsiveness to ensure a seamless experience when working with us.
         </p>
      </div>
      <div className="relative">
      <div className="flex flex-col w-[95%] 2xl:w-[85%] mx-auto mb-24 py-8 ">   
         {/* <Divider className="mb-0 mt-12"/> */}
         <div className="w-full lg:max-h-[40rem] lg:flex lg:flex-row my-20 gap-x-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
               <div className={`w-[25rem] h-[20rem] sm:w-[26rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/domain.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
               <div className="flex my-6"
                  style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 >
               <div className="flex-grow flex p-4">
                 <div className="lg:px-14 pl-8 lg:pl-24 flex-col items-center justify-center border pb-4 flex-grow"
                 style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 > 
                  <h1 className="text-2xl font-semibold my-4 w-full text-left">Domain wise expertise: A Complete Solution</h1>
                  <ul className="list-disc pl-5 gap-y-4 lg:gap-y-3 flex flex-col tracking-wide text-base">
                    <li>Rigorous adherence to global regulatory standards with tailored audit methodologies.</li>
                    <li>Experienced auditors providing precise financial insights and actionable recommendations.</li>
                    <li>Comprehensive financial services from bookkeeping to advanced transaction handling.</li>
                    <li>Specialized global tax advisory and proactive compliance management.</li>
                    <li>Precision tax planning: Driving efficiency with compliance at the core.</li>
                    <li>Cutting-edge IT solutions driving digital transformation and operational efficiency.</li>
                    <li>Strategic Virtual CFO services providing financial leadership and strategic guidance.</li>
                    <li>Advanced FP&A services offering comprehensive financial analysis and forecasting.</li>
                    <li>Data Analytics expertise for insightful data-driven decision-making and operational improvements.</li>
                  </ul>
                  </div> 
               </div>
               </div>
         </div>
         <div className="w-full lg:max-h-[40rem] lg:flex lg:flex-row my-20 gap-x-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
             <div className={`w-[25rem] h-[20rem] sm:w-[30rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative mx-auto lg:hidden`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/techSavvy.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
               <div className="flex my-6"
                  style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 >
               <div className="flex-grow flex p-4">
                 <div className="lg:px-14 pl-8 lg:pl-24 flex-col items-center justify-center border p-4"
                 style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 > 
                  <h1 className="text-2xl font-semibold my-4 w-full text-left">Tech-Savvy Solutions</h1>
                  <ul className="list-disc pl-5 gap-y-4 flex flex-col tracking-wide text-base">
                  <li>Utilizing AI, Blockchain, and RPA technologies to enhance efficiency and ensure compliance.</li>
                    <li>Our innovative approach keeps us at the forefront, giving clients a competitive advantage.</li>
                    <li>We prioritize robust cybersecurity measures to protect client data and uphold confidentiality.</li>
                    <li>Automation drives cost savings while maintaining high-quality service standards, supporting continuous improvement.</li>
                  </ul>
                  </div> 
               </div>
               </div>
               <div className={`w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative hidden lg:flex`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/techSavvy.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
         </div>

         <div className="w-full lg:max-h-[40rem] lg:flex lg:flex-row my-20 gap-x-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
            <div className={`w-[25rem] h-[20rem] sm:w-[35rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative mx-auto`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/dataProtection.jpeg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
               <div className="flex my-6"
                  style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 >
               <div className="flex-grow flex p-4 ">
                 <div className="lg:px-14 pl-8 lg:pl-24 flex-col items-center justify-center border pb-4"
                 style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 > 
                  <h1 className="text-2xl font-semibold my-4 w-full text-left">Accredited Data Protection System</h1>
                  <ul className="list-disc pl-5 gap-y-5 flex flex-col tracking-wide text-base">
                    <li>Ensure strict access controls, encryption, and anonymization techniques to protect client data, ensuring confidentiality.</li>
                    <li>Implement strong security measures including encryption, firewalls, and regular assessments to prevent unauthorized access.</li>
                    <li>Provide ongoing training on data protection principles, empowering employees to identify and respond to security incidents.</li>
                    <li>Establish robust incident responscarriere procedures and business continuity plans to swiftly manage data breaches and minimize client disruption.</li>
                  </ul>
                  </div> 
               </div>
               </div>

         </div>

         <div className="w-full lg:max-h-[40rem] lg:flex lg:flex-row my-20 gap-x-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
             <div className={`w-[25rem] h-[20rem] sm:w-[35rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative mx-auto lg:hidden`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/fortknowyourdata.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
               <div className="flex my-6"
                  style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 >
               <div className="flex-grow flex p-4 ">
                 <div className="lg:px-14 pl-8 lg:pl-24 flex-col items-center justify-center border pb-4"
                 style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 > 
                  <h1 className="text-2xl font-semibold my-4 w-full text-left">Fort Knox Your Data</h1>
                  <ul className="list-disc pl-5 gap-y-4 flex flex-col tracking-wide text-base">
                     <li>Ensuring GDPR compliance through rigorous data protection policies and procedures, safeguarding client data and privacy.</li>
                     <li>Implementing robust security measures such as encryption and regular audits to maintain GDPR standards and protect against data breaches.</li>
                     <li>Conducting ongoing GDPR training for employees to reinforce compliance awareness and best practices in handling personal data.</li>
                     <li>Maintaining GDPR-specific incident response plans to swiftly address and mitigate the impact of data breaches, ensuring minimal disruption to client services.</li>
                  </ul>
                  </div> 
               </div>
               </div>
               <div className={`w-[20rem] h-[20rem] sm:w-[35rem] sm:h-[24rem] rounded-lg overflow-hidden -mt-8 relative hidden lg:flex`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/fortknowyourdata.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
         </div>

         <div className="w-full lg:max-h-[40rem] lg:flex lg:flex-row lg:my-20 gap-x-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
            <div className={`w-[25rem] h-[20rem] sm:w-[35rem] sm:h-[24rem] rounded-lg overflow-hidden mx-auto -mt-8 relative`}
               style={{boxShadow: "0 0 10px 5px rgba(39, 84, 231,0.3)"}}
               >
                  <Image
                  src="https://d11wbp5a59q34o.cloudfront.net/public/Client.jpg"
                  alt="Domain Wise Expertise"
                  fill
                  style={{
                     objectFit: "cover",
                  }}
                  />
               </div>
               <div className="flex my-6"
                  style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 >
               <div className="flex-grow flex p-4 ">
                 <div className="lg:px-14 pl-8 lg:pl-24 items-center justify-center border pb-4"
                 style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
                 > 
                  <h1 className="text-2xl font-semibold my-4 w-full text-left">Gratified Clientele</h1>
                  <ul className="list-disc pl-5 gap-y-5 flex flex-col tracking-wide text-base">
                  <li>Prompt service delivery, enhancing operational efficiency and client satisfaction.</li>
                     <li>Effective implementation of cost-saving measures, significantly reducing business expenditures.</li>
                     <li>Enhanced efficiency achieved through streamlined processes and innovative solutions.</li>
                     <li>Consistent proactive communication and responsiveness, ensuring continual satisfaction of client needs.</li>
                     <li>Ongoing evaluation and improvement of service delivery, consistently exceeding client expectations and fostering mutual success.</li>
                  </ul>
                  </div> 
               </div>
               </div>

         </div>         
           
      </div>
          {/* <Divider/> */}
      <div className="w-[95%] lg:w-[80%] mx-auto my-10 md:my-20">
            <h2 className="whitespace-pre-wrap text-xl font-medium tracking-normal text-black flex flex-col items-center justify-center gap-y-5 p-4 rounded-lg flex-1 text-center mb-14 lg:mb-4"
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
             Fuel For Our Innovation
             </h2>
         <div className="flex-col lg:flex lg:flex-row gap-x-2 item-center justify-center">
            <p className="whitespace-pre-wrap text-xl font-medium tracking-normal text-nowrap text-black flex flex-col items-center justify-center gap-y-5 p-4 rounded-lg flex-1"
            
            // style={{boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)"}}
            >
               <span className="text-5xl tracking-wider flex items-center justify-center">
               <NumberTicker value={5} /> <span className="text-xl">+ Year&apos;s</span> 
               </span>
                 Team Experience
             </p>
             <span className="w-[20rem] my-8 h-0 lg:w-0 lg:h-[6rem] border border-white m-auto block"
               style={{boxShadow: "0 0 15px 1px rgba(249, 125, 9, 0.984)"}}
             />
            <p className="whitespace-pre-wrap text-xl font-medium tracking-normal text-nowrap text-black flex flex-col items-center justify-center gap-y-5 p-4 rounded-lg flex-1"
            >
               <span className="text-5xl tracking-wider flex items-center justify-center">
               <NumberTicker value={50} /> <span className="text-xl">+</span> 
               </span>
                  Happy Client &apos;s
             </p>
             <span className="w-[20rem] my-8 h-0 lg:w-0 lg:h-[6rem] border border-white m-auto block"
               style={{boxShadow: "0 0 15px 1px rgba(9, 57, 249, 0.984)"}}
             />
            <p className="whitespace-pre-wrap text-xl font-medium tracking-normal text-nowrap text-black flex flex-col items-center justify-center gap-y-5 p-4 rounded-lg flex-1"
            >
               <span className="text-5xl tracking-wider flex items-center justify-center">
               <NumberTicker value={20} /> <span className="text-xl">+</span> 
               </span>
                  Skilled Team Members   
             </p>
             <span className="w-[20rem] my-8 h-0 lg:w-0 lg:h-[6rem] border border-white m-auto block"
               style={{boxShadow: "0 0 15px 1px rgba(165, 249, 9, 0.984)"}}
             />
            <p className="whitespace-pre-wrap text-xl font-medium tracking-normal text-nowrap text-black flex flex-col items-center justify-center gap-y-5  p-4 rounded-lg flex-1"
            >
               <span className="text-5xl tracking-wider flex items-center justify-center">
               <NumberTicker value={3} /> <span className="text-xl">+</span> 
               </span>
                 Office &apos;s in India    
             </p>
             <span className="w-[20rem] my-8 h-0 lg:w-0 lg:h-[6rem] border border-white m-auto block"
               style={{boxShadow: "0 0 15px 1px rgba(9, 57, 249, 0.984)"}}
             />
            <p className="whitespace-pre-wrap text-xl font-medium tracking-normal text-nowrap text-black flex flex-col items-center justify-center gap-y-5 p-4 rounded-lg flex-1"
            >
               <span className="text-5xl tracking-wider flex items-center justify-center">
               <NumberTicker value={6} /> <span className="text-xl">+</span> 
               </span>
                  Countries Served
             </p>
          </div>       
      </div>   
      {/* <Divider className="mt-16 mb-8"/> */}

      <div className="w-[95%] lg:w-[80%] py-8 mx-auto">
         <h1 className="text-xl font-semibold py-4">
            Client Review &apos;s
         </h1>
         <Reviews/>
      </div>           
      {/* <Divider/> */}
   </div>
      <div className="w-full relative  h-[30rem] lg:h-[50rem] overflow-hidden bg-black bg-opacity-50 flex flex-col gap-14 lg:gap-8 items-center justify-center ">
            <Image 
            src='https://d11wbp5a59q34o.cloudfront.net/public/YourSuccessisOurGoal.jpg'
            alt="Your Sucess is our goal."
            fill
            style={{
               objectFit: 'fill',
            }}
            className="-z-10"
            />
            <FadeText text="Transforming Ideas into Business Value: Explore Our Cutting-Edge Services" className="text-2xl lg:text-4xl font-bold flex text-white w-[95%] mx-auto text-center" direction="up"/>
            <LinkScroll/>
            {/* <Link href={"/services"}><FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay:1 }},
            }} text="View Services" direction="up" className="text-white px-8 brightness-200 text-center p-2 border hover:text-[1.04rem] hover:bg-black"/></Link> */}
         </div>
   </>
   )
}
export default Page;
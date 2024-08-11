import { Header } from "@/components/header";
import { HomeVideoSlides } from "@/components/homeVideoSlides";
import Image from "next/image";
import Link from "next/link";
import { FadeText } from "@/components/magicui/fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight, QuoteIcon, Sparkles, User } from "lucide-react";
import { EmployeeReviews } from "@/components/employeeReviews";
import { AnimatedList, IndustriesWeServeSection } from "@/components/industriesWeServeSection";
import { Divider } from "@/components/divider";
import { DataSecurityComponent } from "@/components/dataSercuritySection";
import { OffshoreSolutionList } from "@/components/offshoreSolutionList";
import { BlogCard, FrontPageBlogPreview } from "@/components/frontPageBlogPreview";
import EmployeeReviewsScroll from "@/components/mainPageEmployeeReview";
 

export default function Home() {

   const dataSecurityList = [
      {
      heading : "Leveraging AWS for Secure Client Data Management",
      listItems : [
          "Comprehensive encryption with AWS KMS and SSL/TLS.",
          "IAM with role-based access and MFA.",
          "Real-time monitoring with AWS CloudTrail and CloudWatch.",
          "Regular backups with AWS Backup and Amazon S3."
      ]
      },
      {
      heading : "In-House Safety Measures",
      listItems: [
         "No personal devices allowed; collected before entry.",
         "Restricted access based on assigned clients.",
         "No access to social media or personal emails on office PCs.",
         "Biometric access controls for secure workstations.",
         "Surveillance cameras and security personnel."
       ]
      },
      {
      heading : "GDPR Compliance and Regular IT Reviews",
      listItems: [
         "Adherence to GDPR standards.",
         "Regular IT audits and security reviews.",
         "Dedicated Data Protection Officer (DPO).",
         "Continuous training on GDPR and data protection.",
         "Robust incident response plan."
       ]
      },
   ]
   const outSourcingfaqs = [
      {
        question: 'Comprehensive Services',
        answer: 'Access a full range of accounting and financial services tailored to your business needs.'
      },
      {
        question: 'Cost Efficiency',
        answer: 'Save operational costs with our competitive pricing.'
      },
      {
        question: 'Expert Team',
        answer: 'Access our team’s extensive expertise and experience.'
      },
      {
        question: 'Scalable Solutions',
        answer: 'Easily scale services up or down based on your requirements.'
      },
      {
        question: 'Focus on Core Business',
        answer: 'Free up internal resources to concentrate on core activities.'
      }
    ];
    const partnerShipFaq = [
      {
        question: 'Strategic Partnership',
        answer: 'Establish a long-term alliance for mutual growth and success.'
      },
      {
        question: 'Dedicated Satellite Office',
        answer: 'Benefit from a dedicated office tailored to your firm\'s needs.'
      },
      {
        question: 'Specialized Team',
        answer: 'Have a dedicated team including partners, managers, and associates committed to your firm\'s success.'
      },
      {
        question: 'Preferential Rates',
        answer: 'Enjoy preferential hourly rates as outlined in our partnership agreement.'
      },
      {
        question: 'Customized Infrastructure',
        answer: 'Utilize infrastructure specifically designed for your operations.'
      }
    ];

    const blogData =[
      {
      img: "https://d11wbp5a59q34o.cloudfront.net/public/blog/blog1.png",
      alt: "Embarcing the Future",
      title: "Embracing the Future: Why Outsourcing is Essential in 2024 and How AcctoVista Leads the Way",
      author : "AcctoVista",
      date : "5 August 2024",
      description : "In today's fast-paced business environment, the need for outsourcing has never been more pronounced",
      link : "/66b08f74894800c0bcd4d117"

      },
      {
      img: "https://d11wbp5a59q34o.cloudfront.net/public/blog/blog2.png",
      alt: "AI: The Game-Changer for Accountants",
      title: "AI: The Game-Changer for Accountants",
      author : "AcctoVista",
      date : "5 August 2024",
      description : "The accounting industry, traditionally known for its meticulousness and precision, is undergoing a seismic shift.",
      link : "/66b08f27894800c0bcd4d114"
      },
]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full relative flex min-h-screen flex-col items-center shadow-xl">
        <Header classNameForBg="text-white fixed" />
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/frontPage.mp4" type="video/mp4" />
        </video>
        <div className="z-10 w-full flex items-center justify-center flex-grow px-4">
          <HomeVideoSlides/>
        </div>
      </div>

      <div className="p-5 mx-auto md:flex md:h-[100vh] items-center justify-between my-10 relative md:w-[90%] gap-10">
         <BlurFade delay={1} inView className='md:w-[60%] h-[20rem] md:h-[28rem] flex-shrink-0 my-14 sm:my-0' direction="right" xOffset={'100vh'}>
          <div className="h-full w-full overflow-hidden relative  rounded-3xl flex-shrink-0"
            style={{ boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)" }}
          >
             <Image src="https://d11wbp5a59q34o.cloudfront.net/public/main_page_whyus.jpg"  alt="whyus" fill style={{
                   objectFit: 'cover',
                 }}
                 className="-z-10"
               />
          </div>
          </BlurFade>  

            <div className="flex flex-col items-center justify-center">
              <FadeText
                className="text-center text-2xl font-medium"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 1, duration: 1 } },
                }}
                classN="text-center"
                text="Why Settle for Standard When You Can Experience Tailored Excellence for All Your Business Needs with AcctoVista? See What Sets Us Apart."
              />
             <Link href='/whyus'>
                 <FadeText
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 2, duration: 1 } },
                  }}
                  text="Why Us"
                  classN="px-2 py-1 text-center text-xl font-medium rounded-full w-[8rem] my-20  bg-slate-900 hover:bg-slate-800 text-white"
                />
             </Link>
            </div>
      </div>
      <Divider/>
      
      <div className="p-5 sm:mx-auto flex flex-col  md:flex-row gap-14 items-center justify-center relative">
         <Image
            src='https://d11wbp5a59q34o.cloudfront.net/public/industriesWeServeSection.png'
            alt="Industries We Serve"
            fill
            style={{
               objectFit: "cover"
            }}
            className="opacity-30 -z-20"
         /> 
            <IndustriesWeServeSection/>
            <AnimatedList />
      </div>

      <Divider className="mb-0"/>

      <h6 className="text-2xl font-medium my-10">Our Certificates</h6>
       <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
             <div className="h-[10rem] w-[10rem] relative rounded-full overflow-hidden">
                   <Image
                      src='https://d11wbp5a59q34o.cloudfront.net/public/certificates/AICPA.png'
                      alt="AICPA"
                      fill
                      style={{
                        objectFit : "cover"
                      }}
                      className="hover:scale-110 transform transition duration-300 ease-in-out"
                   />
             </div>
             <div className="h-[10rem] w-[10rem] relative rounded-full overflow-hidden">
                   <Image
                      src='https://d11wbp5a59q34o.cloudfront.net/public/certificates/GDPRCertifcate.png'
                      alt="AICPA"
                      fill
                      style={{
                        objectFit : "cover"
                      }}
                      className="hover:scale-110 transform transition duration-300 ease-in-out"
                   />
             </div>
             <div className="h-[10rem] w-[10rem] relative rounded-full overflow-hidden">
                   <Image
                      src='https://d11wbp5a59q34o.cloudfront.net/public/certificates/ISOCertificate.png'
                      alt="AICPA"
                      fill
                      style={{
                        objectFit : "cover"
                      }}
                      className="hover:scale-110 transform transition duration-300 ease-in-out"
                   />
             </div>
       </div>

       <div className="w-full relative mt-20 flex min-h-[100vh] flex-col items-center shadow-xl text-white">
         <video
           autoPlay
           loop
           muted
           className="absolute w-full h-full object-cover -z-10"
         >
           <source src="https://d11wbp5a59q34o.cloudfront.net/public/dataSecurityBg.mp4" type="video/mp4" />
         </video>
         <div className="w-[95%] flex-grow mx-auto flex flex-col md:flex-row gap-10 items-center pb-10">
            <h6 className="m-auto text-2xl md:text-3xl font-extrabold my-10 text-center px-1 md:text-left md:w-[30%] bg-black bg-opacity-25 rounded-2xl">Data Security Solutions for Absolute Confidentiality</h6>
           <div className="flex flex-col md:flex-row w-full gap-10">
               {dataSecurityList.map((dataSecurity, index) => (
                  <DataSecurityComponent key={index} heading={dataSecurity.heading} listItems={dataSecurity.listItems} delayForContainer={index} delayforSpan={ 1 + index} />
               ))}
           </div>
         </div>
       </div>
         
      <div className="w-full overflow-x-hidden relative flex flex-col items-center justify-center h-[70vh] ">
         <h5 className="font-medium text-2xl ">Our Team Review&apos;s</h5>
               <EmployeeReviewsScroll/>
      </div>

      <div className="w-full h-[105vh] p-5 sm:mx-auto flex flex-col items-center justify-center relative my-24 md:mt-0">
         <h2 className="text-2xl font-medium mt-10">AcctoVista&apos;s Offshore Solutions</h2>
         <p className="text-xl opacity-85 w-[95%] md:w-[70%] text-center my-10 mb-14">Optimal efficiency with our tailored offshore offerings, crafted to meet your unique business needs. Leverage our global expertise for superior performance and success.</p>
         <Image
            src='https://d11wbp5a59q34o.cloudfront.net/public/offshoreModelBG.png'
            alt="Offshore Model"
            fill
            style={{
               objectFit: "cover"
            }}
            className=" opacity-50 -z-20"
         /> 
         <div className="w-full h-full flex flex-col md:flex-row gap-14 justify-center">
          <div className="md:w-[40%] h-60% relative overflow-hidden flex flex-col">
             <div className="h-[15rem] w-[15rem] -z-20 bg-purple-700 blur-3xl absolute -right-[7rem] top-0 opacity-30"/>
             <span className="text-xl font-bold mx-auto my-8 opacity-90">Outsourcing Model</span>
             <OffshoreSolutionList faqs={outSourcingfaqs} />
          </div>

          <div className="md:w-[40%] h-60% relative overflow-hidden flex flex-col">
             <div className="h-[15rem] w-[15rem] -z-20 bg-purple-700 blur-3xl absolute -left-[7rem] top-0 opacity-30"/>
             <span className="text-xl font-bold mx-auto my-8 opacity-90 flex items-center gap-2">Partnership Model <Sparkles size={14} className="text-yellow-400"/></span>
             <OffshoreSolutionList faqs={partnerShipFaq} />
          </div>
         </div>

         <p className="flex items-center px-2 my-5 gap-5 text-left text-xl opacity-75"><Sparkles size={16} className="text-yellow-400 opacity-100 flex-shrink-0"/>Includes all the benfits mentioned in the outsourcing model.</p>
      </div>
      
      
       <div className="w-[95%] flex flex-col items-center justify-center my-40 lg:my-10 ">
        <Divider className="mb-0"/>
            <span className="text-2xl font-medium my-10">Read Blogs</span>
            <div className="w-full flex flex-wrap items-center justify-center gap-5">
               {blogData.map((blog, index) => (
                  <BlogCard key={index} img={blog.img} alt={blog.alt} title={blog.title} author={blog.author} date={blog.date} description={blog.description} link={blog.link}/>
               ))}
            </div>
       </div>
    </main>
  );
}

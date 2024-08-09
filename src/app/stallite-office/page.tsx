import { Divider } from "@/components/divider";
import { Header } from "@/components/header";
import DotPattern from "@/components/magicui/dot-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center h-screen items-center relative text-center">
        <Header classNameForBg="text-white fixed top-0" />
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/satelliteofficepage.mp4" type="video/mp4" />
        </video>
        <FadeText
          framerProps={{
            hidden: { opacity: 0, transition: { delay: 0.5 } },
            show: { opacity: 1, transition: { type: "spring", delay: 0.5 } },
          }}
          text="Expand Globally: Our KPO, Your Seamless Satellite Office in India!"
          direction="up"
          classN="backdrop-blur"
          className="text-4xl backdrop-blur-sm font-semibold w-[80%] mx-auto text-white px-2 brightness-200 text-center"
        />
      </div>
      <div className="w-[95%] lg:w-[80%] mx-auto my-4 py-8 tracking-wide relative">
          <h1 className="text-2xl font-semibold my-4">AcctoVista: Your Seamless Satellite Office Solution</h1>
          <p className="py-2">AcctoVista isn&apos;t just a partner in outsourcing; we can be your satellite office in India, providing you with all the advantages without the hassles. Let&apos;s explore how this innovative approach will benefit you and give you a competitive edge.</p>
          <h1 className="text-2xl font-semibold my-4">The Current Trend</h1>
          <p className="py-2">Many mid-sized CPA firms are opening satellite offices in India, particularly in cities like New Delhi, Ahmedabad, Mumbai, and Bangalore. This trend is driven by a shortage of quality staff in the USA and the need to reduce costs by hiring skilled professionals in India. However, this practice comes with significant long-term drawbacks:</p>
          <div className="flex flex-col md:flex-row items-center justify-center tracking-wide mt-8">
             <ul className="list-decimal ml-4 space-y-4 w-[85%] lg:w-[70%]">
               <li><strong>Increase in Rentals:</strong> Rising demand for office space leads to escalating rental costs.</li>
               <li><strong>Increase in Salary Demands:</strong> Over time, employees in India expect higher salaries, reducing cost savings.</li>
               <li><strong>High Administrative Costs:</strong> Managing a satellite office involves substantial administrative expenses.</li>
               <li><strong>Compliance Costs:</strong> Navigating India&apos;s complex regulatory environment requires significant resources.</li>
               <li><strong>Infrastructure Maintenance:</strong> Maintaining a physical office incurs ongoing costs for equipment and facilities.</li>
               <li><strong>Staff Training:</strong> Regular training programs are essential to keep your team updated.</li>
               <li><strong>Taxation Issues:</strong> Establishing a permanent presence in India exposes your firm to local taxes.</li>
             </ul>
             <div className="w-[20rem] h-[20rem] relative mt-8 md:mt-0"
             style={{boxShadow: "0 0 10px 2px rgba(0,0,0,0.2)"}}
             >
               <Image
                  src='https://d11wbp5a59q34o.cloudfront.net/public/benifitsOfAcctovista.jpg'
                  alt="Your Success is Our Goal"
                  fill
                  style={{
                     zIndex: 1,
                     objectFit: "contain",
                     
                  }}
               />
             </div>

          </div>
         <h1 className="text-2xl font-semibold mt-14 mb-8">The AcctoVista Advantage</h1>
         <p>Here&apos;s how AcctoVista can transform your business operations by acting as your satellite office:</p>
         <div className="flex items-center tracking-wide mt-8">
         <ul className="list-decimal ml-4 space-y-4 ">
            <li><strong>Cost Savings:</strong> Avoid the high costs of renting office space and maintaining infrastructure. We provide a fully equipped office environment tailored to your needs.</li>
            <li><strong>No Hiring Hassles:</strong> We handle recruitment and management, ensuring access to top talent without administrative burdens.</li>
            <li><strong>Seamless Training:</strong> Our team undergoes continuous training to stay updated with industry standards, saving you the cost and effort of training.</li>
            <li><strong>Compliance Management:</strong> We navigate the complex compliance landscape in India, freeing you from associated costs and risks.</li>
            <li><strong>Tax Efficiency:</strong> Partnering with us means you avoid the complications of Indian income tax assessments related to establishing a permanent office.</li>
         </ul>
          </div>   

      <h1 className="text-2xl font-semibold mt-14 mb-8">Your Strategic Advantage</h1>
      <p>Choosing AcctoVista as your satellite office offers a streamlined, cost-effective solution that ensures smooth and efficient operations. Here&apos;s how it puts you ahead of your competitors:</p>
         <div className="flex items-center tracking-wide mt-8">
         <ul className="list-decimal ml-4 space-y-4 ">
           <li><strong>Operational Efficiency:</strong> Focus on your core competencies while we handle the administrative and operational aspects.</li>
           <li><strong>Scalability:</strong> Easily scale your operations without worrying about infrastructure or staffing constraints.</li>
           <li><strong>Global Presence:</strong> Enhance your global footprint without the complexities of managing an international office.</li>
           <li><strong>Competitive Edge:</strong> Reduce costs and improve efficiency, giving you a significant advantage over competitors who manage their satellite offices independently.</li>
         </ul>
         </div>

         
      <h1 className="text-2xl font-semibold mt-14 mb-8">Make the Smart Choice</h1>
      <p>With AcctoVista as your satellite office, you gain all the benefits of an offshore team without the headaches of setting up and maintaining a physical presence in India. Let us handle the rest, so you can focus on what you do best.</p>

      <h2 className="text-3xl font-semibold my-8">Choose AcctoVista. Elevate your business. Lead the way.</h2>
   
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
   </div>
   <Divider/>
   <div className="w-full relative h-[50rem] overflow-hidden bg-black bg-opacity-50 flex flex-col gap-8 items-center justify-center">
            <Image 
            src='https://d11wbp5a59q34o.cloudfront.net/public/satelliteFooterImage.jpg'
            alt="Your Sucess is our goal."
            fill
            style={{
               objectFit: 'fill',
            }}
            className="-z-10"
            />
            <FadeText text="Uncover Insights: Browse Our Blogs and Stay Ahead" className="text-4xl font-bold flex text-white w-[95%] mx-auto text-center" direction="up"/>
            <Link href={"/blog"} className="mt-10"><FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay:1 }},
            }} text="Read Blogs" direction="up" className=" text-white px-8 brightness-200 text-center p-2 border hover:text-[1.04rem] hover:bg-black"/></Link>
         </div>
    </>
  );
};
export default Page;

import { AboutPageContent1, AboutPageContent2 } from "@/components/aboutpageContent";
import { Header } from "@/components/header";
import BlurIn from "@/components/magicui/blur-in";
import { FadeText } from "@/components/magicui/fade-text";
import SlightFlip from "@/components/magicui/flip-text";
import Image from "next/image";
import Link from "next/link";


const Page = () => {
 
  return (
    <>
        <div className="w-full flex flex-col justify-center h-screen items-center relative ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/about.mp4" type="video/mp4" />
        </video>
           <SlightFlip 
           className="text-2xl md:text-6xl justify-start text-white font-extrabold tracking-wide md:leading-[5rem]"
           word="Discover What Sets Us Apart" 
           />
      </div>
      <div className="w-full h-full overflow-hidden mt-10">
      <div className="w-full md:w-[80%] mx-auto backdrop-blur-lg read-only">
      {/* <DotPattern
        classNames={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      /> */}
        <div className="w-[95%] lg:w-[80%] mx-auto">
     
          <BlurIn className="font-normal md:text-base text-left my-10 mt-5 tracking-wide leading-loose" word="Acctovista stands out as a leader in outsourcing services, founded
            by industry experts. Our renowned expertise extends across various
            sectors, offering tailored solutions designed to meet the diverse
            needs of accounting firms, CPA firms, businesses, and organizations
            worldwide, including international clients across different
            jurisdictions. Our team of seasoned professionals combines technical
            proficiency with a commitment to innovation, leveraging cutting-edge
            technologies to drive transformative data solutions. In addition to
            traditional services such as Bookkeeping, Tax returns, and Assurance
            services, we integrate a comprehensive suite of conventional and
            technology-driven solutions." duration={0.3} />

          <BlurIn className="font-normal text-base text-left my-10 tracking-wide" word="This approach not only optimizes costs but also enhances operational
            efficiency, empowering our partners to achieve unparalleled levels
            of profitability. Discover how Acctovista can redefine your
            outsourcing expectations, regardless of your industry or location.
            On average, clients who partner with us achieve a cost reduction of
            40 to 50% by outsourcing their relevant portfolios of work to us.
            This substantial cost-saving is a testament to our efficiency and
            dedication to optimizing operational processes for our clients." duration={0.5} />

          <BlurIn className="font-normal text-base text-left my-10 tracking-wide" word="Our technology-driven solutions are not limited to Accounting,
            Finance, and Taxation. We also excel in providing a wide range of
            IT-enabled services, software migrations, and many other advanced
            solutions. This extensive in-house bundle of core services in
            Finance and Information Technology, offered conveniently in one
            place, not only accelerates the completion of assignments but also
            significantly reduces the overall costs for entities. By integrating
            these comprehensive services, we ensure that our clients benefit
            from both time and cost efficiencies, ultimately enhancing their
            business performance and profitability." duration={1} />
        </div>
        
        <AboutPageContent1 />
        <AboutPageContent2 />
     </div>
     
     </div>
         <div className="w-full relative h-[35rem] overflow-hidden bg-black bg-opacity-50 flex flex-col gap-8 items-center justify-center">
            <Image 
            src='https://d11wbp5a59q34o.cloudfront.net/public/careers/aboutWhyus.png'
            alt="why us"
            fill
            style={{
               objectFit: 'cover',
            }}
            className="-z-10"
            />
            <FadeText text="Now You've Explored About Us &ndash; Experience How We Propel Your Business Forward!" direction="up" className="flex text-xl lg:text-3xl text-white w-[80%] mx-auto brightness-200 text-center"/>
            
            <Link href={"/whyus"}><FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 1} },
               show: { opacity: 1, transition: { type: "spring", delay:1 }},
            }} text="See More" direction="up" className=" text-white px-8 brightness-200 text-center p-2 border"/></Link>
         </div>
    </>
  );
};
export default Page;

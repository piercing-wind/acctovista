import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import { Services } from "@/components/services";

const Page = () => {
  const flagForInternationalTax = [
    { country: "US", src: "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/USA.jpg" },
    { country: "CA", src: "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Canada.png" },
    {
      country: "UK",
      src: "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_the_United_Kingdom.png",
    },
    { country: "AU", src: "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_Australia.webp" },
    { country: "IN", src: "https://d11wbp5a59q34o.cloudfront.net/public/services/softwares/flags/Flag_of_India.png" },
  ];
  return (
    <>
      <div className="w-full flex flex-col justify-center h-screen items-center relative bg-black bg-opacity-40 ">
        <Header classNameForBg="text-white fixed top-0" />
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source
            src="https://d11wbp5a59q34o.cloudfront.net/public/services/cfoService.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-[95%] lg:w-[80%] mx-auto flex justify-center items-center text-center">
          <FadeText
            framerProps={{
              hidden: { opacity: 0, transition: { delay: 0.5 } },
              show: { opacity: 1, transition: { type: "spring", delay: 0.5 } },
            }}
            text="Our Virtual CFO Services"
            direction="up"
            className="text-5xl font-semibold text-white brightness-200 text-center mx-auto"
          />
        </div>
      </div>

      <div className="w-[95%] mx-auto my-20 lg:p-5 gap-10 flex flex-wrap justify-center items-center">
        <Services
          title="Virtual CFO Services"
          text1="Unlock expert financial planning and cash flow management with Virtual CFO services. Gain strategic insights to drive growth, accurate financial reporting, and budget analysis. Benefit from risk management and tailored solutions that help navigate financial complexities. Make informed decisions with proactive guidance. Experience the advantages of a dedicated CFO without the full-time cost."
          link="/virtual-cfo/cfo"
          img="https://d11wbp5a59q34o.cloudfront.net/public/services/virtualCFO.jpg"
          alt="Virtual CFO"
          flags={flagForInternationalTax}
        />
      </div>
    </>
  );
};
export default Page;

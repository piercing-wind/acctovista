import { Header } from "@/components/header";
import { FadeText } from "@/components/magicui/fade-text";
import ContactForm from "./contact";

export default function Page() {
      return (
         <>
         <div className="w-full overflow-x-hidden flex flex-col justify-center h-screen items-center relative ">
         <Header classNameForBg="text-white fixed top-0"/>
         <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-75 opacity-100 -z-10"
        >
          <source src="https://d11wbp5a59q34o.cloudfront.net/public/contact.mp4" type="video/mp4" />
        </video>
        <FadeText framerProps={{
               hidden: { opacity: 0, transition:{ delay : 0.5} },
               show: { opacity: 1, transition: { type: "spring", delay:0.5 }},
            }} text="Connect with Us" direction="up" classN="flex items-center justify-center leading-9" className="text-3xl mx-auto lg:text-5xl font-semibold text-white lg:px-8 brightness-200 text-center "/>
      </div>

      <div className="w-[95%] md:w-[80%] mx-auto flex flex-wrap md:flex-nowrap justify-center py-12 mt-4 gap-4">
         <div>
            <div className="max-w-xl flex flex-col gap-4 p-8 md:max-h-[40vmin]  justify-center shadow-md rounded-md">
               <h2 className="text-xl font-semibold w-full text-center py-2">Business Details</h2>            
               <h3><span className="font-semibold">Legal Name</span> : Acctovista Consulting LLP</h3>
               <h3><span className="font-semibold">Address</span> : 36b, Smile Avenue, Nangli Dispensary &#40; Vrindavan Gardens &#41;, Punjab Amritsar-143008 </h3>
               <h3><span className="font-semibold">Email</span> : info@acctovista.com</h3>
               <h3><span className="font-semibold">Phone</span> : +91 79866-67336</h3>
               <h3><span className="font-semibold">GSTIN</span> : 03ACGFA6754R1ZW</h3>
            </div>
         </div>
            <ContactForm/>
      </div>
      </>);
}
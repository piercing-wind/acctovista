import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/logo";
import Link from "next/link";
import Image from "next/image";
import { FaceBook, Instagram, Linkdin, Youtube } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FooterServiceList } from "@/components/footerServiceLink";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
   title: "Acctovitsa",
   metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://acctovista.com"),
   description:"Future Driven KPO; Leveraging Technology to enhance your business",
   applicationName: "Acctovitsa", 
   authors: [
     {
       name: "Sourabh",
       url: "https://www.linkedin.com/in/sourabh-sharma-8987451a2/",
     },
   ],
   generator: "Acctovista",
   referrer: "origin",
   creator: "Sourabh",
   publisher: "Acctovista",
   robots: {
     index: true,
     follow: true,
   },
   alternates: { canonical: "/" },
   twitter:{
      card : 'summary_large_image'
   },
   openGraph:{
      type : 'website',
      // url : website,
      title : "Acctovista",
      siteName : "Acctovista",
      images:[
         {
            url : "/opengraph-image.jpg",
            height : 630,  
            width : 1200,
            alt : "Welcome to Acctovista"
         }
      ],
      description : "Experience the best in AI with our comprehensive solutions. Generate stunning images with DALL-E and SDXL, create professional presentations from any document, transform text into high-quality audio, and quickly summarize PDFs. Enhance your productivity with our advanced AI tools.",
   },  
   other:{
      ["bingbot"]: "noarchive",
   }
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en"  className="w-full hide_scrollbar">
      <body className={cn("hide_scrollbar",inter.className)} >
         {children}
         <div className="w-full relative flex flex-col overflow-x-hidden">
            <Image
               src='https://d11wbp5a59q34o.cloudfront.net/public/footer.jpg'
               alt="footer"
               fill
               style={{
                  objectFit: 'cover',
                  zIndex: -1,
               }}
            />
         <div className="w-full border flex flex-col md:flex-row md:p-16 md:pl-14 gap-14 relative items-center overflow-hidden ">
           
           <div className="flex flex-col my-10 ">
            <Logo className="text-3xl" size={50} gap="gap-x-1"/>
            <div className="pl-0">
               <div className="my-5 opacity-75 flex flex-col gap-1">

                  <div className="flex mb-5">
                     <span className="font-semibold text-nowrap">USA Office: </span>
                     <div className="px-2">
                        <p className="text-sm text-nowrap">418, Broadway #4160,</p>
                        <p className="text-sm text-nowrap ">Albany, New York-12207.</p>
                     </div>
                        
                  </div>
                  <div className="flex">
                     <span className="font-semibold text-nowrap">India Office: </span>
                     <div className="px-2">
                        <p className="text-sm text-nowrap">Building 36 B, FGC,</p>
                        <p className="text-sm text-nowrap ">Road, Amritsar-143001,</p>
                        <p className="text-sm text-nowrap ">Punjab, India.</p>
                     </div>
                        
                  </div>
               </div>

               <div className="my-5 opacity-75 flex flex-col gap-1">

                  <p className="text-sm"><span className="font-semibold">Email: </span>&nbsp;<Link href="mailto:info@acctovista.com">info@acctovista.com</Link></p>
                  <p className="text-sm"><span className="font-semibold">Contact: </span>&nbsp;<Link href="tell:+16466654881">+1 &#40; 646 &#41; 665-4881</Link></p>
                  <p className="text-sm"><span className="font-semibold">Contact: </span>&nbsp;<Link href="tell:+917986667336">+91 79866-67336</Link></p>

               </div>
                  <span>Connect with Us</span>
               <div className="mt-5 flex gap-10">
                  <Linkdin />
                 <Link href="https://www.instagram.com/acctovista/"> <Instagram/></Link>
                 <Link href="https://www.youtube.com/@AcctovistaConsulting"> <Youtube/></Link>
                 <Link href="https://www.facebook.com/people/Acctovista-Consulting/61563638683925/?checkpoint_src=any"><FaceBook/></Link>
               </div>
            </div>   
            </div>

             <div className="flex flex-col md:flex-row gap-10 w-full lg:px-40">   
               <div className="flex flex-col ml-10 lg:ml-0 lg:items-center">
                  <span className="font-semibold opacity-90 mb-5" >Our Services</span>
             
                  <FooterServiceList />
               </div>
               <div className="flex flex-col ml-10 lg:ml-0 lg:items-center">
                  <span className="font-semibold opacity-90 mb-5" >Company</span>
                  <ul className="flex flex-col gap-2 opacity-80 text-nowrap">
                     <Link href="/about">About Us</Link>
                     <Link href="/contact-us">Contact Us</Link>
                     <Link href="/blog">Blog</Link>
                     <Link href="/careers">Careers</Link>
                  </ul>

               </div>
               <div className="flex flex-col items-start ml-10 lg:ml-32 lg:mx-32">
                  <span className="font-semibold opacity-90 mb-5 text-nowrap" >Other Address&apos;s</span>
                  <div className="opacity-80 flex">
                     <span className="font-semibold text-nowrap">Branch Office: </span>
                     <div className="px-2">
                        <p className="text-sm text-nowrap">64/179 Flat No. 2,</p>
                        <p className="text-sm text-nowrap ">Hoolaganj Kanpur-208001,</p>
                        <p className="text-sm text-nowrap ">Uttar Pardesh, India.</p>
                     </div>
                        
                  </div>
                  <div className="opacity-80 my-10 flex">
                     <span className="font-semibold text-nowrap">Branch Office: </span>
                     <div className="px-2">
                        <p className="text-sm">Building 10-B-36,</p>
                        <p className="text-sm text-nowrap ">Tilak Nagar, Bhilwara-311001,</p>
                        <p className="text-sm text-nowrap ">Rajasthan, India. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>  
            <span className="flex mx-auto text-sm sourabh">Acctovista Consulting LLP &#9400; 2024</span>    
            <span className="mb-2 flex mx-auto text-xs">All rights Reserved</span>    
       </div> 
      </body>
    </html>
  );
}

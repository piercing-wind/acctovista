import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Logo } from "@/components/logo";
import Link from "next/link";
import Image from "next/image";
import { FaceBook, Instagram, Linkdin, Youtube } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FooterServiceList } from "@/components/footerServiceLink";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";


   const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
   title: "Acctovitsa Consulting LLP",
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
      title : "Acctovista Consulting LLP",
      siteName : "Acctovista Consulting LLP",
      images:[
         {
            url : "https://d11wbp5a59q34o.cloudfront.net/public/opengraph-image.jpg",
            height : 630,  
            width : 1200,
            alt : "Welcome to Acctovista"
         }
      ],
      description : "Future Driven KPO; Leveraging Technology to enhance your business",
   },  
   other:{
      ["bingbot"]: "noarchive",
      'application/ld+json': JSON.stringify({
         "@context": "https://schema.org",
         "@type": "Organization",
         "name": "Acctovista Consulting LLP",
         "url": "https://acctovitsa.com/",
       }),
   }
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en"  className="w-full hide_scrollbar">
    <GoogleAnalytics  gaId="AW-11529014251"/>
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
            <Link href="/contact#contactform" className={`text-black text-center fixed z-50 bottom-4 right-4 md:hidden font-bold p-2 rounded-full flex items-center justify-center w-[10rem] bg-yellow-400 hover:bg-opacity-90 shadow-lg  `}>
             Request Service
            </Link>
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
                  <p className="text-sm"><span className="font-semibold">Contact: </span>&nbsp;<Link href="tell:+16467571155">+1 &#40; 646 &#41; 757-1155</Link></p>
                  <p className="text-sm"><span className="font-semibold">Contact: </span>&nbsp;<Link href="tell:+917986667336">+91 79866-67336</Link></p>

               </div>
                  <span>Connect with Us</span>
               <div className="mt-5 flex gap-10">
                 <Link target="_blank" href="https://www.linkedin.com/company/acctovista-consulting"><Linkdin /></Link>
                 <Link target="_blank" href="https://www.instagram.com/acctovista/"> <Instagram/></Link>
                 <Link target="_blank" href="https://www.youtube.com/@AcctovistaConsulting"> <Youtube/></Link>
                 <Link target="_blank" href="https://www.facebook.com/people/Acctovista-Consulting/61563638683925/?checkpoint_src=any"><FaceBook/></Link>
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
                     <span className="font-semibold opacity-90 my-5" >Policy</span>
                     <Link href="/privacy-policy ">Privacy Policy</Link>
                     <Link href="/terms-and-condition ">Terms & Condition</Link>
                     <Link href="/cancellation-refund-policy">Cancellation & Refund</Link>
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
                  {/* <div className="opacity-80 my-10 flex">
                     <span className="font-semibold text-nowrap">Branch Office: </span>
                     <div className="px-2">
                        <p className="text-sm">Building 10-B-36,</p>
                        <p className="text-sm text-nowrap ">Tilak Nagar, Bhilwara-311001,</p>
                        <p className="text-sm text-nowrap ">Rajasthan, India. </p>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>  
            <span className="flex mx-auto text-sm sourabh">Acctovista Consulting LLP &#9400; 2024</span>    
            <span className="mb-2 flex mx-auto text-xs">All rights Reserved</span>    
       </div> 
       <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1991783721336679');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1991783721336679&ev=PageView&noscript=1" />
        </noscript>
      </body>
    </html>
  );
}

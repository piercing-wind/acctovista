import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";



const ReviewCard = ({
   name,
   username,
   body,
 }: {
   name: string;
   username: string;
   body: string;
 }) => {
   return (
     <figure
       className={cn(
         "relative w-[25rem] cursor-pointer overflow-hidden rounded-xl border p-4",
         // light styles
         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
         // dark styles
         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
       )}
     >
       <div className="flex flex-row items-center gap-2">
         <div className="rounded-full h-8 w-8 bg-gradient-to-br from-purple-500 via-green-600 flex-shrink-0"/>
         <div className="flex flex-col">
           <figcaption className="text-sm font-medium">
             {name}
           </figcaption>
           <p className="text-xs font-medium">{username}</p>
         </div>
       </div>
       <blockquote className="mt-2 text-sm">{body}</blockquote>
     </figure>
   );
 };
 

export const Reviews=()=>{
   const reviews = [
      {
        name: "Metromax International Group",
        username: "@CPAfirm",
        body: "We are pleased to recommend AcctoVista for their exceptional expertise in US tax law, ensuring accurate and compliant filing of US tax returns for our expatriates at Metromax International Group, Singapore. Their timely and efficient service, coupled with personalized guidance tailored to our specific needs, minimized potential issues and ensured clarity throughout the process. AcctoVista's excellent communication, prompt responses, and proactive support further underscore their professionalism and commitment to delivering high-quality service. We confidently endorse Acctovista to other international companies needing reliable US tax filing assistance.",
      },
      {
        name: "A Leading CPA Firm based in Massachusetts",
        username: "@CPAfirm",
        body: "AcctoVista played a critical role as our team leader for NFP audits, Single audits, Yellow Book audits, and UFR filings. They adeptly managed a team of 2-3 individuals, providing thorough training and ensuring compliance with all regulatory standards. Their expertise and meticulous approach were instrumental in delivering precise audit reports and timely filings. We confidently recommend AcctoVista's services to any organization in need of a skilled and dedicated audit and compliance partner",
      },
      {
        name: "A Leading CPA Firm based in Los Angeles",
        username: "@CPAfirm",
        body: "AcctoVista efficiently managed our governmental audits, defined benefit plans, and NFP engagements, seamlessly taking over major responsibilities previously handled internally. Their expertise and dedication ensured the timely completion of critical tasks, earning our appreciation for their professional approach and high-quality results.",
      },
      {
        name: "A Leading CPA Firm based in Ohio, Associated with RSM Group.",
        username: "@CPAfirm",
        body: "AcctoVista handled our 401k audit expertly, even though it was a new area for them. They delivered exceptional results that we greatly appreciated, demonstrating their ability to adapt and excel in new audit areas. We highly recommend their services. ",
      },
      {
        name: "A Leading CPA Firm based in Florida",
        username: "@CPAfirm",
        body: "I greatly appreciate working with you! AcctoVista's team has been exceptionally professional and prompt in assisting me with my firm's workload. They have successfully resolved numerous special and complex tasks that have been highly beneficial to my firm.",
      },
      {
        name: "Experienced and reputed firms in Boston, Massachusetts.",
        username: "@CPAfirm",
        body: ` Dear Acctovista Team,\n
         I wanted to express my heartfelt appreciation for Acctovista and your team's outstanding work this tax season. Handling nearly 150 tax returns, from moderate to highly complex, across various entities, while seamlessly navigating different software platforms, demonstrates your exceptional expertise and dedication. Your professionalism and attention to detail have been invaluable to us. Thank you for your hard work and partnership.`,
      },
    ];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
return(
   <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-white">
   <Marquee pauseOnHover className="[--duration:20s]">
     {firstRow.map((review, index) => (
       <ReviewCard key={review.username + index} {...review} />
     ))}
   </Marquee>
   <Marquee reverse pauseOnHover className="[--duration:20s]">
     {secondRow.map((review, index) => (
       <ReviewCard key={review.username + index } {...review} />
     ))}
   </Marquee>
   <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
   <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
 </div>
)
}
import { ArrowUpRight, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
   img : string
   title : string
   author : string
   date : string
   description : string
   link : string
   alt?: string
}
export function formatDate(dateString: string): string {
   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
   const date = new Date(dateString);
   return date.toLocaleDateString(undefined, options);
 }


export const FrontPageBlogPreview = ( {img , title, author, date, description, link, alt=""}:Props) => {
   return (
      <div className="w-[95%] md:w-[40%] flex flex-col md:flex-row gap-5 rounded-lg overflow-hidden bg-gradient-to-tr from-black to-[#434343] bg-opacity-45 text-white brightness-125 lg:pr-4"
      style={{boxShadow: "0 0 5px 1px rgba(246, 135, 18,0.2)"}}
      >
         <div className="relative h-[14rem] lg:w-[16rem] flex-shrink-0 ">
            <Image
               src={img}
               alt={alt}
               fill
               style={{
                  objectFit: 'fill'
               }}
               className="hover:scale-105 transform transition duration-500 ease-in-out"
            />
         </div>
         <div className="p-2 relative">
            <h1 className="text-sm font-medium my-2 border-b border-neutral-500">{title}</h1>
           
           <div className="flex gap-x-4">
              <span className="opacity-70 text-sm flex items-center gap-x-2"><User size={15}/> {author}</span>
               <span className="opacity-70 text-sm flex items-center ">{date}</span>
            </div>
            <p className="opacity-70 text-xs my-2">{description}...</p>

            <Link href={link} className="relative md:absolute md:bottom-[5%] border w-full py-1 flex mt-3 items-center rounded-full px-4 font-medium">Continue Reading <ArrowUpRight size={17}/></Link>   
         </div>
      </div>
   )
}


export const BlogCard: React.FC<Props> = ({ img, title, author, date, description, link, alt = "" }) => {
   return (
     <div className="w-full md:w-[45%] lg:h-[15rem] flex flex-col md:flex-row gap-5 rounded-lg overflow-hidden bg-white shadow-lg transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl">
       <div className="relative h-[14rem] md:h-auto md:w-[16rem] flex-shrink-0">
         <Image
           src={img}
           alt={alt}
           fill
           style={{ objectFit: 'cover' }}
           className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
         />
       </div>
       <div className="p-6 flex flex-col justify-between">
         <div>
           <h1 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h1>
           <div className="flex gap-x-4 mb-3 text-gray-600">
             <span className="flex items-center gap-x-2"><User size={15} /> {author}</span>
             <span>{formatDate(date)}</span>
           </div>
           <p className="text-sm text-gray-700 mb-6">{description.slice(0, 120)}...</p>
         </div>
         <Link href={`/blog/${link}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
           Continue Reading <ArrowUpRight size={17} className="ml-2" />
         </Link>
       </div>
     </div>
   );
 };
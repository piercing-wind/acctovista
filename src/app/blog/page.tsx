import dynamic from 'next/dynamic';
import {blogs} from "@/lib/temp"
import { BlogCard } from '@/components/frontPageBlogPreview';
import { Header } from '@/components/header';
// const RichTextEditor = dynamic(() => import('@/components/richtextinput'), {
//    ssr: false,
//  });


const Page =async ()=>{
   // const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blog`,{
   //    method : 'GET',
   //    headers: {
   //       acctovista: process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
   //    }
   // });
   // const  blogs = await response.json();
   // console.log(blogs)
   return(
      <>
       <div className="w-full flex flex-col justify-center items-center relative ">
         <Header classNameForBg="text-white top-0 bg-neutral-950 bg-opacity-95"/>
       </div>

         <div className='w-[89%] mx-auto'>
         <h1 className="my-10 text-3xl font-bold opacity-80">Read Our Blog&apos;s</h1>
         </div>

         <div className="w-full flex flex-wrap items-center justify-center gap-5 px-4 my-10">
               {blogs.map((blog, index) => (
                  <BlogCard key={index} img={blog.opengraphImage} alt={blog.title} title={blog.title} author={blog.author} date={blog.date} description={blog.description} link={blog._id}/>
               ))}
         </div>

         {/* <RichTextEditor /> */}
      </>
      )
}
export default Page;
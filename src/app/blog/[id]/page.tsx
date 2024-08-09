import { Divider } from "@/components/divider";
import { formatDate } from "@/components/frontPageBlogPreview";
import { Header } from "@/components/header";
import { BlogObject } from "@/model/blog";
import { Metadata } from "next";
import Link from "next/link";


export async function generateStaticParams() {
   const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blog`,{
         method : 'GET',
         headers: {
            acctovista: process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
         }
      });
      const  blogs :BlogObject[] = await response.json();

      return blogs.map(({_id})=> _id).slice(0,30)
}

export async function generateMetadata({ params }: { params: { id: string } }) : Promise<Metadata>{
   const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blog?id=${params.id}`,{
      method : 'GET',
      headers: {
         acctovista: process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
      }
   })
   const blog = await response.json();
   return{
      title: blog.title,
      description: blog.description,
      openGraph:{
         images:[
            {
               url : blog.opengraphImage
            }
         ]
      }
   }
}

const Page=async ({ params }: { params: { id: string } })=>{
   const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blog?id=${params.id}`,{
      method : 'GET',
      headers: {
         acctovista: process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
      }
   })
   const blog = await response.json();
   const styledContent = `
    <style>
      .styled-content {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.8;
        color: #333;
      }
      .styled-content h1 {
        line-height: 1.2;
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
      }
      .styled-content h2, .styled-content h3, .styled-content h4, .styled-content h5, .styled-content h6 {
        margin-bottom: 1rem;
        font-weight: 700;
        color: #2c3e50;
      }
      .styled-content p {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
      }
      .styled-content ul, .styled-content ol {
        padding-left: 20px;
        margin-bottom: 1.5rem;
      }
      .styled-content ul {
        list-style-type: disc;
      }
      .styled-content ol {
        list-style-type: decimal;
      }
      .styled-content li {
        margin-bottom: 0.75rem;
      }
      .styled-content a {
        color: #3498db;
        text-decoration: none;
      }
      .styled-content a:hover {
        text-decoration: underline;
      }
      .styled-content blockquote {
        margin: 1.5rem 0;
        padding: 1rem 1.5rem;
        border-left: 5px solid #ccc;
        background-color: #f9f9f9;
        font-style: italic;
        color: #555;
      }
      .styled-content code {
        font-family: 'Courier New', Courier, monospace;
        background-color: #f4f4f4;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.9rem;
      }
      .styled-content pre {
        background-color: #f4f4f4;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        font-size: 0.9rem;
      }
      .styled-content table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1.5rem;
      }
      .styled-content th, .styled-content td {
        padding: 0.75rem;
        border: 1px solid #ddd;
        text-align: left;
      }
      .styled-content th {
        background-color: #f4f4f4;
        font-weight: bold;
      }
      .styled-content img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .styled-content strong {
        font-weight: 700; /* Use numeric value for better support */
        font-size: 1.1rem;
      }
    </style>
    <div class="styled-content">
      ${blog.content}
    </div>
  `;
   return (
      <>
      <div className="w-full flex flex-col justify-center items-center relative ">
         <Header classNameForBg="text-white top-0 bg-neutral-950 bg-opacity-95"/>
       </div>

      <div className="w-[95%] md:w-[50%] mx-auto">
         <div className="mb-5 space-y-10" dangerouslySetInnerHTML={{ __html: styledContent }} />
        <p className="text-center mx-auto text-neutral-600">٭ ٭ ٭ ٭ ٭ </p>

        <div className="flex flex-col my-4">
         <span className="opacity-80"><strong>Author:&nbsp; </strong>{blog.author}</span>
         <span className="opacity-80 text-sm"><strong>Published On:&nbsp; </strong>{formatDate(blog.date)}</span>
        </div>

        <div className="flex justify-center">
           <Link href="/blog" className="inline-block px-6 py-1 text-lg font-semibold text-white bg-gray-800 rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-gray-700 hover:-translate-y-1 active:bg-gray-900 active:translate-y-0">
             Back
           </Link>
         </div>
        <Divider className="my-16"/>
      </div>
      </>
   )
}
export default Page;
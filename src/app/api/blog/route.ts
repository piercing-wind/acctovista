import connectToMongoDB from "@/lib/mongodb"
import Blog from "@/model/blog"
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const header = req.headers.get("acctovista") 
    if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
         return NextResponse.json({message: "Unauthorized, You are not allowed to access this route."})
    }
   const {title, opengraphImage, content, description} = await req.json()
   if (!title) {
      return NextResponse.json({ message: "Title is required to create a blog post" });
    }
    if (!opengraphImage) {
      return NextResponse.json({ message: "OpenGraph Image is required to create a blog post" });
    }
    if (!content) {
      return NextResponse.json({ message: "Content is required to create a blog post" });
    }
    if (!description) {
      return NextResponse.json({ message: "Description is required to create a blog post" });
    }
   
   await connectToMongoDB()
   try {
      await Blog.create({ title, opengraphImage, content, description });
    } catch (error) {
      console.error('Error creating blog post:', error);
      return NextResponse.json({message: "Error creating blog post", error})
    }
   return NextResponse.json({message: "Blog post created successfully"})
}

export async function GET(req : Request) {
   const header = req.headers.get("acctovista")
   if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
      return NextResponse.json({message: "Forbidden, You are not allowed to access this route.", status: 401})
   }  

   const { searchParams } = new URL(req.url);
   const id = searchParams.get('id');
   await connectToMongoDB();

   try {
      if(!id){
         const blogs = await Blog.find({});
         return NextResponse.json(blogs);
      }else{
         const blog = await Blog.findById(id);
         if(!blog) return NextResponse.json({message: "No blog post found"})
         return NextResponse.json(blog);
      }
   } catch (error) {
       console.error('Error fetching blog posts:', error);
       return NextResponse.json({ message: "Error fetching blog posts", error });
   }
}

export async function PUT(req: Request) {
   const header = req.headers.get("acctovista");
   if (header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY) {
     return NextResponse.json({ message: "Unauthorized, You are not allowed to access this route." });
   }
 
   const { title, opengraphImage, content, description, id } = await req.json();
   await connectToMongoDB();
 
   const updateFields: any = {};
   if (title) updateFields.title = title;
   if (opengraphImage) updateFields.opengraphImage = opengraphImage;
   if (content) updateFields.content = content;
   if (description) updateFields.description = description;
 
   try {
     await Blog.findByIdAndUpdate(id, updateFields);
   } catch (error) {
     console.error('Error updating blog post:', error);
     return NextResponse.json({ message: "Error updating blog post", error });
   }
 
   return NextResponse.json({ message: "Blog post updated successfully" });
 }
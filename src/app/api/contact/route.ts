import connectToMongoDB from '@/lib/mongodb';
import Contact from '@/model/contact';
import { NextResponse } from 'next/server'
import mongoose from 'mongoose';

export async function POST(req : Request){
   const header = req.headers.get("acctovista") 
   if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
        return NextResponse.json({message: "Unauthorized, You are not allowed to access this route."})
   }
  const {name, email, subject, query} = await req.json()
  
  connectToMongoDB()
  try {
     await Contact.create({ name, email, subject, query});
   } catch (error) {
     console.error('Error Storing the Contact data:', error);
     return NextResponse.json({message: "Error Storing the Contact data", error})
   }
  return NextResponse.json({message: "Contact data stored successfully"},{status: 201})
}


export async function GET(req: Request) {
   const header = req.headers.get("acctovista");
   if (header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY) {
       return NextResponse.json({ message: "Unauthorized, You are not allowed to access this route." });
   }

   const url = new URL(req.url);
   const page = parseInt(url.searchParams.get('page') || '1', 10);
   const limit = 10;
   const skip = (page - 1) * limit;

   connectToMongoDB();
   const contacts = await Contact.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
   const totalContacts = await Contact.countDocuments({});

   return NextResponse.json({
       contacts,
       totalPages: Math.ceil(totalContacts / limit),
       currentPage: page
   });
}
export async function DELETE(req : Request){
   const header = req.headers.get("acctovista") 
   if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
          return NextResponse.json({message: "Unauthorized, You are not allowed to access this route."})
   }
   const url = new URL(req.url);
   const id = url.searchParams.get('id');
   if (!id) {
      return NextResponse.json({ message: "ID is required" });
    }
   connectToMongoDB()
   try {
      const objectId = new mongoose.Types.ObjectId(id);

      const result = await Contact.deleteOne({ _id: objectId });
      if(result.deletedCount === 0 || result === null){
         return NextResponse.json({message: "Contact data not found", status: 404})
      }
    } catch (error) {
      return NextResponse.json({message: "Error Deleting the Contact", error})
    }
   return NextResponse.json({message: "Contact data deleted successfully", status: 204})
}
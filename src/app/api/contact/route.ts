import connectToMongoDB from '@/lib/mongodb';
import Contact from '@/model/contact';
import { NextResponse } from 'next/server'

export async function POST(req : Request){
   const header = req.headers.get("acctovista") 
   if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
        return NextResponse.json({message: "Unauthorized, You are not allowed to access this route."})
   }
  const {name, email, subject, query} = await req.json()
  
  
  await connectToMongoDB()
  try {
     await Contact.create({ name, email, subject, query});
   } catch (error) {
     console.error('Error Storing the Career data:', error);
     return NextResponse.json({message: "Error Storing the Career data", error})
   }
  return NextResponse.json({message: "Career data stored successfully"},{status: 201})
}

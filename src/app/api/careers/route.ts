import connectToMongoDB from '@/lib/mongodb';
import Career from '@/model/careers';
import { NextResponse } from 'next/server'

export async function POST(req : Request){
   const header = req.headers.get("acctovista") 
   if(header !== process.env.NEXT_PUBLIC_ACCTOVISTA_KEY){
        return NextResponse.json({message: "Unauthorized, You are not allowed to access this route."})
   }
  const {name, email, countryCode, phone, jobProfile, customPosition, position, resume, fileKey, coverLetter} = await req.json()
  
  
  await connectToMongoDB()
  try {
     await Career.create({ name, email, countryCode, phone, jobProfile, customPosition, position, resume, fileKey, coverLetter });
   } catch (error) {
     console.error('Error Storing the Career data:', error);
     return NextResponse.json({message: "Error Storing the Career data", error})
   }
  return NextResponse.json({message: "Career data stored successfully"},{status: 201})
}

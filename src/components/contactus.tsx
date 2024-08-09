import Image from "next/image";
import { MotionDiv } from "./motiondiv";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <MotionDiv className="w-full py-10 flex-col relative flex my-24">
      <div className="absolute inset-y-0 left-[10%] h-[12rem] w-[12rem] bg-purple-600 blur-[100px] bg-opacity-20" />
      <div className="absolute inset-y-0 right-[10%] h-[12rem] w-[12rem] bg-cyan-400 blur-[100px] bg-opacity-20" />
      <div className="absolute bottom-0 right-[40%] h-[12rem] w-[12rem] bg-red-400 blur-[100px] bg-opacity-20" />
    
        <p className="text-lg font-semibold absolute md:relative -top-10 left-0 w-[92%] text-center py-4 mx-4 md:hidden">
          Stand Out and Focus on Your Goals with Our Expert Outsourcing Solutions
        </p>
      <div className="w-full lg:w-[60%] flex flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold my-2 hidden md:block">
          Stand Out and Focus on Your Goals with Our Expert Outsourcing Solutions
        </p>
        <h1 className="text-2xl font-semibold my-2">
          Ready to begin?
        </h1>
        <Link href="/contact" className="p-2 px-5 bg-slate-900 hover:bg-slate-800 rounded-3xl text-white mx-auto font-bold my-6">
            Consult Now
        </Link>
      </div>
      
      <div className="relative h-[15rem] w-[26rem] mx-auto">
        <Image
          src='https://d11wbp5a59q34o.cloudfront.net/public/peopleworkinginatable.png'
          alt="People Working in a Table"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      </div>
    </MotionDiv>
  );
}

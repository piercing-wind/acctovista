'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Client, LeadershipandExpertise, LongTermCommitment, TechnologyDriven } from "@/components/icons";
import Image from "next/image";

export const AboutPageContent1 = () => {
   const [ref1, inView1] = useInView({ threshold: 0.1 });
   const [ref2, inView2] = useInView({ threshold: 0.1 });
   const [ref3, inView3] = useInView({ threshold: 0.1 });
   return (
      <div className="my-40 flex flex-col 2xl:flex-row items-center justify-center gap-y-36 2xl:gap-y-0 2xl:gap-x-36">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={inView1 ? { opacity: 1, y: 0 ,rotate: 46} : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-orange-50 bg-opacity-50"
        style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <LeadershipandExpertise size={80} />
          <h1 className="text-xl font-bold tracking-wide my-2 mt-4">Personalised Engagment</h1>
          <p className="text-center brightness-200">We prioritize building strong relationships with business organizations worldwide through personalized service and tailored solutions.</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={inView2 ? { opacity: 1, y: 0, rotate: 46 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-blue-50 bg-opacity-50"
        style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <Image src='https://d11wbp5a59q34o.cloudfront.net/public/Proactivecommunication.svg' alt="Icon" height={100} width={100} />
          <h1 className="text-xl font-bold tracking-wide my-2">Proactive Communication</h1>
          <p className="text-center">Our approach ensures open lines of communication to foster transparency and responsiveness</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 20 }}
        animate={inView3 ? { opacity: 1, y: 0, rotate: 46 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-green-50 bg-opacity-50"
        style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <Client size={100} color="#00c4cc" />
          <h1 className="text-xl font-bold tracking-wide my-2">Client-Centric Focus</h1>
          <p className="text-center">We are committed to understanding and addressing the unique needs and challenges of each client.</p>
        </div>
      </motion.div>
    </div>

   )
}

export const AboutPageContent2 =()=>{

   const [ref4, inView4] = useInView({ threshold: 0.1 });
   const [ref5, inView5] = useInView({ threshold: 0.1 });
   const [ref6, inView6] = useInView({ threshold: 0.1 });

   return (
      <div className="my-40 flex flex-col 2xl:flex-row items-center justify-center gap-y-36 2xl:gap-y-0 2xl:gap-x-36">
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 20 }}
        animate={inView4 ? { opacity: 1, y: 0, rotate: 46 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-[17rem] h-[17rem] md:w-[20rem] md:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-orange-50 "
        style={{ boxShadow: "0 0 30px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <Image src='https://d11wbp5a59q34o.cloudfront.net/public/partners.svg' alt="partner" height={100} width={100} />
          <h1 className="text-xl font-bold tracking-wide my-2 text-center text-nowrap">Collaborative Partnerships</h1>
          <p className="text-center "> Emphasizing collaboration, feedback, and continuous improvement to exceed expectations.</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 20 }}
        animate={inView5 ? { opacity: 1, y: 0, rotate: 46 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[17rem] h-[17rem] md:w-[20rem] md:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-blue-50"
        style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <LongTermCommitment size={100} color="#8d5524" />
          <h1 className="text-xl font-bold tracking-wide my-2">Long-term Commitment</h1>
          <p className="text-center">Dedicated to fostering enduring partnerships based on trust, reliability, and delivering high-quality, value-added services.</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 20 }}
        animate={inView6 ? { opacity: 1, y: 0, rotate: 46 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-[17rem] h-[17rem] md:w-[20rem] md:h-[20rem] border flex flex-col items-center justify-center p-2 rounded-lg -rotate-[46deg] relative bg-green-50 bg-opacity-50"
        style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="-rotate-[46deg] absolute -top-8 -left-5 w-full h-full items-center justify-center flex flex-col">
          <TechnologyDriven size={100} />
          <h1 className="text-xl font-bold tracking-wide my-2">Technology Driven</h1>
          <p className="text-center">Transforming outsourcing with cutting-edge technology and tailored solutions worldwide.</p>
        </div>
      </motion.div>
   
      </div>
   )
}
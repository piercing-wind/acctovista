import { BiConfused } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { AddressingNeeds } from "./accordination";
type Challenge = {
   title: string;
   problem: string;
   solution: string;
 };
 
 type ProblemSolutionsFAQProps = {
   challenges: Challenge[];
 };
 
 const ProblemSolutionsFAQ: React.FC<ProblemSolutionsFAQProps> = ({ challenges }) => {
   return (
     <div className="w-full pb-20 ">
       <div className="accordion-group flex flex-col gap-y-4">
         {challenges.map((challenge, index) => (
           <AddressingNeeds
             key={index}
             title={challenge.title}
             className="text-xl font-semibold opacity-95 p-2 w-full text-left flex items-center justify-between border-b border-slate-500"
           >
             <div className="flex items-start my-2 pl-2">
               <BiConfused className="text-orange-600 flex-shrink-0" size={25} />
               <p className="text-base">&nbsp;<b>Problem:</b> &nbsp; {challenge.problem}</p>
             </div>
             <div className="flex items-start my-2 pl-2">
               <HiLightBulb className="text-yellow-400 flex-shrink-0" size={25} />
               <p className="text-base">&nbsp;<b>Solution:</b> &nbsp; {challenge.solution}</p>
             </div>
           </AddressingNeeds>
         ))}
       </div>
     </div>
   );
 };
 

 export default ProblemSolutionsFAQ;
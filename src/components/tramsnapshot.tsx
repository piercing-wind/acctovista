import NumberTicker from "./magicui/number-ticker"

interface TeamSnapshotProps {
   numberOfTickets: number;
   spanTexts: { value: number; text: string; unit?: string, preUnit? : string }[];
 }
export const TeamSnapshot: React.FC<TeamSnapshotProps> = ({ numberOfTickets, spanTexts }) => {
   return (
     <div className="w-full mb-10 flex flex-col items-center" style={{ backgroundColor: "#ddd4c8" }}>
       <h1 className="mx-20 text-2xl font-semibold text-nowrap mt-10">Team&apos;s Snapshot</h1>
       <div className="w-[95%] lg:w-[80%] mx-auto flex flex-wrap justify-center py-10">
         {Array.from({ length: numberOfTickets }).map((_, index) => (
           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
             <div className="w-full h-36 rounded-md flex flex-col items-center justify-center" style={{ boxShadow: "0 0 10px 0 #292759" }}>
               <span className="text-2xl tracking-wider my-2 flex items-center justify-center">
               {spanTexts[index].preUnit || ''}<NumberTicker value={spanTexts[index].value} className="font-bold" />{spanTexts[index].unit || '+'}
               </span>
               <span className="text-lg mx-2 text-center">
                 {spanTexts[index].text}
               </span>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
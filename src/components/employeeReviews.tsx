import { QuoteIcon } from "lucide-react"
import Image from "next/image"

export const EmployeeReviews = ({name, position, quote}: {name: string, position: string, quote : string}) => {
   return (          
      <div className="w-[18rem] h-[rem] flex-shrink-0 rounded-2xl overflow-hidden"
      style={{boxShadow: '0 0 10px 1px rgba(0,0,0,0.2)'}}
      >
         <div className="w-full h-[4rem] flex items-center px-2">
            <div className="relative h-[3rem] w-[3rem] rounded-full"><Image src='https://d11wbp5a59q34o.cloudfront.net/public/Logo.svg' alt="AcctoVista" fill style={{objectFit : 'cover'}}/></div>
            <div className="mx-4">
              <p className="text-base font-medium">{name}</p>
              <p className="text-sm font-medium opacity-70">{position}</p>
            </div>
         </div>
         <div className="px-4 pb-4 flex items-start rounded-lg">
            <div className="flex flex-col items-start justify-between">
              {/* Top Quote Icon */}
              <QuoteIcon
                className="opacity-80 flex flex-shrink-0"
                size={25}
                style={{ transform: 'scaleX(-1) scaleY(-1)' }}
              />
      
              {/* Text Content */}
              <p className="mt-2 mb-2">
               {quote}
              </p>
      
              {/* Bottom Quote Icon */}
              <QuoteIcon
                className="opacity-80 flex self-end flex-shrink-0"
                size={25}
              />
            </div>
          </div>
      </div>
   )
}
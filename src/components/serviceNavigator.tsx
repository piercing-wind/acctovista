'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CSS from "@/components/header.module.css";
import { usePathname } from 'next/navigation'

export const ServiceNavigator = () => {
   const pathname = usePathname()
   console.log(pathname)
   const link : { [key: string]: string } = {
      '/auditing-assurance/audit' : 'Audit',
      '/accounting/bookkeeping' : 'Book keeping',
      '/business-setup/business-setup-in-india' : 'Business Setup In India',
      '/ites/bpa' : 'Business RPA',
      '/ites/robust-data-analytics-ai' : 'Data Analytics',
      '/taxation/international-tax' : 'International Tax',
      '/ites/it-support' : 'IT Support',
      '/accounting/payroll' : 'Payroll',
      '/ites/software-development' : 'Personalized Software Development',
      '/taxation/tax-planning-consultancy' : 'Tax Planning Consultancy',
      '/taxation/tax-preparation-and-compliance' : 'Tax Preparation And Compliance',
      '/ites/software-migration' : 'Software Migration',
      '/taxation/transfer-pricing' : 'Transfer Pricing',
      '/virtual-cfo/cfo' : 'Virtual CFO',
   };
   return (
      <div className="hidden sm:w-[30%] sm:block mt-[4.7rem]">
      <div className="w-full flex flex-col justify-center px-4 gap-y-2 rounded-lg pb-4"
      style={{boxShadow: '0 0 10px 1px rgba(0,0,0,0.1)'}}
      >
         <h4 className="text-xl font-semibold my-4 mx-auto">Other Services</h4>
         {Object.entries(link).map(([href, text]) => (
            <Link 
               key={href} 
               href={href} 
               className={`text-lg font-medium opacity-85 flex items-center gap-5 ${CSS.serviceLink} ${pathname === href && 'text-yellow-500'}`}
            >
              <ArrowUpRight size={20} className="flex-shrink-0"/> {text}
            </Link>
         ))}
      </div>
      </div>
   );
}
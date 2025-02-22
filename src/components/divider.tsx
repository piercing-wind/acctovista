import CSS from '@/app/whyus/whyus.module.css'
import { cn } from '@/lib/utils'
export const Divider =({className}:{className?: string })=>{
   return(
   <div className={cn(`className border-b border-black w-[95%] lg:w-[60%] mx-auto mb-16 ${CSS.divider}`, className)}
   />
   )
}
export const DividerPlain =({className}:{className?: string })=>{
   return(
   <div className={cn(`className border-b border-black mx-auto mb-16 w-full `, className)}
   />
   )
}
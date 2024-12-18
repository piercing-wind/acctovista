import React from 'react'
import ProtectedPage from './protected'
import { Header } from '@/components/header'
import ContactData from '@/components/admin/table'

const page = async () => {
   const data = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/contact`,{
      method: 'GET',
      cache : 'no-cache',
      headers: {
         'acctovista': process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
      }
   })
   const contacts = await data.json()
  return (
   <ProtectedPage>
      <Header classNameForBg='bg-white'/>
      <div className='flex flex-col items-center justify-center my-14'>
      <ContactData contacts={contacts} />
      </div>
   </ProtectedPage>
  )
}

export default page

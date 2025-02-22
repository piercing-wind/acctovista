import React from 'react'
import ProtectedPage from './protected'
import { Header } from '@/components/header'
import ContactData from '@/components/admin/table'

const page = () => {

  return (
   <ProtectedPage>
      <Header classNameForBg='bg-white'/>
      <div className='flex flex-col items-center justify-center my-14'>
      <ContactData />
      </div>
   </ProtectedPage>
  )
}

export default page

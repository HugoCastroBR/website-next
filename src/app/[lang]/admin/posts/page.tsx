import AdminHeader from '@/components/organisms/adminHeader'
import Posts from '@/components/organisms/adminPostsCMS'
import CustomFooter from '@/components/organisms/customFooter'
import React from 'react'

const Page = () => {
  return (
    <div className='
    flex flex-col justify-between bg-gradient-to-t
    dark:to-black to-slate-100
    dark:from-blue-950 from-slate-300 w-full lg:pr-3 pr-0 '>
      <div>
        <AdminHeader />
      </div>
      <div className="xl:px-80 px-0 flex flex-col">
        <Posts />
      </div>
      <div>
      <CustomFooter />
      </div>
    </div>
  )
}

export default Page
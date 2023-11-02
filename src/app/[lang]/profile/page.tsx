import PageContainer from '@/components/templates/pageContainer'
import React from 'react'

const page = () => {
  return (
    <PageContainer>
      <div className='w-full h-full'>
        <div className='w-full h-full p-4'>
          <div className='my-2 min-h-screen'>
            <h1 className='text-3xl font-bold'>Profile</h1>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default page
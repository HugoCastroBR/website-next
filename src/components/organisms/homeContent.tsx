import React from 'react'
import CustomText from '../atoms/customText'

const HomeContent = () => {
  return (
    <main className='flex items-start justify-center  h-auto min-h-screen' >
      <CustomText
        className='text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Home'
      />
    </main>
  )
}

export default HomeContent
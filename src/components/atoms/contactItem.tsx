'use client'
import React from 'react'
import CustomText from './customText'
import { contactType } from '@/types'

const ContactItem = ({
  icon,
  title,
  url
}: contactType) => {
  return (
    <div className='flex justify-start m-1 cursor-pointer items-center
    hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-white
    p-2 rounded-md 
    transition duration-500 ease-in-out
    '
      onClick={() => window.open(url, '_blank')?.focus()}
    >
      <span className={`${icon} scale-150 text-xl`}></span>
      <CustomText
        className='
      text-center text-xl font-mono font-bold
      ml-4
      '
        text={title} />
      <div className='w-full flex items-center justify-end'>
        <CustomText
          className='
        text-lg font-mono font-bold
        ml-8 
        md:block hidden
        '
          text={url} />
      </div>
    </div>
  )
}

export default ContactItem
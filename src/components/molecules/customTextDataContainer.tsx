import React from 'react'
import CustomText from '../atoms/customText'

interface CustomTextDataContainerProps {
  children?: React.ReactNode
  className?: string
  title: string 
}

const CustomTextDataContainer = ({
  children,
  className,
  title,
}:CustomTextDataContainerProps) => {
  return (
    <div className='flex flex-col m-2'>
      <CustomText
        className='text-start dark:text-gray-100 text-gray-900 text-2xl font-mono font-bold'
        text={title}
      />
      {children}
    </div>
  )
}

export default CustomTextDataContainer
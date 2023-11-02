import React from 'react'
import CustomText from './customText'

interface CustomBitProps {
  text?: string,
  className?: string,
  index?: number
  onClick?: () => void
  children?: React.ReactNode
}
const CustomBit = ({
  text,
  index,
  className,
  onClick,
  children
}: CustomBitProps) => {
  if (!onClick) {
    return (
      <div key={index} className={`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${className}
      `}
      >
        {children ||
          <CustomText
            key={index}
            className='w-full text-gray-100 text-base font-mono font-bold'
            text={text || ''}
          />}
      </div>
    )
  } else {
    return (
      <button key={index} className={`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${className}
      `}
        onClick={onClick}
      >
        {children ||
          <CustomText
            key={index}
            className='w-full text-gray-100 text-base font-mono font-bold'
            text={text || ''}
          />}
      </button>
    )
  }
}

export default CustomBit
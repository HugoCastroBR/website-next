import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'
import Link from 'next/link'


interface MenuBtnProps {
  text: string
  arrow?: boolean
  className?: string
  isSelected?: boolean
  href?: string
  legacy?: boolean
}

const MenuBtn = ({text,arrow,className,isSelected,href,legacy=true}:MenuBtnProps) => {
  if(legacy){
    return (
      <a href={`#${href}`}>
        <CustomButton
          className={`flex items-center border-b-2 
          ${isSelected?'border-blue-600':
          'border-gray-800'} 
          dark:hover:bg-gray-700 hover:bg-slate-300
          dark:hover:border-blue-600 hover:border-blue-600 
          transition duration-500 ease-in-out mb-2 
          dark:text-gray-100 text-gray-900
          dark:hover:text-gray-100 hover:text-blue-600
          bg-transparent
          ${className}`}
          
        >
          <CustomText
            className='font-mono font-bold sm:text-lg text-xs'
            text={text}
          />
          {arrow && <CustomText
            className='dark:text-gray-300 text-gray-900 font-mono font-bold '
            text='>'
          />}
        </CustomButton>
      </a>
  )
  }else{
    return (
      <Link href={href || '/'}>
        <CustomButton
          className={`flex items-center border-b-2 
          ${isSelected?'border-blue-600':
          'border-gray-800'} 
          dark:hover:bg-gray-700 hover:bg-slate-300
          dark:hover:border-blue-600 hover:border-blue-600 
          transition duration-500 ease-in-out mb-2 
          dark:text-gray-100 text-gray-900
          dark:hover:text-gray-100 hover:text-blue-600
          bg-transparent
          ${className}`}
          
        >
          <CustomText
            className='font-mono font-bold sm:text-lg text-xs'
            text={text}
          />
          {arrow && <CustomText
            className='dark:text-gray-300 text-gray-900 font-mono font-bold '
            text='>'
          />}
        </CustomButton>
      </Link>
  )
  }
}

export default MenuBtn
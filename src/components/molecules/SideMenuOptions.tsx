import React from 'react'
import CustomSelector from '../atoms/customSelector'
import { supportedLanguages } from '@/utils/lang'
import DarkModeSwitch from './darkModeSwitch'



interface SideMenuOptionsProps {
  className?: string
}

const generateOptionsArray = () => {
  return Object.entries(supportedLanguages).map(([key, value]) => {
    return {
      option: value,
      value: key,
    }
  })
  
}

const adjustOptionsArray = () => {
  return generateOptionsArray().map((option) => {
    return {
      value: option.option.key,
      option: option.option.value,
    }
  })
}
const SideMenuOptions = ({className}:SideMenuOptionsProps) => {
  return (
    <div className=' flex justify-evenly items-center h-1/6  w-full mb-16'>
      <div className='flex flex-col h-4 justify-start items-center'>
        <label className='dark:text-white text-gray-900 font-mono font-bold text-xs mb-2'>
          Select Language:
        </label>
        <CustomSelector
          className={`form-select border-2 border-gray-900
          dark:bg-gray-800 bg-slate-100  dark:text-white 
          text-gray-900 hover:text-blue-600 bg-transparent appearance-none
          cursor-pointer dark:hover:bg-gray-700 hover:bg-transparent
        dark:hover:border-blue-600 hover:border-blue-600
          border-opacity-50 rounded-md px-2 py-1 "
          aria-label="Select Language ${className}`}
          options={adjustOptionsArray()}
        />
      </div>
      <DarkModeSwitch />
    </div>
  )
}

export default SideMenuOptions
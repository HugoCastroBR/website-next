import React from 'react'
import CustomText from './../atoms/customText';
import { $t } from '@/utils/lang';

const CustomNavBar = () => {
  return (
    <nav className="
    navbar navbar-expand-lg navbar-light bg-light border-b-2
    h-4 w-screen flex justify-center items-center px-12 pb-2
    border-gray-900 text ">
      <div className="">
        <CustomText
          className='navbar-brand  font-mono font-bold text-xs
      dark:text-gray-300 text-gray-900 '
          text={$t('navbar.brand')}
        />
      </div>
    </nav>
  )
}

export default CustomNavBar
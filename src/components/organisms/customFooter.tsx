import React from 'react'
import CustomText from '../atoms/customText'
import $t from '@/utils/lang'

const CustomFooter = () => {
  return (
    <footer className='flex justify-center h-8 items-center dark:bg-blue-900 bg-slate-100'>
        <CustomText 
        className='navbar-brand  font-mono font-bold text-xs
      dark:text-gray-300 text-gray-900'
        text={`${$t('footer.copyright')} \n v0.22 Unstable Version `}
        />
    </footer>
  )
}

export default CustomFooter
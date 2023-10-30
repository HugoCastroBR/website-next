import React from 'react'
import CustomText from '../atoms/customText'
import $t from '@/utils/lang'

const CustomFooter = () => {
  return (
    <footer className='flex w-full justify-center h-8 items-center dark:bg-blue-900 bg-slate-100 px-4'>
        <CustomText 
        className='footer-brand  font-mono font-bold text-xs
        dark:text-gray-300 text-gray-900 align-middle text-center'
        text={`${$t('footer.copyright')} \n v0.31 Unstable Version `}
        />
    </footer>
  )
}

export default CustomFooter
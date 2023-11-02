import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { $t } from '@/utils/lang';

const AboutSection = () => {
  return (
    <ContainerBox id='aboutMe' className='flex flex-col justify-start items-start'>
      <CustomText
        className='text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text={$t('home.aboutTitle')}
      />
      <CustomText
        text={$t('home.aboutSubTitle')}
        className='text-start dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold'
      />
      <CustomText
        className='text-start dark:text-gray-300 text-gray-700 text-lg font-sans font-normal'
        text={$t('home.aboutText')}
      />
    </ContainerBox>
  )
}

export default AboutSection
import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'
import MenuBtn from '../molecules/menuBtn'
import { $t } from '@/utils/lang';


const buttons = [
  {
    text:$t('home.About'),
    href:'aboutMe'
  },
  {
    text:$t('home.Experiences'),
    href:'experiences'
  },
  {
    text:$t('home.Projects'),
    href:'projects'
  },
  {
    text:$t('home.Blog'),
    href:'blog'
  },
  {
    text:$t('home.Contact'),
    href:'contact'
  },
]

const GenerateButtons = () => {
  return buttons.map((button,index) => {
    return (
      <MenuBtn
        key={index}
        text={button.text}
        className='w-100 flex h-10 items-center justify-center '
        href={button.href}
      />
    )
  })
}


const HeaderLinks = () => {
  return (
    <div className=' w-4/6 h-full flex justify-end mx-2 ml-10 px-6 z-20  '>
      {GenerateButtons()}
    </div>
  )
}

export default HeaderLinks
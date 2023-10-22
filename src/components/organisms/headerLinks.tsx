import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'
import MenuBtn from '../molecules/menuBtn'
import { $t } from '@/utils/lang';


const buttons = [
  {text:$t('home.About')},
  {text:$t('home.Experiences')},
  {text:$t('home.Projects')},
  {text:$t('home.Blog')},
  {text:$t('home.Contact')},
]

const GenerateButtons = () => {
  return buttons.map((button,index) => {
    return (
      <MenuBtn
        key={index}
        text={button.text}
        className='w-1/5 flex  h-10 items-center justify-center '
      />
    )
  })
}


const HeaderLinks = () => {
  return (
    <div className=' w-4/6 h-full flex mr-2'>
      {GenerateButtons()}
    </div>
  )
}

export default HeaderLinks
import React from 'react'
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

const buttonsRouter = [
  {
    text:$t('home.About'),
    href:'/#aboutMe'
  },
  {
    text:$t('home.Experiences'),
    href:'/#experiences'
  },
  {
    text:$t('home.Projects'),
    href:'/#projects'
  },
  {
    text:$t('home.Blog'),
    href:'/#blog'
  },
  {
    text:$t('home.Contact'),
    href:'/#contact'
  },
]

const GenerateButtons = (linksRouter=false) => {

  if(linksRouter){
    return buttonsRouter.map((button,index) => {
      return (
        <MenuBtn
          legacy={false}
          key={index}
          text={button.text}
          className='w-100 flex h-10 items-center justify-center '
          href={button.href}
        />
      )
    })
  }
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

interface HeaderLinksProps {
  linksRouter?: boolean
}
const HeaderLinks = (
  {linksRouter}:HeaderLinksProps
) => {
  return (
    <div className=' w-4/6 h-full flex justify-end mx-2 ml-10 px-6 z-20  '>
      {GenerateButtons(true)}
    </div>
  )
}

export default HeaderLinks
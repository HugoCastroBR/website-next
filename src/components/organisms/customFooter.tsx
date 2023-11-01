import React from 'react'
import CustomText from '../atoms/customText'
import $t from '@/utils/lang'
import { Divider } from '@mantine/core'
import Link from 'next/link'
import { contactType } from '@/types'
import ContactItem from '../atoms/contactItem'

const CustomFooter = () => {

  const listOfContacts: contactType[] = [

    {
      icon: 'i-mdi-linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hugocastrobr'
    },
    {
      title: 'Email',
      icon: 'i-mdi-email',
      url: 'mailto:hugocastrohc@outlook.com'
    },
    {
      icon: 'i-mdi-github',
      title: 'Github',
      url: 'https://github.com/HugoCastroBR'
    },
    {
      title: 'Whatsapp',
      icon: 'i-mdi-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=5532999523931'
    },
    {
      icon: 'i-mdi-instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/_whereishugo_'
    },
  ]

  return (
    <footer className='flex w-full flex-col justify-center items-center bg-transparent px-4 pt-12'>
      <Divider className='w-full' />
      <div className='flex w-full justify-between py-2 items-center'>
        <div className='sm:flex hidden flex-col items-center w-1/3 mx-2'>
          <Link href='/'>
            <CustomText
              text="Home"
              className='font-mono font-bold text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='#about'>
            <CustomText
              text="About"
              className='font-mono font-bold  text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='#projects'>
            <CustomText
              text="Projects"
              className='font-mono font-bold  text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='/en/blog'>
            <CustomText
              text="Blog"
              className='font-mono font-bold  text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='#contact'>
            <CustomText
              text="Contact"
              className='font-mono font-bold  text-base dark:text-white text-gray-900'
            />
          </Link>
        </div>
        <div className='sm:flex hidden flex-col text-center items-center w-1/3 mx-2'>
          <CustomText
            text='Powered by Next.js'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='Hosted on Vercel'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='Components by MantineUI'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='Styled by TailwindCSS'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='Icons by MIU'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='Fonts by Google Fonts'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
          <CustomText
            text='States by Redux Toolkit'
            className='font-mono font-bold text-sm dark:text-white text-gray-900'
          />
        </div>
        <div className='sm:flex hidden flex-col w-1/3 mx-2 items-center'>
          <Link href='https://github.com/HugoCastroBR'>
            <CustomText
              text='Made with ❤️ by @HugoCastroBR'
              className='font-mono font-bold text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='https://github.com/HugoCastroBR/website-next'>
            <CustomText
              text='Next repository on Github'
              className='font-mono font-bold text-base dark:text-white text-gray-900'
            />
          </Link>
          <Link href='https://github.com/HugoCastroBR/website-api'>
            <CustomText
              text='API repository on Github'
              className='font-mono font-bold text-base dark:text-white text-gray-900'
            />
          </Link>
        </div>
      </div>
      <Divider className='w-full sm:flex hidden' />
      <div className='flex justify-center w-full pt-4'>
        {listOfContacts.map((contact, index) => {
          return (
            <Link key={index} href={contact.url}>
              <span className={`${contact.icon} text-4xl mx-1 dark:text-white text-gray-900`} ></span>
            </Link>
          )
        })}
      </div>
      <div className='p-4'>
        <CustomText
          className='footer-brand  font-mono font-bold text-xs
          dark:text-gray-300 text-gray-900 align-middle text-center my-2'
          text={`${$t('footer.copyright')} \n v0.31 Unstable Version `}
        />
      </div>
    </footer>
  )
}

export default CustomFooter
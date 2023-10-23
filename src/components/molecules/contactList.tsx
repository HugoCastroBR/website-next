import React from 'react'
import { contactType } from '@/types'
import ContactItem from '../atoms/contactItem'


const listOfContacts:contactType[] = [

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

const ContactList = () => {

  return (
    <div className='flex flex-col flex-wrap w-full h-full justify-evenly p-2 overflow-hidden'>
        {listOfContacts.map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            title={contact.title}
            url={contact.url}
          />
        ))}
    </div>
  )
}

export default ContactList
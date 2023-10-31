import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import ContactList from '../molecules/contactList'

const ContactSection = () => {
  return (
    <ContainerBox id="contact" className='flex flex-col justify-start items-start'>
      <CustomText
        className='text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Contact' />
      <ContactList />
    </ContainerBox>
  )
}

export default ContactSection

import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const DashBoardSection = () => {

  return (
    <section className='pl-2 pr-3'>
        <ContainerBox className='flex flex-col w-full'>
        <CustomText
          className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
          text='DashBoard' 
        />
      </ContainerBox>
    </section>
  )
}

export default DashBoardSection
import React from 'react'
import { Accordion } from '@mantine/core';
import CustomText from '../atoms/customText';


interface AccordionContainerProps {
  children: React.ReactNode
  value: string
  duration?: number
  title : string
}

const AccordionTittle = (title:string) => {
  return (
    <CustomText
      text={title}
      className='font-mono font-bold sm:text-lg text-xs'
    />
  )
}

const AccordionContainer = (
  {
    children,
    value,
    duration,
    title
  }: AccordionContainerProps 
) => {
  return (
    <Accordion transitionDuration={duration || 300}>
      <Accordion.Item value={value}>
        <Accordion.Control >
          {AccordionTittle(title)}
        </Accordion.Control>
        <Accordion.Panel>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionContainer
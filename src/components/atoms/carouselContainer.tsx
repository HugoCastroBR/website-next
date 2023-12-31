import React from 'react'
import { Carousel } from '@mantine/carousel';
import CustomText from './customText';


interface CarouselContainerProps {
  items: React.ReactNode[]
}
const CarouselContainer = (
  {
    items
  }
    : CarouselContainerProps
) => {
  return (
    <Carousel
      className='w-full h-full px-10'
      slideSize="30%"
      slideGap={{ base: 'sm', sm: 'sm' }}
      controlSize={40}
      nextControlIcon={
        <span className='i-mdi-arrow-right-bold-circle scale-150 text-3xl 
    text-blue-600 dark:text-white'>
        </span>}
      previousControlIcon={
        <span className='i-mdi-arrow-left-bold-circle scale-150 text-3xl
    text-blue-600 dark:text-white'>
        </span>
      }
      loop
      withIndicators
    >
      {items?.length ? items.map((item, index) => (
        <Carousel.Slide key={index} className='h-96 '>
          {item}
        </Carousel.Slide>
      ))
        :
        <CustomText
          text='No posts found'
        />
      }
      {/* ...other slides */}
    </Carousel>
  )
}

export default CarouselContainer
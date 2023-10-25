import React from 'react'
import { Carousel } from '@mantine/carousel';


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
    className='w-full h-full px-4'
    slideSize="18%"
    slideGap={{ base: 0, sm: 'sm' }}
    controlSize={40}
    controlsOffset={20}
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
    {items.map((item, index) => (
      <Carousel.Slide key={index} className='h-96 '>
          {item}
      </Carousel.Slide>
    ))}
    {/* ...other slides */}
  </Carousel>
  )
}

export default CarouselContainer
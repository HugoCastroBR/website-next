import React from 'react'
import AboutSection from './aboutSection'
import ExperiencesSection from './experiencesSection'
import ProjectsSection from './projectsSection'
import BlogSection from './blogSection'
import ContactSection from './contactSection'

const HomeContent = () => {
  return (
    <main className='flex flex-col items-start justify-start  
    h-auto min-h-screen p-2' >
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}

export default HomeContent
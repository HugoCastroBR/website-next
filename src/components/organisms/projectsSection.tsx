import React from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import RepositoryCard from '../atoms/repositoryCard'
import ListReposGithub from '../molecules/listReposGithub'

const ProjectsSection = () => {
  return (
    <ContainerBox id="projects" className='flex flex-col justify-start items-start'>
      <CustomText
        className='text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold'
        text='Last Projects'/>
      <ListReposGithub/>
    </ContainerBox>
  )
}

export default ProjectsSection
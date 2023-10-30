'use client'
import React, { useEffect } from 'react'
import RepositoryCard from '../atoms/repositoryCard'
import { getUserRepositories } from '@/api/githubApi'
import ContainerBox from '../atoms/containerBox'
import CollapseContainerBox from '../atoms/collapseContainerBox'

type Repo = {
  id: number
  name: string
  language:string
  html_url: string
}

const ListReposGithub = () => {

  const [repos, setRepos] = React.useState<Repo[]>([])
  const [expandInfos, setExpandInfos] = React.useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const response = await getUserRepositories('hugocastrobr')
      console.log(response)
      setRepos(response)
    })()
  },[])

  const renderRepos = () => {
    return repos?.map((repo,index) => {
      return(
        <RepositoryCard 
        title={repo.name} 
        language={repo.language} 
        repoUrl={repo.html_url}
        key={index}
    />
      )
  })
  }


  return (
    <CollapseContainerBox 
      className={`flex flex-wrap justify-evenly w-full py-4 ${expandInfos ? 'h-auto' : 'h-72'}`} 
      renderFunction={renderRepos}
      isOpen={expandInfos}
      onClick={() => setExpandInfos(!expandInfos)}
      />
  )
}

export default ListReposGithub
'use client'
import React, { useEffect } from 'react'
import RepositoryCard from '../atoms/repositoryCard'
import { getUserRepositories } from '@/api/githubApi'
import CollapseContainerBox from '../atoms/collapseContainerBox'
import CustomText from '../atoms/customText'
import Link from 'next/link'
import useStore from '@/hooks/useStore'
import { AppHandlerNotification } from '@/store/actions'

type Repo = {
  id: number
  name: string
  language: string
  html_url: string
}

const ListReposGithub = () => {

  const [repos, setRepos] = React.useState<Repo[]>([])
  const [expandInfos, setExpandInfos] = React.useState<boolean>(false)
  const {dispatch} = useStore()

  useEffect(() => {
    (async () => {
      try {
        const response = await getUserRepositories('hugocastrobr')
        setRepos(response)
      } catch (error) {        
        dispatch(AppHandlerNotification('Error loading from github',{
          notificationType: 'error',
        }))
      }
    })()
  }, [])

  const renderRepos = () => {
    if(!repos?.length) return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <span className='
          i i-mdi-alert-circle-outline py-2 my-4
          dark:text-gray-100 text-gray-900
          text-6xl text-center' 
        >
        </span>
        <CustomText
          text='Error to load repositories'
          className='dark:text-gray-100 text-gray-900 font-bold
          text-2xl font-mono text-center'
        />
        <Link href='https://github.com/HugoCastroBR'>
          <CustomText
            text='But you can still see my projects here'
            className='text-center mt-2 font-medium text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer underline'
          />
        </Link>
      </div>
    )
    return repos?.map((repo, index) => {
      return (
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
      disabled={!repos?.length}
    />
  )
}

export default ListReposGithub
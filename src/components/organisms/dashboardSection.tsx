'use client'
import React, { useEffect } from 'react'
import ContainerBox from '../atoms/containerBox'
import CustomText from '../atoms/customText'
import { Button, Divider, Avatar } from '@mantine/core';
import useStore from '@/hooks/useStore';
import { getOnlyInitials } from '@/utils/textHandlers';
import { getStatistics } from '@/api';
import { convertSecondsToMinutes } from '@/utils/dateHandlers';

const DashBoardSection = () => {


  const { states } = useStore()
  const [uptime, setUptime] = React.useState(0)
  const [totalPosts, setTotalPosts] = React.useState(0)
  const [totalComments, setTotalComments] = React.useState(0)
  const [totalUsers, setTotalUsers] = React.useState(0)

  const loadStatistics = async () => {
    const res = await getStatistics()
    setUptime(res.uptime)
    setTotalPosts(res.totalPosts)
    setTotalComments(res.totalComments)
    setTotalUsers(res.totalUsers)
  }

  useEffect(() => {
    loadStatistics()
  }, [])

  return (
    <section className='pl-2 pr-3'>
      <ContainerBox className='flex flex-col w-full min-h-screen'>
        <CustomText
          className='text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold pb-4 pt-4'
          text='DashBoard'
        />
        <Divider />
        <div className='py-4 flex w-full  items-center'>
          <Avatar size={80}>
            {getOnlyInitials(states.Auth.user.name)}
          </Avatar>
          <div className='flex flex-col'>
            <CustomText
              className='text-start dark:text-gray-200 text-gray-800 text-xl font-semibold ml-4'
              text={states.Auth.user.name}
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text={states.Auth.user.email}
            />

            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-sm font-medium ml-4'
              text={`Role: ${states.Auth.user.isAdmin ? 'Admin' : 'User'}`}
            />
          </div>
        </div>
        <Divider />
        <div className='py-4'>
          <div className='flex flex-col border-2 rounded dark:border-gray-500 border-gray-900 py-4'>
            <CustomText
              className='text-start dark:text-gray-100 text-gray-900 text-2xl font-mono font-bold pb-4 pt-4 pl-4'
              text='About'
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text='This is a simple blog made with Next.js and Mantine.'
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text='It has a simple dashboard to manage the posts, comments and users.'
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text='It also has a simple authentication system.'
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text='It uses a simple store to manage the states.'
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text='It uses a simple api to manage the data.'
            />
          </div>
          <div className='flex flex-col border-2 rounded dark:border-gray-500 border-gray-900 py-4 my-2'>
            <div className='flex w-full justify-between items-center pr-4'>
              <CustomText
                className='text-start dark:text-gray-100 text-gray-900 text-2xl font-mono font-bold pb-4 pt-4 pl-4'
                text='Statistics'
              />
              <Button onClick={loadStatistics}>
                Refresh
                <span className='i-mdi-refresh text-lg ml-2'></span>
              </Button>
            </div>
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text={`Uptime: ${convertSecondsToMinutes(uptime)} minutes`}
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text={`Total Posts: ${totalPosts}`}
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text={`Total Comments: ${totalComments}`}
            />
            <CustomText
              className='text-start dark:text-gray-300 text-gray-700 text-base font-medium ml-4'
              text={`Total Users: ${totalUsers}`}
            />


          </div>
        </div>
      </ContainerBox>
    </section>
  )
}

export default DashBoardSection
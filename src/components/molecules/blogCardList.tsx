/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import BlogCard from '../atoms/blogCard'
import { Pagination, Group, Loader, Select } from '@mantine/core';
import Link from 'next/link';
import { getPosts } from '@/api';
import { PostSetIsLoading, AddPosts, PostSetTotalPages, PostSetCurrentPage, AppHandlerNotification, PostSetSearchText } from '@/store/actions';
import CustomText from '../atoms/customText';
import useStore from '@/hooks/useStore';
import { calculateReadingTime } from '@/utils/textHandlers';
import SearchInput from './searchInput';


const BlogCardList = () => {

  const { states, dispatch } = useStore()
  const [order, setOrder] = React.useState('desc')
  const [orderBy, setOrderBy] = React.useState('createdAt')

  const HandlerChangePage = (page: number) => {
    dispatch(PostSetCurrentPage(page))
  }

  const getPostsData = async () => {
    try {
      dispatch(PostSetIsLoading(true))
      const res = await getPosts({
        page: states.Post.currentPage,
        itemsPerPage: 10,
        search: states.Post.searchText,
        order: order as 'asc' | 'desc',
        orderBy: orderBy,
      })
      dispatch(AddPosts(res.data))
      dispatch(PostSetTotalPages(res.totalPages))
      setPagePosts(res.data)
    } catch (error) {
      console.log(error)
    }
    dispatch(PostSetIsLoading(false))
  }


  useEffect(() => {
    dispatch(PostSetIsLoading(true))
    dispatch(PostSetCurrentPage(1))
    dispatch(PostSetSearchText(''))
  }, [])
  useEffect(() => { getPostsData() }, [states.Post.currentPage])
  useEffect(() => { getPostsData() }, [states.Post.searchText])
  useEffect(() => { getPostsData() }, [order])
  useEffect(() => { getPostsData() }, [orderBy])

  const ErrorComponent = () => {
    return (

      <div className='flex flex-col items-center pt-24 w-full h-screen'>
        <span className='
          i i-mdi-alert-circle-outline
          dark:text-gray-100 text-gray-900
          text-6xl text-center

        '></span>
        <CustomText
          text='No posts found'
          className='
          text-2xl font-mono text-center
          font-bold dark:text-gray-100 text-gray-900
        '/>
      </div>
    )
  }

  if (states.Post.isLoading) {
    return (
      <div className="py-4 mr-20 w-full sm:mr-16 flex flex-col justify-start h-full min-h-screen">
          <div className='h-full w-full flex justify-start items-end mb-4 mx-10 flex-wrap sm:flex-nowrap'>
            <div className='flex flex-col'>
              <CustomText
                text='Posts'
                className='text-3xl font-mono font-bold dark:text-gray-100 text-gray-900'
              />
              <SearchInput
                handlerSearchChange={(searchText) => {
                  dispatch(PostSetSearchText(searchText))
                }}
              />
            </div>
            <div className='flex h-full w-full flex-wrap'>
              <Select
                label='Order by'
                className='sm:w-48 w-72 sm:mx-2'
                value={orderBy}
                onChange={(value) => setOrderBy(value || 'createdAt')}
                data={[
                  { value: 'createdAt', label: 'Date' },
                  { value: 'title', label: 'Title' },
                ]}
              />
              <Select
                label='Order'
                className='sm:w-48 w-72 sm:mx-2'
                value={order}
                onChange={(value) => setOrder(value || 'asc')}
                data={[
                  { value: 'asc', label: 'Ascending' },
                  { value: 'desc', label: 'Descending' },
                ]}
              />
            </div>
          </div>
          <div className='w-full flex justify-center pt-32 ml-10'>
            <Loader size='lg'/>
          </div>
      </div>
    )
  }
  
  if (states.Post.posts.length === 0) {

    return (
      <div className="py-4 mr-20 w-full sm:mr-16 flex flex-col justify-start h-full min-h-screen">
          <div className='h-full w-full flex justify-start items-end mb-4 mx-10 flex-wrap sm:flex-nowrap'>
            <div className='flex flex-col'>
              <CustomText
                text='Posts'
                className='text-3xl font-mono font-bold dark:text-gray-100 text-gray-900'
              />
              <SearchInput
                handlerSearchChange={(searchText) => {
                  dispatch(PostSetSearchText(searchText))
                }}
              />
            </div>
            <div className='flex h-full w-full flex-wrap'>
              <Select
                label='Order by'
                className='sm:w-48 w-72 sm:mx-2'
                value={orderBy}
                onChange={(value) => setOrderBy(value || 'createdAt')}
                data={[
                  { value: 'createdAt', label: 'Date' },
                  { value: 'title', label: 'Title' },
                ]}
              />
              <Select
                label='Order'
                className='sm:w-48 w-72 sm:mx-2'
                value={order}
                onChange={(value) => setOrder(value || 'asc')}
                data={[
                  { value: 'asc', label: 'Ascending' },
                  { value: 'desc', label: 'Descending' },
                ]}
              />
            </div>
          </div>
          <div className='w-full flex justify-center pt-8 ml-10'>
            <ErrorComponent/>
          </div>
      </div>
    )
  }


  const renderPosts = () => {
    try {
      return (
        <div className="py-4 mr-20 w-full sm:mr-16 flex flex-col justify-start h-full min-h-screen">
          <div className='h-full w-full flex justify-start items-end mb-4 mx-10 flex-wrap sm:flex-nowrap'>
            <div className='flex flex-col '>
              <CustomText
                text='Posts'
                className='text-3xl font-mono font-bold dark:text-gray-100 text-gray-900'
              />
              <SearchInput
                handlerSearchChange={(searchText) => {
                  dispatch(PostSetSearchText(searchText))
                }}
              />
            </div>
            <div className='flex h-full w-full flex-wrap'>
              <Select
                label='Order by'
                className='sm:w-48 w-72 sm:mx-2'
                value={orderBy}
                onChange={(value) => setOrderBy(value || 'createdAt')}
                data={[
                  { value: 'createdAt', label: 'Date' },
                  { value: 'title', label: 'Title' },
                ]}
              />
              <Select
                label='Order'
                className='sm:w-48 w-72 sm:mx-2'
                value={order}
                onChange={(value) => setOrder(value || 'asc')}
                data={[
                  { value: 'asc', label: 'Ascending' },
                  { value: 'desc', label: 'Descending' },
                ]}
              />
            </div>
          </div>
          {states.Post.posts.map((blogCard: { id: React.Key | null | undefined; authorName: string; title: string; subtitle: string; createdAt: string | number | Date; content: string; imageUrl: any; }) => {
            return (
              <Link href={`/en/blog/${blogCard.id}`} key={blogCard.id}>
                <BlogCard
                  key={blogCard.id}
                  author={blogCard.authorName}
                  title={blogCard.title}
                  subtitle={blogCard.subtitle}
                  date={new Date(blogCard.createdAt).toLocaleDateString()}
                  time={`${calculateReadingTime(blogCard.content).toFixed(0)}`}
                  imageUrl={blogCard.imageUrl || ''}
                />
              </Link>
            )
          })}
          <Pagination.Root total={states.Post.totalPages} onChange={HandlerChangePage}>
            <Group gap={2} justify="center" pl={50}>
              <Pagination.Previous />
              <Pagination.Items
              />
              <Pagination.Next
              />
            </Group>
          </Pagination.Root>
        </div>
      )
    } catch (error) {
      dispatch(AppHandlerNotification('404: No Posts Found', {
        notificationType: 'error',
      }))
      return (
        <ErrorComponent />
      )
    }
  }

  return (
    renderPosts()
  )
}

export default BlogCardList

function setPagePosts(data: import("@/api").getPostsType[]) {
  throw new Error('Function not implemented.');
}

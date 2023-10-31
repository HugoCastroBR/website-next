'use client'
import React, { useEffect } from 'react'
import BlogCard, { BlogCardProps } from '../atoms/blogCard'
import { Pagination, Group, Loader } from '@mantine/core';
import Link from 'next/link';
import { getPosts } from '@/api';
import { PostSetIsLoading, AddPosts, PostSetTotalPages, PostSetCurrentPage, AppHandlerNotification } from '@/store/actions';
import CustomText from '../atoms/customText';
import useStore from '@/hooks/useStore';
import { calculateReadingTime } from '@/utils/textHandlers';




const BlogCardList = () => {

  const { states, dispatch } = useStore()

  const HandlerChangePage = (page:number) => {
    dispatch(PostSetCurrentPage(page))
  }

  const getPostsData = async () => {
    try {
      const res = await getPosts({
        page: states.Post.currentPage,
        itemsPerPage: 10
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
  }, [])
  useEffect(() => {getPostsData()}, [states.Post.currentPage])
  useEffect(() => {getPostsData()}, [states.Post.isLoading])

  if (states.Post.isLoading) {
    return (
      <Loader />
    )
  }
  if (states.Post.posts.length === 0) {

    return (
      <CustomText
        text='No posts found'
      />
    )
  }

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

  const renderPosts = () => {
    try {
      return (
        <div className="py-4 mr-20 w-full sm:mr-16">
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
      dispatch(AppHandlerNotification('404: No Posts Found',{
        notificationType: 'error',
      }))
      return (
        <ErrorComponent/>
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

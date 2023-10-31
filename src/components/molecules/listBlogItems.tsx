'use client'
import React, { useEffect } from 'react'
import BlogItem from './blogItem'
import CarouselContainer from '../atoms/carouselContainer';
import useStore from '@/hooks/useStore';
import { getPosts, getPostsType } from '@/api';
import { AddPosts, AppHandlerNotification, PostSetIsLoading } from '@/store/actions';
import CustomText from '../atoms/customText';
import { Loader } from '@mantine/core';


const NoItemsFound = () => {
  return (
    <div className='flex flex-col h-90 py-10 justify-center items-center'>
      <span className='
        i i-mdi-alert-circle-outline py-2 my-4
        dark:text-gray-100 text-gray-900
        text-6xl text-center
      ' ></span>
      <CustomText
        text='No posts found!'
        className='
        dark:text-gray-100 text-gray-900 font-bold
        text-2xl font-mono text-center
      '/>
    </div>
  )
}


const generateBlogItems = (posts: getPostsType[]) => {


  if (posts.length > 0) {
    return posts.map((post, index) => {
      return (
        <BlogItem
          key={index}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
          id={post.id}
          authorName={post.authorName}
          imageUrl={post.imageUrl || ''}
          subtitle={post.subtitle}
          totalComments={post.totalComments}
          published={post.published}
        />
      )
    })
  }


}


const ListBlogItems = () => {
  const { states, dispatch } = useStore()

  const getPostsData = async () => {
    try {
      dispatch(PostSetIsLoading(true))
      const res = await getPosts({
        page: states.Post.currentPage,
        itemsPerPage: 10
      })
      dispatch(AddPosts(res.data))
    } catch (error) {
      dispatch(AppHandlerNotification('404: No Posts Found', {
        notificationType: 'error',
      }))
    }
    dispatch(PostSetIsLoading(false))
  }

  useEffect(() => {
    getPostsData()
  }, [])

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

  if (!states.Post.posts.length) {
    return (
      <NoItemsFound />
    )
  }


  return (
    <CarouselContainer
      items={generateBlogItems(states.Post.posts) || []}
    />
  )
}

export default ListBlogItems
'use client'
import { commentType, postType, userType } from '@/types'
import React, { useEffect } from 'react'
import BlogItem from './blogItem'
import CarouselContainer from '../atoms/carouselContainer';
import useStore from '@/hooks/useStore';
import { getPosts, getPostsType } from '@/api';
import { AddPosts, PostSetIsLoading } from '@/store/actions';
import CustomText from '../atoms/customText';
import { Loader } from '@mantine/core';




const generateBlogItems = (posts: getPostsType[]) => {

  if(Object.entries(posts).length === 0){
    return(
      [
        <CustomText
          key={1}
          text='No posts found'
        />
      ]
    )
  }
  return posts.map((post,index) => {
    return(
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


const ListBlogItems = () => {
  const {states,dispatch} = useStore()

  const getPostsData = async () => {
    try {
      dispatch(PostSetIsLoading(true))
      const res = await getPosts(1)
      dispatch(AddPosts(res.data))
    } catch (error) {
      console.log(error)
    }
    dispatch(PostSetIsLoading(false))
  }

  useEffect(()=>{
    getPostsData()
  },[])

  if(states.Post.isLoading){
    return(
      <Loader/>
    )
  }
  if(states.Post.posts.length === 0){
    return(
      <CustomText
        text='No posts found'
      />
    )
  }

  return (
    <CarouselContainer
      items={generateBlogItems(states.Post.posts)}
    />
  )
}

export default ListBlogItems
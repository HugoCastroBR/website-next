'use client'
import React, { useEffect } from 'react'
import BlogCard, { BlogCardProps } from '../atoms/blogCard'
import { Pagination, Group, Loader } from '@mantine/core';
import Link from 'next/link';
import { getPosts } from '@/api';
import { PostSetIsLoading, AddPosts } from '@/store/actions';
import CustomText from '../atoms/customText';
import useStore from '@/hooks/useStore';
import { calculateReadingTime } from '@/utils/textHandlers';




const BlogCardList = () => {

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
    <div className="py-4">
      {states.Post.posts.map((blogCard) => {
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
     <Pagination.Root total={10} onChange={
          (currentPage) => console.log(currentPage)
        }>
          <Group gap={2} justify="center">
            <Pagination.Previous />
            <Pagination.Items 
            />
            <Pagination.Next
            />
          </Group>
      </Pagination.Root>
    </div>
  )
}

export default BlogCardList
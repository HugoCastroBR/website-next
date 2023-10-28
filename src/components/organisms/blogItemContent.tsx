import { postType } from '@/types';
import React, { use, useEffect } from 'react'
import ContainerBox from '../atoms/containerBox';
import BlogItemHeader from '../molecules/blogItemHeader';
import BlogItemComments from '../molecules/blogItemComments';
import useStore from '@/hooks/useStore';
import { getOnePost } from '@/api';
import { PostSetIsLoading, PostSetCurrentPost } from '@/store/actions';
import { Loader } from '@mantine/core';

interface BlogItemContentProps {
  id:number;
}

const BlogItemContent = ({id}:BlogItemContentProps) => {

  const {states,dispatch} = useStore()

  const getPostData = async () => {
    try {
      const res = await getOnePost(id)
      dispatch(PostSetIsLoading(false))

      dispatch(PostSetCurrentPost(res))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(PostSetIsLoading(true))
    getPostData()
  },[])

  if(states.Post.isLoading){
    <Loader/>
  }

  return (
    <>
      <ContainerBox className='flex flex-col w-full h-full min-h-screen'>
        <div className='w-full h-full p-4'>
          <BlogItemHeader post={states.Post.currentPost}/>
          <div className='my-2 min-h-screen'>
            <div dangerouslySetInnerHTML={{__html:states.Post.currentPost.content}} />
          </div>
          <BlogItemComments
            comments={states.Post.currentPost.comments || []}
            totalComments={states.Post.currentPost.totalComments || 0}
          />
        </div>
      </ContainerBox>
    </>
  )
}

export default BlogItemContent
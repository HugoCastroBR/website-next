/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ContainerBox from '../atoms/containerBox';
import BlogItemHeader from '../molecules/blogItemHeader';
import BlogItemComments from '../molecules/blogItemComments';
import useStore from '@/hooks/useStore';
import { getComments, getOnePost, postComment, postCommentType } from '@/api';
import { PostSetIsLoading, PostSetCurrentPost, CommentSetComments, CommentSetIsLoading, CommentSetTotalPages } from '@/store/actions';
import { Group, Loader, Pagination } from '@mantine/core';
import { commentType } from '@/types';

interface BlogItemContentProps {
  id:number;
}

const BlogItemContent = ({id}:BlogItemContentProps) => {

  const {states,dispatch} = useStore()

  const getPostData = async () => {
    try {
      const res = await getOnePost(id)
      dispatch(PostSetCurrentPost(res))
      dispatch(PostSetIsLoading(false))
    } catch (error) {
      console.log(error)
    }
  }

  const getCommentsData = async (page:number) => {
    try {
      console.log(id)
      const res = await getComments(page,id)
      console.log(res.data)
      dispatch(CommentSetComments(res.data || []))
      dispatch(CommentSetTotalPages(res.totalPages))
      dispatch(CommentSetIsLoading(false))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(CommentSetIsLoading(true))
    dispatch(PostSetIsLoading(true))
    getPostData()
    getCommentsData(1)
  },[])

  useEffect(() => {
    dispatch(CommentSetIsLoading(true))
    getCommentsData(states.Comment.currentPage)
  },[states.Comment.currentPage])


  const postCommentData = async (data:postCommentType) => {
    try {
      const res = await postComment(data)
      getCommentsData(states.Comment.currentPage)
    } catch (error) {
      console.log(error)
    }
  }

  const HandlerPostComment = ({
    postId,
    content
  }:postCommentType) => {
    postCommentData({
      postId,
      content
    })
  }

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
            postId={states.Post.currentPost.id}
            isLoading={states.Comment.isLoading}
            comments={states.Comment.comments as unknown as commentType[]}
            totalComments={states.Post.currentPost.totalComments ?? 0}
            newComment={HandlerPostComment}
            isAuth={states.Auth.isAuth}
            authorName={states.Auth.user.name!} // Use non-null assertion operator to assert that authorName is not undefined
          />
          {states.Comment.comments.length > 0 &&
            <Pagination.Root total={states.Comment.totalPages} onChange={
              (currentPage) => {
                dispatch(CommentSetIsLoading(true))
                getCommentsData(currentPage)
              }
            }>
              <Group gap={2} justify="center">
                <Pagination.Previous />
                <Pagination.Items 
                />
                <Pagination.Next
                />
              </Group>
            </Pagination.Root>
          }
          
        </div>
      </ContainerBox>
    </>
  )
}

export default BlogItemContent
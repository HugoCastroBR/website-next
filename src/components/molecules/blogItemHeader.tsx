'use client'
import { postType } from '@/types'
import { getOnlyInitials, calculateReadingTime } from '@/utils/textHandlers'
import { Avatar, CopyButton, Tooltip, ActionIcon, rem, Divider } from '@mantine/core'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import React from 'react'
import CustomText from '../atoms/customText'
import { getPostsType } from '@/api'


interface BlogItemHeaderProps{
  post:getPostsType
}

const BlogItemHeader = ({post}:BlogItemHeaderProps) => {

  const [currentUrl, setCurrentUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className='flex flex-col w-full'>
          <CustomText
            className="text-xs font-light italic text-gray-700 dark:text-gray-400"
            text={`Posted at ${new Date(post.createdAt).toDateString()} · Last updated at ${new Date(post.updatedAt).toDateString()}`}
          />
          <CustomText 
            text={post.title}
            className="mt-1 lg:text-3xl md:text-2xl sm:text-xl
            text-base font-bold w-full"
          />
          <CustomText 
            text={post.subtitle}
            className="mt-2 lg:text-lg md:text-base text-sm
            font-medium w-full text-gray-700 dark:text-gray-400"
          />
          <div className='flex w-full items-center mt-2'>
            <Avatar size='md'>{getOnlyInitials(post.authorName)}</Avatar>
            <div className='ml-2 flex flex-col '>
              <CustomText
                className="text-base font-semibold"
                text={post.authorName}
              />
              <CustomText
                className="text-sm font-light"
                text={`${calculateReadingTime(post?.content || '').toFixed(0)} min read`}
              />
            </div>
          </div>
          <div className='flex w-full'>
            <div className='mt-4 mr-2 flex justify-center items center'>
                <CopyButton value={currentUrl || ''} timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? 'URL Copied' : 'Copy URL'} withArrow position="right">
                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                      {copied ? (
                        <IconCheck style={{ width: rem(20) }} />
                      ) : (
                        <IconCopy style={{ width: rem(20) }} />
                      )}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <span className='i-mdi-comment-outline
                text-lg text-gray-500 dark:text-gray-200'
              ></span>
              <CustomText
                text={String(post.totalComments)}
                className='ml-1 text-sm font-semibold text-gray-500 dark:text-gray-200'
              />
            </div>
            
          </div>
          <Divider my="sm" />
        </div>
  )
}

export default BlogItemHeader
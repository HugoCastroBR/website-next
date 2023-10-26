import React from 'react'
import { Avatar, Blockquote, Divider } from '@mantine/core'
import CustomText from '../atoms/customText'
import { getOnlyInitials } from '@/utils/textHandlers';

interface CommentProps{
  id:number;
  authorName:string;
  text:string;
  createdAt:string;
}
const CommentBlock = ({
  id,
  authorName,
  text,
  createdAt
}:CommentProps
) => {
  return (
    <Blockquote color="rgba(0, 0, 0, 1)"
      radius={0} iconSize={20} mt="sm"
      p={4} pb={6}
    >
      <div className="flex flex-col ml-2">
        <div className="flex my-2 items-center">
          <Avatar size='md'>{getOnlyInitials(authorName)}</Avatar>
          <CustomText
            className="ml-2 text-base font-semibold text-gray-800 dark:text-gray-300"
            text={authorName}
          />
        </div>
        <CustomText
          text={text}
          className='text-sm font-medium text-gray-800 dark:text-gray-300'
        />
        <CustomText
          text={createdAt}
          className='text-xs italic font-normal mt-2 text-gray-700 dark:text-gray-400'
        />
      </div>
    </Blockquote>
  )
}

export default CommentBlock
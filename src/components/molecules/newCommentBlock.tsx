import React from 'react'
import { Avatar, Blockquote, Button, Divider } from '@mantine/core'
import CustomText from '../atoms/customText'
import { getOnlyInitials } from '@/utils/textHandlers';

interface InputCommentProps{
  id:number;
  authorName:string;
}

const NewCommentBlock = ({
  id,
  authorName
}:InputCommentProps) => {
  return (
    <div>
      <Blockquote 
        color="rgba(0, 0, 0, 1)"
        radius={0} iconSize={20} mt="sm"
        p={4} pb={6}
      >
        <div className="flex my-2 items-center">
          <Avatar size='md'>{getOnlyInitials(authorName)}</Avatar>
          <CustomText
            className="ml-2 text-base font-semibold text-gray-800 dark:text-gray-300"
            text={authorName}
          />
        </div>
        <form className="flex flex-col w-full items-end">
          <textarea
            className="w-full p-2 text-sm font-medium text-gray-800 dark:text-gray-300
            bg-gray-100 dark:bg-gray-700 rounded-md resize-none"
            placeholder="Write a comment..."
          />
          <Button
            className='mt-2'
            color="blue"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Blockquote>
    </div>
  )
}

export default NewCommentBlock
'use client'
import { commentType, postType, userType } from '@/types'
import React from 'react'
import BlogItem from './blogItem'


const users: userType[] = [
  {
    id: 1,
    email: 'user1@example.com',
    name: 'User One',
    isAdmin: false,
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
  },
  {
    id: 2,
    email: 'user2@example.com',
    name: 'User Two',
    isAdmin: false,
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
  },
  {
    id: 3,
    email: 'user3@example.com',
    name: 'User Three',
    isAdmin: false,
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
  },
  {
    id: 4,
    email: 'user4@example.com',
    name: 'User Four',
    isAdmin: false,
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
  },
];

const comments: commentType[] = [
  {
    id: 1,
    content: 'This is a comment by User One. It is important to consider JavaScript\'s role in building modern web applications.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 1,
    postId: 1,
  },
  {
    id: 2,
    content: 'User Two shares insights about JavaScript\'s impact on web development. It has transformed the way we build interactive websites.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 2,
    postId: 2,
  },
  {
    id: 3,
    content: 'Comment by User Three. It is important to consider JavaScript\'s role in building modern web applications.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 3,
    postId: 3,
  },
  {
    id: 4,
    content: 'User Four discusses the significance of JavaScript in the era of Progressive Web Apps (PWAs). PWAs leverage JavaScript to create fast and responsive web applications that work offline. It\'s a game-changer for user experience. JavaScript is at the heart of this revolution.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 4,
    postId: 4,
  },
];

const postsMock: postType[] = [
  {
    id: 1,
    title: 'The Role of JavaScript in Modern Web Development',
    content: 'JavaScript is a versatile and powerful scripting language that can be used both on the client-side and server-side. It allows for dynamic and interactive web applications, making it a fundamental tool for web development. User One shares their perspective on the importance of JavaScript in modern web development.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 1,
    author: users[0],
    comments: [comments[0]],
  },
  {
    id: 2,
    title: 'JavaScript: The Backbone of Web Development',
    content: 'From a front-end developer\'s perspective, JavaScript is the core technology for creating interactive and responsive user interfaces. With frameworks like React, Angular, and Vue.js, JavaScript has transformed web development. User Two discusses the significance of JavaScript as the backbone of web development.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 2,
    author: users[1],
    comments: [comments[1]],
  },
  {
    id: 3,
    title: 'The Evolution of JavaScript',
    content: 'JavaScript has come a long way since its early days. It is now a versatile and indispensable language for both front-end and back-end development. With the introduction of ES6 and modern frameworks, JavaScript has made development faster and more efficient. User Three shares their perspective on the evolution of JavaScript in this post.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 3,
    author: users[2],
    comments: [comments[2]],
  },
  {
    id: 4,
    title: 'JavaScript in the Era of Progressive Web Apps',
    content: 'User Four discusses the significance of JavaScript in the era of Progressive Web Apps (PWAs). PWAs leverage JavaScript to create fast and responsive web applications that work offline. It\'s a game-changer for user experience. JavaScript is at the heart of this revolution.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 4,
    author: users[3],
    comments: [comments[3]],
  },
  {
    id: 5,
    title: 'The Power of JavaScript Libraries',
    content: 'JavaScript has a rich ecosystem of libraries and frameworks that simplify web development. User Five explores the power of JavaScript libraries like jQuery, lodash, and D3.js. These libraries enhance the development process and enable developers to create amazing web applications.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 1,
    author: users[0],
    comments: [comments[0]],
  },
  {
    id: 6,
    title: 'Mastering Asynchronous Programming in JavaScript',
    content: 'One of the key challenges in JavaScript development is dealing with asynchronous programming. User Six shares tips and techniques for mastering asynchronous operations with promises, async/await, and callbacks. With the right approach, handling async tasks becomes a breeze.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 2,
    author: users[1],
    comments: [comments[1]],
  },
  {
    id: 7,
    title: 'Exploring JavaScript Frameworks',
    content: 'User Seven takes a deep dive into popular JavaScript frameworks like React, Angular, and Vue.js. Each framework has its strengths and use cases. This post explores the pros and cons of these frameworks and helps you choose the right one for your project.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 3,
    author: users[2],
    comments: [comments[2]],
  },
  {
    id: 8,
    title: 'JavaScript Best Practices',
    content: 'User Eight compiles a list of best practices for writing clean and efficient JavaScript code. Topics include variable naming, code organization, error handling, and more. Following these best practices ensures that your JavaScript code is maintainable and scalable.',
    createdAt: '2023-10-01',
    updatedAt: '2023-10-01',
    authorId: 4,
    author: users[3],
    comments: [comments[3]],
  },
  // Adicione mais posts e comentários conforme necessário
];

const generateBlogItems = () => {
  return postsMock.map((post,index) => {
    return(
      <BlogItem
        key={index}
        title={post.title}
        content={post.content}
        author={post.author}
        createdAt={post.createdAt}
        authorId={post.authorId}
        updatedAt={post.updatedAt}
        comments={post.comments}
        id={post.id}
      />
    )
  })

}


const ListBlogItems = () => {

  const windowWidth = window?.innerWidth || 1000
  const amountOfItemsMobile = 1
  const amountOfItemsTablet = 2
  const amountOfItemsDesktop = 6

  const calculateAmountOfItems = () => {
    if (windowWidth < 600) {
      return amountOfItemsMobile
    } else if (windowWidth < 1024) {
      return amountOfItemsTablet
    } else {
      return amountOfItemsDesktop
    }
  }


  return (
    <div className='flex m-2 h-96 w-full justify-between items-center z-40 '>
      {generateBlogItems().slice(0,calculateAmountOfItems())}
    </div>
  )
}

export default ListBlogItems
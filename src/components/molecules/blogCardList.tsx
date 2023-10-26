'use client'
import React from 'react'
import BlogCard, { BlogCardProps } from '../atoms/blogCard'
import { Pagination, Group } from '@mantine/core';
import Link from 'next/link';


const blogCards: BlogCardProps[] = [
  {
    id: 1,
    author: "John Doe",
    title: "JavaScript's Role in Modern Web Development",
    subtitle: "Explore how JavaScript drives interactivity, improves user experiences, and powers dynamic web applications. Dive into its evolution and key features.",
    date: "2023-10-26",
    time: "8",
    tag: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "JavaScript Fundamentals: Getting Started",
    subtitle: "Start your journey with JavaScript. Learn the basics, including variables, functions, and control flow. Lay a strong foundation for web development.",
    date: "2023-10-25",
    time: "6",
    tag: "Programming",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  },
  {
    id: 3,
    author: "Mike Johnson",
    title: "Optimizing JavaScript Performance",
    subtitle: "Tips and techniques for enhancing your JavaScript code's performance. Speed up your web apps, reduce load times, and create a snappy user experience.",
    date: "2023-10-24",
    time: "10",
    tag: "Performance",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  },
  {
    id: 4,
    author: "Sarah Brown",
    title: "JavaScript Design Patterns: Reusable Solutions",
    subtitle: "Learn common JavaScript design patterns to solve recurring problems. Enhance code maintainability, scalability, and collaboration in your projects.",
    date: "2023-10-23",
    time: "9",
    tag: "Coding Patterns",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  },
  {
    id: 5,
    author: "David Wilson",
    title: "Building Real-Time Apps with JavaScript",
    subtitle: "Discover how to create real-time web applications using JavaScript, WebSockets, and other technologies. Enable instant updates and communication.",
    date: "2023-10-22",
    time: "12",
    tag: "Real-Time Web",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  },
];


const BlogCardList = () => {
  return (
    <div className="py-4">
      {blogCards.map((blogCard) => {
        return (
          <Link href={`/en/blog/${blogCard.id}`} key={blogCard.id}>
            <BlogCard
              key={blogCard.id}
              id={blogCard.id}
              author={blogCard.author}
              title={blogCard.title}
              subtitle={blogCard.subtitle}
              date={blogCard.date}
              time={blogCard.time}
              tag={blogCard.tag}
              imageUrl={blogCard.imageUrl}
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
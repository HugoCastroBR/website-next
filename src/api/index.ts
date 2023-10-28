import { commentType } from "@/types";

const url = 'http://localhost:3333';

export type paginationDefault = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export type loginRes = {
  message: string;
  data: {
    user:getUser
    token: string;
  };
}

export type getUser = {
  id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

export const login = async (email: string, password: string)
  :Promise<loginRes> => 
{
  const response = await fetch(`${url}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });
  if(!response.ok) {
    throw new Error('Login failed');
  }
  const res = await response.json();
  console.log(res);
  return res;
}


export type registerPost = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type registerPostRes = {
  message: string;
  data: {
    user: getUser;
    token: string;
  };
}
export const register = async (data: registerPost)
:Promise<registerPostRes> => {
  const response = await fetch(`${url}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if(!response.ok) {
    throw new Error('Register failed');
  }
  const res = await response.json();
  return res;
}

export type getPostsType = {
  id: number;
  title: string;
  content: string;
  imageUrl: null | string;
  subtitle: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorName: string;
  totalComments: number;
}

export type getPostsRes = paginationDefault & {
  data: getPostsType[];
}

//need token
export const getPosts = async (page: number):Promise<getPostsRes> => {
  const token = localStorage.getItem('token');

  const itemsPerPage = 10
  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(
    `${url}/posts?page=${page}&itemsPerPage=${itemsPerPage}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Get posts failed');
  }

  const res = await response.json();
  return res;
}

export type postPostType = {
  title: string;
  content: string;
  imageUrl: string;
  subtitle: string;
  published: boolean;
}

export type getOnePostType = getPostsType & {
  comments: commentType[];
}
export const getOnePost = async (id: number):Promise<getOnePostType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Get one post failed');
  }

  const res = await response.json();
  return res;
}

export const postPost = async (data: postPostType):Promise<postPostType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Post post failed');
  }

  const res = await response.json();
  return res;
}

export type patchPostType = {
  id: number;
  data: postPostType;
}

export const patchPost = async (data: patchPostType):Promise<postPostType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/posts/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data.data)
  });

  if (!response.ok) {
    throw new Error('Patch post failed');
  }

  const res = await response.json();
  return res;
}

export const deletePost = async(id:number) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Delete post failed');
  }

  const res = await response.json();
  return res;
}

// Users
export type getUserType = {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  isAdmin: boolean;
}

export type getUsersRes = paginationDefault & {
  data: getUserType[];
}

//need token

export const getUsers = async (page: number):Promise<getUsersRes> => {
  const token = localStorage.getItem('token');

  const itemsPerPage = 10
  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(
    `${url}/users?page=${page}&itemsPerPage=${itemsPerPage}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Get users failed');
  }

  const res = await response.json();
  return res;
}

export type postUserType = {
  email: string;
  name: string;
  password: string;
}

export const postUser = async (data: postUserType):Promise<postUserType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Post user failed');
  }

  const res = await response.json();
  return res;
}

export type patchUserType = {
  id: number;
  data: postUserType;
}

export const patchUser = async (data: patchUserType):Promise<postUserType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/users/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data.data)
  });

  if (!response.ok) {
    throw new Error('Patch user failed');
  }

  const res = await response.json();
  return res;
}

export const deleteUser = async(id:number) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Delete user failed');
  }

  const res = await response.json();
  return res;
}
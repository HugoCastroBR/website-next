const url = 'http://localhost:3333';


export type reqPaginationDefault = {
  page: number;
  itemsPerPage: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}

export const verifyApiHealth = async () => {
  const response = await fetch(`${url}/health`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Api is not healthy');
  }
  const res = await response.json();
  return res;
};


export type getStatisticsType = {
  uptime: number;
  totalComments: number;
  totalPosts: number;
  totalUsers: number;
}
export const getStatistics = async ():Promise<getStatisticsType> => {
  const response = await fetch(`${url}/health/statistics`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Get statistics failed');
  }
  const res = await response.json();
  return res;
}



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

export type getUserByTokenType =  {
  message: string;
  data: getUser;
}
export const getUserByToken = async ():Promise<getUserByTokenType> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('Token not found in localStorage');
  }
  const response = await fetch(`${url}/auth/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });
  if(!response.ok) {
    throw new Error('Get user by token failed');
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
export const getPosts = async (
  {
  page,
  itemsPerPage,
  orderBy,
  order,
  }
:reqPaginationDefault
):Promise<getPostsRes> => {


  const response = await fetch(
    `${url}/posts?page=${page || 1}&itemsPerPage=${itemsPerPage || 10}&orderBy=${orderBy || 'id'}&order=${order || 'asc'}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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


export const getOnePost = async (id: number):Promise<getPostsType> => {

  const response = await fetch(`${url}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

export const getUsers = async ({
  page,
  itemsPerPage,
  orderBy,
  order,
}:reqPaginationDefault):Promise<getUsersRes> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(
    `${url}/users?page=${page || 1}&itemsPerPage=${itemsPerPage || 10}&orderBy=${orderBy || 'id'}&order=${order || 'asc'}`,
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
  password?: string;
  isAdmin?: boolean;
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

export type commentType = {
  id: number;
  postId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorName?: string;
  authorId: number;
  postTitle?: string;
}

export type getCommentsRes = paginationDefault & {
  data: commentType[];
}

export const getComments = async (page: number, postId: number,itemsPerPage?:number):
Promise<getCommentsRes> => 
{


  const response = await fetch(
    `${url}/comments/post/${postId}?page=${page}&itemsPerPage=${itemsPerPage || 10}&orderBy=${'id'}&order=${'desc'}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Get comments failed');
  }

  const res = await response.json();
  return res;
}

export type getOneCommentReq = {
  content: string
}

export const getCommentsByUserId = async (userId: number,{
  page,
  itemsPerPage,
  orderBy,
  order,
}:reqPaginationDefault):
Promise<getCommentsRes> => {

  const response = await fetch(
    `${url}/comments/user/${userId}?page=${page || 1}&itemsPerPage=${itemsPerPage || 10}&orderBy=${orderBy || 'id'}&order=${order || 'asc'}`,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Get comments by user id failed');
  }

  const res = await response.json();
  return res;
}

export type postCommentType = {
  postId: number;
  content: string;
}

export const postComment = async (data: postCommentType):Promise<postCommentType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Post comment failed');
  }

  const res = await response.json();
  return res;
}

export const deleteComment = async(id:number) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  if (!response.ok) {
    throw new Error('Delete comment failed');
  }

  const res = await response.json();
  return res;
}



export type patchCommentType = {
  id: number;
  content: string;
}

export const patchComment = async (data: patchCommentType):Promise<commentType> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const response = await fetch(`${url}/comments/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Patch comment failed');
  }

  const res = await response.json();
  return res;
}
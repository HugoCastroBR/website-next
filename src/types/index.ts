export type userType = {
  id: number;
  email: string;
  name: string;
  password?: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  posts?: postType[];
  comments?: commentType[];
}

export type postType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  author: userType;
  comments?: commentType[];
}

export type commentType = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  author?: userType;
  postId: number;
  post?: postType;
}

export type contactType = {
  title: string;
  url: string;
  icon: string;
}
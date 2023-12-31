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
  subTitle: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  imageUrl?: string
  author?: userType;
  authorName: string
  totalComments: number;
  comments?: commentType[];
}

export type commentType = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  authorName: string;
  author?: userType;
  postId: number;
  post?: postType;
}

export type contactType = {
  title: string;
  url: string;
  icon: string;
}

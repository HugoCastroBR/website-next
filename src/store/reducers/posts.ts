
import { getPostsType } from "@/api";
import { postType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface postState {
  posts: getPostsType[]
  currentPage: number
  totalPages: number
  isLoading: boolean
  editItem: getPostsType
}
const initialState: postState = {
  posts: {
    
  } as getPostsType[],
  currentPage: 1,
  totalPages: 1,
  isLoading: true,
  editItem: {} as getPostsType
}

export const PostSlice = createSlice({
	name: "PostSlice",
	initialState: initialState as postState,
	reducers: {
    ADD_POSTS(state,{payload}:{payload:getPostsType[]}){
      state.posts = payload
    },
    SET_CURRENT_PAGE(state,{payload}:{payload:number}){
      state.currentPage = payload
    },
    SET_TOTAL_PAGES(state,{payload}:{payload:number}){
      state.totalPages = payload
    },
    SET_IS_LOADING(state,{payload}:{payload:boolean}){
      state.isLoading = payload
    },
    SET_EDIT_ITEM(state,{payload}:{payload:getPostsType}){
      state.editItem = payload
    },
    CANCEL_EDIT_ITEM(state){
      state.editItem = {} as getPostsType
    }
	},
});
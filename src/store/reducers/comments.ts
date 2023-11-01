
import { commentType } from "@/api";
import { createSlice } from "@reduxjs/toolkit";


interface commentState {
  comments: commentType[]
  currentPage: number
  totalPages: number
  isLoading: boolean
  editItem: commentType
  searchText: string
}
const initialState: commentState = {
  comments: {
    
  } as commentType[],
  currentPage: 1,
  totalPages: 1,
  isLoading: true,
  editItem: {} as commentType,
  searchText: ""
}

export const CommentSlice = createSlice({
	name: "CommentSlice",
	initialState: initialState as commentState,
	reducers: {
    SET_COMMENTS(state,{payload}:{payload:commentType[]}){
      state.comments = payload
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
    SET_EDIT_ITEM(state,{payload}:{payload:commentType}){
      state.editItem = payload
    },
    CANCEL_EDIT_ITEM(state){
      state.editItem = {} as commentType
    },
    SET_SEARCH_TEXT(state,{payload}:{payload:string}){
      state.searchText = payload
    }
	},
});
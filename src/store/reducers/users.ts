
import { getUserType } from "@/api";
import { createSlice } from "@reduxjs/toolkit";


interface UsersState {
  users: getUserType[]
  currentPage: number
  totalPages: number
  isLoading: boolean
  editItem: getUserType
}
const initialState: UsersState = {
  users: [
    
  ] as getUserType[],
  currentPage: 1,
  totalPages: 1,
  isLoading: true,
  editItem: {} as getUserType
}

export const UsersSlice = createSlice({
	name: "UsersSlice",
	initialState: initialState as UsersState,
	reducers: {
    SET_USERS(state,{payload}:{payload:getUserType[]}){
      console.log(payload);
      state.users = payload
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
    SET_EDIT_ITEM(state,{payload}:{payload:getUserType}){
      state.editItem = payload
    },
    CANCEL_EDIT_ITEM(state){
      state.editItem = {} as getUserType
    }
  },
});
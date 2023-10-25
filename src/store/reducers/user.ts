
import { userType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface UserState {
  isAuth: boolean,
  user: userType
}
const initialState: UserState = {
  isAuth: true,
  user: {
    id: 1,
    name: 'John Doe',
    email: 'johnfakemail@fakemail.com',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    isAdmin: true,
    comments: [],
    posts: [],
  }
}

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: initialState as UserState,
	reducers: {
    SET_IS_AUTH(state,{payload}:{payload:boolean}){
      state.isAuth = payload
    },
    SET_USER(state,{payload}:{payload:userType}){
      state.user = payload
    },
	},
});
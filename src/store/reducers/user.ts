
import { getUser } from "@/api";
import { userType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface UserState {
  isAuth: boolean,
  user: getUser
}
const initialState: UserState = {
  isAuth: false,
  user: {
    
  } as getUser
}

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: initialState as UserState,
	reducers: {
    SET_IS_AUTH(state,{payload}:{payload:boolean}){
      state.isAuth = payload
    },
    SET_USER(state,{payload}:{payload:getUser}){
      console.log(payload);
      state.user = payload
    },
    LOGOUT(state){
      state.isAuth = false
      state.user = {} as getUser
    }
	},
});
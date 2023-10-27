import { configureStore } from "@reduxjs/toolkit"
import { AppSlice } from "./reducers/app";
import { UserSlice } from "./reducers/user";
import { PostSlice } from "./reducers/posts";
import { UsersSlice } from "./reducers/users";

const store = configureStore({
  reducer:{
    App:AppSlice.reducer,
    User:UserSlice.reducer,
    Post:PostSlice.reducer,
    Users:UsersSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const AppActions = AppSlice.actions
export const UserActions = UserSlice.actions
export const PostActions = PostSlice.actions
export const UsersActions = UsersSlice.actions
import { configureStore } from "@reduxjs/toolkit"
import { AppSlice } from "./reducers/app";
import { AuthSlice } from "./reducers/user";
import { PostSlice } from "./reducers/posts";
import { UsersSlice } from "./reducers/users";
import { CommentSlice } from "./reducers/comments";

const store = configureStore({
  reducer:{
    App:AppSlice.reducer,
    Auth:AuthSlice.reducer,
    Post:PostSlice.reducer,
    Users:UsersSlice.reducer,
    Comment:CommentSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const AppActions = AppSlice.actions
export const AuthActions = AuthSlice.actions
export const PostActions = PostSlice.actions
export const UsersActions = UsersSlice.actions
export const CommentActions = CommentSlice.actions
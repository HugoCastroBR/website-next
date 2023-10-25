import { configureStore } from "@reduxjs/toolkit"
import { AppSlice } from "./reducers/app";
import { UserSlice } from "./reducers/user";

const store = configureStore({
  reducer:{
    App:AppSlice.reducer,
    User:UserSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const AppActions = AppSlice.actions
export const UserActions = UserSlice.actions
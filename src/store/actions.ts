
import { userType } from '@/types';
import { AppActions,UserActions,PostActions, UsersActions } from './index';
import { getPostsType, getUser, getUserType } from '@/api';


export const SetDarkMode = (value: boolean) => {
  return AppActions.SET_DARK_MODE(value)
}
export const SetSideMenu = (value: boolean) => {
  return AppActions.SET_SIDE_MENU(value)
}

export const SetIsAuth = (value: boolean) => {
  return UserActions.SET_IS_AUTH(value)
}
export const SetUser = (value: getUser) => {
  return UserActions.SET_USER(value)
}
export const Logout = () => {
  return UserActions.LOGOUT()
}

export const AddPosts = (value: getPostsType[]) => {
  return PostActions.ADD_POSTS(value)
}
export const PostSetCurrentPage = (value: number) => {
  return PostActions.SET_CURRENT_PAGE(value)
}
export const PostSetTotalPages = (value: number) => {
  return PostActions.SET_TOTAL_PAGES(value)
}
export const PostSetIsLoading = (value: boolean) => {
  return PostActions.SET_IS_LOADING(value)
}
export const PostSetEditItem = (value: getPostsType) => {
  return PostActions.SET_EDIT_ITEM(value)
}
export const PostCancelEditItem = () => {
  return PostActions.CANCEL_EDIT_ITEM()
}

export const SetUsers = (value: getUserType[]) => {
  return UsersActions.SET_USERS(value)
}
export const UserSetCurrentPage = (value: number) => {
  return UsersActions.SET_CURRENT_PAGE(value)
}
export const UserSetTotalPages = (value: number) => {
  return UsersActions.SET_TOTAL_PAGES(value)
}
export const UserSetIsLoading = (value: boolean) => {
  return UsersActions.SET_IS_LOADING(value)
}
export const UserSetEditItem = (value: getUserType) => {
  return UsersActions.SET_EDIT_ITEM(value)
}
export const UserCancelEditItem = () => {
  return UsersActions.CANCEL_EDIT_ITEM()
}
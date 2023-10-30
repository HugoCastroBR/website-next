
import { AppActions,AuthActions,PostActions, UsersActions, CommentActions } from './index';
import {  commentType, getPostsType, getUser, getUserType } from '@/api';
import { AppNotificationType } from './reducers/app';


export const SetDarkMode = (value: boolean) => {
  return AppActions.SET_DARK_MODE(value)
}
export const SetSideMenu = (value: boolean) => {
  return AppActions.SET_SIDE_MENU(value)
}
export const SetNewItemModal = (value: boolean) => {
  return AppActions.SET_NEW_ITEM_MODAL(value)
}
export const SetNotification = (value: boolean) => {
  return AppActions.SET_NOTIFICATION(value)
}
export const SetNotificationMessage = (value: string) => {
  return AppActions.SET_NOTIFICATION_MESSAGE(value)
}
export const SetNotificationType = (value: AppNotificationType) => {
  return AppActions.SET_NOTIFICATION_TYPE(value)
}
export const AppHandlerNotification = (value: string, type: AppNotificationType) => {
  return AppActions.HANDLER_NOTIFICATION({value,type})
}
export const SetTableOrderBy = (value: string) => {
  return AppActions.SET_TABLE_ORDER_BY(value)
}
export const SetTableOrder = (value: 'asc' | 'desc') => {
  return AppActions.SET_TABLE_ORDER(value)
}


export const SetIsAuth = (value: boolean) => {
  return AuthActions.SET_IS_AUTH(value)
}
export const SetUser = (value: getUser) => {
  return AuthActions.SET_USER(value)
}
export const Logout = () => {
  return AuthActions.LOGOUT()
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
export const PostSetCurrentPost = (value: getPostsType) => {
  return PostActions.SET_CURRENT_POST(value)
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

export const CommentSetComments = (value: commentType[]) => {
  return CommentActions.SET_COMMENTS(value)
}
export const CommentSetCurrentPage = (value: number) => {
  return CommentActions.SET_CURRENT_PAGE(value)
}
export const CommentSetTotalPages = (value: number) => {
  return CommentActions.SET_TOTAL_PAGES(value)
}
export const CommentSetIsLoading = (value: boolean) => {
  return CommentActions.SET_IS_LOADING(value)
}
export const CommentSetEditItem = (value: commentType) => {
  return CommentActions.SET_EDIT_ITEM(value)
}
export const CommentCancelEditItem = () => {
  return CommentActions.CANCEL_EDIT_ITEM()
}

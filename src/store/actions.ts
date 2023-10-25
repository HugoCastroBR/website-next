
import { AppActions,UserActions } from './index';


export const SetDarkMode = (value: boolean) => {
  return AppActions.SET_DARK_MODE(value)
}
export const SetSideMenu = (value: boolean) => {
  return AppActions.SET_SIDE_MENU(value)
}

export const SetIsAuth = (value: boolean) => {
  return UserActions.SET_IS_AUTH(value)
}
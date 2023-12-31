
import { createSlice } from "@reduxjs/toolkit";


export type AppNotificationType = {
	notificationType: 'success' | 'error' | 'warning' | 'info' ;
}

type IAppSlice =  AppNotificationType &{
	darkMode: boolean;
	sideMenuIsOpen: boolean;
	newItemModalIsOpen: boolean;
	isNotificationOpen: boolean;
	notificationMessage: string;
	notificationType: 'success' | 'error' | 'warning' | 'info' ;
	tableOrderBy?: string;
	tableOrder?: 'asc' | 'desc';
}

const getInitialTheme = () => {
	try {
		if(localStorage?.getItem('theme')){
			return localStorage?.getItem('theme') === 'dark' ? true : false
		}
		return false
	} catch (error) {
		return false
	}
}

export const AppSlice = createSlice({
	name: "AppSlice",
	initialState: {
		darkMode: getInitialTheme(),
		sideMenuIsOpen: false,
		newItemModalIsOpen: false,
		isNotificationOpen: false,
		notificationMessage: '',
		notificationType: 'success',
		tableOrderBy: 'id',
		tableOrder: 'asc',
	} as IAppSlice,
	reducers: {
		SET_DARK_MODE(state,{payload}:{payload:boolean}){
      state.darkMode = payload
    },
		SET_SIDE_MENU(state,{payload}:{payload:boolean}){
			state.sideMenuIsOpen = payload
		},
		SET_NEW_ITEM_MODAL(state,{payload}:{payload:boolean}){
			state.newItemModalIsOpen = payload
		},
		SET_NOTIFICATION(state,{payload}:{payload:boolean}){
			state.isNotificationOpen = payload
		},
		SET_NOTIFICATION_MESSAGE(state,{payload}:{payload:string}){
			state.notificationMessage = payload
		},
		SET_NOTIFICATION_TYPE(state,{payload}:{payload:AppNotificationType}){
			state.notificationType = payload.notificationType
		},
		HANDLER_NOTIFICATION(state,{payload}:{payload:{value:string,type:AppNotificationType}}){
			state.isNotificationOpen = true
			state.notificationMessage = payload.value
			state.notificationType = payload.type.notificationType
		},
		SET_TABLE_ORDER_BY(state,{payload}:{payload:string}){
			state.tableOrderBy = payload
		},
		SET_TABLE_ORDER(state,{payload}:{payload:'asc' | 'desc'}){
			state.tableOrder = payload
		},
	},
});

import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
	name: "AppSlice",
	initialState: {
		darkMode: false,
		sideMenuIsOpen: false,
		newItemModalIsOpen: false,
	},
	reducers: {
		SET_DARK_MODE(state,{payload}:{payload:boolean}){
      state.darkMode = payload
    },
		SET_SIDE_MENU(state,{payload}:{payload:boolean}){
			state.sideMenuIsOpen = payload
		},
		SET_NEW_ITEM_MODAL(state,{payload}:{payload:boolean}){
			state.newItemModalIsOpen = payload
		}
	},
});
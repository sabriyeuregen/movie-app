import { createSlice } from "@reduxjs/toolkit";

const uISlice = createSlice({
    name: "ui",
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message : action.payload.message
            }
        }
    }
})

export const uIActions = uISlice.actions;
export default uISlice;
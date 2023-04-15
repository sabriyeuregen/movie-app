import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: ""
} 

const detailSlice = createSlice({
    name: "detailSlice",
    initialState,
    reducers: {
        getId (state, action) {
          state.id = action.payload;
        }
    }
})
export const detailActions = detailSlice.actions;
export default detailSlice;
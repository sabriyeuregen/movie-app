import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionShow : false
}

const suggestionSlice = createSlice({
    name:"suggestion",
    initialState:initialState,
    reducers: {
        showSuggestion: (state,action) => {
          state.suggestionShow = true;
        }
    },

})

export const suggestionActions = suggestionSlice.actions;
export default suggestionSlice; 
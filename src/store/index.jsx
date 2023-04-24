import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import movieSlice from "./movie-slice";
import suggestionSlice from "./suggestion-slice";

const store = configureStore({
  reducer: { searchSlice: searchSlice.reducer, movie: movieSlice.reducer, suggestion: suggestionSlice.reducer }
});
export default store;

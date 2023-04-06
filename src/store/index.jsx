import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import movieSlice from "./movie-slice";

const store = configureStore({
  reducer: { searchSlice: searchSlice.reducer, movie: movieSlice.reducer }
});
export default store;

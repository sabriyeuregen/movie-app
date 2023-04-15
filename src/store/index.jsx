import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import movieSlice from "./movie-slice";
import detailSlice from "./detail-slice";

const store = configureStore({
  reducer: { searchSlice: searchSlice.reducer, movie: movieSlice.reducer, detail: detailSlice.reducer }
});
export default store;

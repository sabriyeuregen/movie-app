import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: ""
};

export const fetchData = createAsyncThunk("movie/fetchMovies", async () => {
  return await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&page=1"
  )
    .then((response) => response.json())
    .then((response) => response.results.map((movie) => movie));
 
  // .then((response) => response.map((movie) => movie.id))
});


const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = "There is an error!";
    });
  }
});

export const movieActions = movieSlice.actions;

export default movieSlice;

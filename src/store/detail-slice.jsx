import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    data: [],
    error: ""
} 
/*
  const getMovie = async (id) => {
    const movie = await fetch(
      `https://api.themoviedb.org/movie/${id}?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&append_to_response=recommendations`
    )
      .then((response) => response.json())
      .then((response) => response.results);
    setDetail(movie);
  };
*/

export const fetchDetail = createAsyncThunk("detail/fetchMovies", async () => {
    return await fetch(
        `https://api.themoviedb.org/movie/${id}?api_key=8007da3ba2c47e0304c3a0e70c97a6b8&append_to_response=recommendations`
    )
    .then((response) => response.json())
    .then((response) => response.results)
})

const detailSlice = createSlice({
    name: "detail",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchDetail.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
      builder.addCase(fetchDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = "There is an error!";
      });
    }
  });

export const detailActions = detailSlice.actions;
export default detailSlice;
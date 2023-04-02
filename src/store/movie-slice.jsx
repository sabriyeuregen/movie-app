import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  return await axios
    .get(
      "https://api.themoviedb.org/3/movie/550?api_key=8007da3ba2c47e0304c3a0e70c97a6b8"
    )
    .then((response) => response.data);
});

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.action = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = "There is an error!";
    });
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;

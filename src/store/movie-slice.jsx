import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  loading: false,
  movies: [],
  error: ""
}

export const fetchMovies  =createAsyncThunk("movie/fetchMovies", () => {
    return axios 
    .get("")
    .then((response) => response.data)
})

const movieSlice = createSlice({
 name:"movie",
 initialState: initialState,
 reducers: { //fonksiyonlar buraya

 },
 extraReducers:(builder)=> {
   builder.addCase(fetchMovies.pending)
 }
})
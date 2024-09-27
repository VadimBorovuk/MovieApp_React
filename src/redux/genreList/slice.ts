import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchGenres} from "./asyncActions";
import {MoviesResultsProps} from "../discoverMovies/types";
import {GenresApi, GenresProps} from "./types";

const initialState: GenresApi = {
  loading: false,
  error: '',
  genres: [],
}


export const genreListSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchGenres.fulfilled, (state, action: PayloadAction<{genres: GenresProps[]}>) => {
      state.loading = false
      state.genres = action.payload.genres
    })
    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.loading = false
      state.genres = []
      state.error = action.error.message as string;
    })
  }
})


export default genreListSlice.reducer

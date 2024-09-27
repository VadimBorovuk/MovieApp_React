import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesApi, MoviesResultsProps} from "./types";
import {fetchTopMovie} from "./asyncActions";

const initialState: MoviesApi = {
  loading: false,
  error: '',
  movies: {
    page: 1,
    total_pages: 0,
    total_results: 0,
    results: []
  },
}

export const topMoviesSlice = createSlice({
  name: 'topMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopMovie.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchTopMovie.fulfilled, (state, action: PayloadAction<MoviesResultsProps>) => {
      state.loading = false
      const {results, page, total_pages, total_results} = action.payload
      state.movies = {
        page,
        total_pages,
        total_results,
        results
      }
    })
    builder.addCase(fetchTopMovie.rejected, (state, action) => {
      state.loading = false
      state.movies = {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
      }
      state.error = action.error.message as string;
    })
  },
  reducers: {}
})


export default topMoviesSlice.reducer

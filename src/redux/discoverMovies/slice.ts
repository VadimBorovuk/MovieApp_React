import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesApi, MoviesResultsProps} from "./types";
import {fetchDiscoverMovies} from "./asyncActions";

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
export const discoverMoviesSlice = createSlice({
  name: 'discoverMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscoverMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchDiscoverMovies.fulfilled, (state, action: PayloadAction<MoviesResultsProps>) => {
      state.loading = false

      const {results, page, total_pages, total_results} = action.payload
      state.movies = {page, total_pages, total_results, results}
    })
    builder.addCase(fetchDiscoverMovies.rejected, (state, action) => {
      state.loading = false
      state.movies = {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
      }
      state.error = action.error.message as string;
    })
  }
})


export default discoverMoviesSlice.reducer

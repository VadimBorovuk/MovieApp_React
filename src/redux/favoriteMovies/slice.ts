import {createSlice} from "@reduxjs/toolkit";
import {fetchFavoriteMovies} from "./asyncActions";
import {MoviesApi} from "./types";

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

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
      state.loading = false
      const {results, page, total_pages, total_results} = action.payload
      state.movies = {
        page,
        total_pages,
        total_results,
        results: [...results].reverse()
      }
    })
    builder.addCase(fetchFavoriteMovies.rejected, (state, action) => {
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


export default favoriteMoviesSlice.reducer

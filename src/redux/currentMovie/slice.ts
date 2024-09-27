import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currentMovieApi, currentMovieDataProps} from "./types";
import {fetchCurrentMovie} from "./asyncActions";

const initialState:currentMovieApi = {
  loading: false,
  error: '',
  current: {},
}

export const currentMovieSlice = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentMovie.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCurrentMovie.fulfilled, (state, action: PayloadAction<currentMovieDataProps>) => {
      state.loading = false
      state.current = action.payload
    })
    builder.addCase(fetchCurrentMovie.rejected, (state, action) => {
      state.loading = false
      state.current = {}
      state.error = action.error.message as string
    })
  }
})


export default currentMovieSlice.reducer

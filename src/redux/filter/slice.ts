import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FilterSliceState} from "./types";

const initialState: FilterSliceState = {
  language: localStorage.getItem('lang') || 'en',
  primary_release_year: '',
  sort_by: '',
  with_genres: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // setGenres(state, action: PayloadAction<number[]>) {
    //   state.with_genres = action.payload
    // },
    // setSortBy(state, action: PayloadAction<string>) {
    //   state.sort_by = action.payload
    // },
    // setYear(state, action: PayloadAction<number | string>) {
    //   state.primary_release_year = action.payload
    // },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.page = Number(action.payload.page)
      state.sort_by = action.payload.sort_by
      state.primary_release_year = action.payload.primary_release_year
      state.with_genres = action.payload.with_genres
    },
    resetFilters(state) {
      state.page = 1
      state.sort_by = ''
      state.primary_release_year = ''
      state.with_genres = []
    },
  },
})


// Action creators are generated for each case reducer function
export const {
  // setGenres,
  // setSortBy,
  // setYear,
  setCurrentPage,
  setFilters,
  resetFilters
} = filterSlice.actions

export default filterSlice.reducer

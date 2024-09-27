import {createSlice} from "@reduxjs/toolkit";
import {SearchApi} from "./types";
import {fetchSearchMovies} from "./asyncActions";

const initialState: SearchApi = {
  loading: false,
  error: '',
  countItems: 0,
  page: 1,
  searchingFilms: {
    total_results: 0,
    results: []
  },
}

export const moviesSearchSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    clearFilms(state) {
      state.loading = false;
      state.error = '';
      state.countItems = 0
      state.page= 1
      state.searchingFilms = {
        total_results: 0,
        results: []
      }
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      state.loading = false
      const {results, total_results} = action.payload
      const array = state.searchingFilms.results.concat(results)

      state.countItems = action.payload.results.length
      state.searchingFilms.total_results = total_results

      // @ts-ignore
      state.searchingFilms.results = Array.from(new Set(array.map(item => item.id)))
          .map(id => array.find(obj => obj.id === id))
    })
    builder.addCase(fetchSearchMovies.rejected, (state, action) => {
      state.loading = false
      state.searchingFilms = {
        total_results: 0,
        results: [],
      }
      state.error = action.error.message as string
    })

  }
})
export const {clearFilms, setPage} = moviesSearchSlice.actions


export default moviesSearchSlice.reducer

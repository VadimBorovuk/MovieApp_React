import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    films: {
        page: null,
        total_pages: null,
        total_results: null,
        results: []
    },
}

export const fetchTopMovie = createAsyncThunk('fetchTopMovie', (params) => {
    const url = `${process.env.REACT_APP_API_PATH}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    return axios
        .get(url, {params})
        .then((response) => response.data)
})

// with_genres=27,35
export const fetchDiscoverFilms = createAsyncThunk('fetchDiscoverFilms', (params) => {
    const url =  `${process.env.REACT_APP_API_PATH}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`

    return axios
        .get(url, {params})
        .then((response) => response.data)
})

export const searchFilms = createAsyncThunk('searchFilms', (params) => {

    return axios
        .get(`${process.env.REACT_APP_API_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`, {params})
        .then((response) => response.data)
})

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTopMovie.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchTopMovie.fulfilled, (state, action) => {
            state.loading = false
            const {results, page, total_pages, total_results} = action.payload
            state.films = {page, total_pages, total_results, results}
        })
        builder.addCase(fetchTopMovie.rejected, (state, action) => {
            state.loading = false
            state.films = {
                page: null,
                total_pages: null,
                total_results: null,
                results: []
            }
            state.error = action.error.message
        })

        builder.addCase(fetchDiscoverFilms.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchDiscoverFilms.fulfilled, (state, action) => {
            state.loading = false
            const {results, page, total_pages, total_results} = action.payload
            state.films = {page, total_pages, total_results, results}
        })
        builder.addCase(fetchDiscoverFilms.rejected, (state, action) => {
            state.loading = false
            state.films = {
                page: null,
                total_pages: null,
                total_results: null,
                results: []
            }
            state.error = action.error.message
        })
    }
})


export default filmsSlice.reducer

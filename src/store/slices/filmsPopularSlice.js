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


export const fetchFilms = createAsyncThunk('fetchFilms', (params) => {

    return axios
        .get(`${process.env.REACT_APP_API_PATH}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`, {params})
        .then((response) => response.data)
})

export const searchFilms = createAsyncThunk('searchFilms', (params) => {

    return axios
        .get(`${process.env.REACT_APP_API_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`, {params})
        .then((response) => response.data)
})

const filmsPopularSlice = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false
            const {results, page, total_pages, total_results} = action.payload
            state.films = {page, total_pages, total_results, results}
        })
        builder.addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false
            state.films = {
                page: null,
                total_pages: null,
                total_results: null,
                results: []
            }
            state.error = action.error.message
        })
        
        builder.addCase(searchFilms.pending, state => {
            state.loading = true
        })
        builder.addCase(searchFilms.fulfilled, (state, action) => {
            state.loading = false
            const {results, page, total_pages, total_results} = action.payload
            state.films = {page, total_pages, total_results, results}
        })
        builder.addCase(searchFilms.rejected, (state, action) => {
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


export default filmsPopularSlice.reducer
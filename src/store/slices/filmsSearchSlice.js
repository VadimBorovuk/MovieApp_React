import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    page: 1,
    countItems: null,
    searchingFilms: {
        total_results: null,
        results: []
    },
}

export const searchFilms = createAsyncThunk('searchFilms', (params) => {

    return axios
        .get(`${process.env.REACT_APP_API_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`, {params})
        .then((response) => response.data)
})

const filmsSearchSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        clearFilms(state) {
            state.loading = false;
            state.error = null;
            state.page = 1
            state.countItems = 20
            state.searchingFilms = {
                total_results: null,
                results: []
            }
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(searchFilms.pending, state => {
            state.loading = true
        })
        builder.addCase(searchFilms.fulfilled, (state, action) => {
            state.loading = false
            const {results, total_results} = action.payload
            state.countItems = action.payload.results.length
            state.searchingFilms.total_results = total_results
            state.searchingFilms.total_results = total_results
            state.searchingFilms.results = state.searchingFilms.results.concat(results)
        })
        builder.addCase(searchFilms.rejected, (state, action) => {
            state.loading = false
            state.searchingFilms = {
                total_results: null,
                results: [],
                items: []
            }
            state.error = action.error.message
        })

    }
})
export const {clearFilms, setPage} = filmsSearchSlice.actions


export default filmsSearchSlice.reducer

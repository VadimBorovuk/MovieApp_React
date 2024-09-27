import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    films: {
        page: 1,
        total_pages: null,
        total_results: null,
        results: []
    },
}

export const fetchFavoriteFilms = createAsyncThunk(
    'fetchFavoriteFilms',
    (params) => {

        const url = `${process.env.REACT_APP_API_PATH}/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`
        return axios
            .get(url, {params})
            .then((response) => response.data)
    })

export const AddFavoriteMovie = createAsyncThunk(
    'AddFavoriteMovie',
    (data) => {

        const url = `${process.env.REACT_APP_API_PATH}/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`
        return axios
            .post(url, data)
            .then((response) => response.data)
    })


const filmsFavoriteSlice = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteFilms.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
            state.loading = false
            const {results, page, total_pages, total_results} = action.payload
            state.films = {
                page,
                total_pages,
                total_results,
                results: results.reverse()
            }
        })
        builder.addCase(fetchFavoriteFilms.rejected, (state, action) => {
            state.loading = false
            state.films = {
                page: null,
                total_pages: null,
                total_results: null,
                results: []
            }
            state.error = action.error.message
        })
    },
    reducers: {
        removeFromList(state, arr) {

            // state.films.results = arr

            // let res = state.films.results.selectors.ts(film => film.id !== id)
            // console.log(res)
        }
    }
})
export const {removeFromList} = filmsFavoriteSlice.actions


export default filmsFavoriteSlice.reducer

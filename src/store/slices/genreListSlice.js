import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    genres: [],
}


export const fetchGenres = createAsyncThunk('fetchGenres', (params) => {
    const url = `${process.env.REACT_APP_API_PATH}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`

    return axios
        .get(url, {params})
        .then((response) => response.data)
})

const genreListSlice = createSlice({
    name: 'genres',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false
            state.genres = action.payload.genres
        })
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false
            state.genres = []
            state.error = action.error.message
        })
    }
})


export default genreListSlice.reducer

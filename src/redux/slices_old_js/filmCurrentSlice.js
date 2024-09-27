import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    current: {},
}


export const fetchCurrentFilm = createAsyncThunk('fetchCurrentFilm', ({id, language}) => {
    const url = `${process.env.REACT_APP_API_PATH}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`

    return axios
        .get(url)
        .then((response) => response.data)
})

const filmCurrentSlice = createSlice({
    name: 'films',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentFilm.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCurrentFilm.fulfilled, (state, action) => {
            state.loading = false
            // const {results, page, total_pages, total_results} = action.payload
            state.current = action.payload
        })
        builder.addCase(fetchCurrentFilm.rejected, (state, action) => {
            state.loading = false
            state.current = {}
            state.error = action.error.message
        })
    }
})


export default filmCurrentSlice.reducer
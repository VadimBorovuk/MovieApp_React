import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    results: [],
}

export const fetchVideos = createAsyncThunk('fetchVideos', ({id, language}) => {
    const url = `${process.env.REACT_APP_API_PATH}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`

    return axios
        .get(url)
        .then((response) => response.data)
})

const videosGenreListSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload.results.filter(movie => movie.type === 'Trailer').map(item => {
                return `${process.env.REACT_APP_YOUTUBE}${item.key}`
            })
        })
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.error = action.error.message
        })
    }
})


export default videosGenreListSlice.reducer

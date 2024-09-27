import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    results: [],
}

export const fetchActors = createAsyncThunk('fetchActors', ({id, language}) => {
    const url = `${process.env.REACT_APP_API_PATH}/movie/${id}/casts?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`

    return axios
        .get(url)
        .then((response) => response.data)
})

const actorsListSlice  = createSlice({
    name: 'author',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchActors.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchActors.fulfilled, (state, action) => {
            state.loading = false
            state.results = action.payload.cast
                .filter(movie => movie.known_for_department === 'Acting')
                .filter(item => !!item.profile_path)
                .slice(0, 12)
                .map(({id, original_name, profile_path, character}) => {
                return {
                    id,
                    original_name,
                    character,
                    profile_path: `${process.env.REACT_APP_API_PATH_IMAGE}${profile_path}`
                }
            })
        })
        builder.addCase(fetchActors.rejected, (state, action) => {
            state.loading = false
            state.results = []
            state.error = action.error.message
        })
    }
})


export default actorsListSlice .reducer

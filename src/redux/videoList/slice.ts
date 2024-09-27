import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchVideoList} from "./asyncActions";
import {VideosApi, VideosDataApiProps} from "./types";

const initialState: VideosApi = {
  loading: false,
  error: '',
  results: [],
}

export const videosListSlice = createSlice({
  name: 'videosList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideoList.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchVideoList.fulfilled, (state, action: PayloadAction<VideosDataApiProps>) => {
      state.loading = false
      state.results = action.payload.results
          .filter(movie => movie.type === 'Trailer')
          .map(item => {
        return `${process.env.REACT_APP_YOUTUBE}${item.key}`
      })
    })
    builder.addCase(fetchVideoList.rejected, (state, action) => {
      state.loading = false
      state.results = []
      state.error = action.error.message as string
    })
  }
})


export default videosListSlice.reducer

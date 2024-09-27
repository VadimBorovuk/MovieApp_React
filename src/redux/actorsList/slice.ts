import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActorDataProps, ActorsApiProps} from "./types";
import {fetchActorsList} from "./asyncActions";

const initialState: ActorsApiProps = {
  loading: false,
  error: '',
  results: [],
}

export const actorsListSlice = createSlice({
  name: 'actorsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActorsList.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchActorsList.fulfilled, (state, action: PayloadAction<{cast: ActorDataProps[]}>) => {
      state.loading = false
      state.results = action.payload.cast
          .filter((item: ActorDataProps) => item.known_for_department === 'Acting' && !!item.profile_path)
          // .filter((item: ActorDataProps) => !!item.profile_path)
          .slice(0, 12)
          .map((body: ActorDataProps) => {
            const {id, original_name, character, profile_path} = body
            return {
              id,
              original_name,
              character,
              profile_path: `${process.env.REACT_APP_API_PATH_IMAGE}${profile_path}`
            }
          })
    })
    builder.addCase(fetchActorsList.rejected, (state, action) => {
      state.loading = false
      state.results = []
      state.error = action.error.message as string
    })
  }
})


export default actorsListSlice.reducer

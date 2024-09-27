import {configureStore} from '@reduxjs/toolkit'

import {useDispatch} from "react-redux";
import filterSlice from "./filter/slice";
import discoverMoviesSlice from "./discoverMovies/slice";
import actorsLisSlice from "./actorsList/slice";
import favoriteMoviesSlice from "./favoriteMovies/slice";
import topMoviesSlice from "./topMovies/slice";
import genreListSlice from "./genreList/slice";
import searchMoviesSlice from "./searchMovies/slice";
import userInfoSlice from "./userInfo/slice";
import currentMovieSlice from "./currentMovie/slice";
import videosListSlice from "./videoList/slice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        discoverMovies: discoverMoviesSlice,
        genreList: genreListSlice,
        favoriteMovies: favoriteMoviesSlice,
        topMovies: topMoviesSlice,
        searchMovies: searchMoviesSlice,
        userInfo: userInfoSlice,
        currentMovie: currentMovieSlice,
        actorsList: actorsLisSlice,
        videosList: videosListSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const  useAppDispatch = () => useDispatch<AppDispatch>()

import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import filmSlice from "./slices/filmsListSlice";
import filmCurrentSlice from "./slices/filmCurrentSlice";
import userSlice from "./slices/userSlice";
import genreListSlice from "./slices/genreListSlice";
import filmsSearchSlice from "./slices/filmsSearchSlice";
import filmsFavoriteSlice from "./slices/filmsFavoriteSlice";

const rootReducer = combineReducers({
    sliceSearchFilms: filmsSearchSlice,
    sliceFavoriteFilms: filmsFavoriteSlice,
    sliceFilms: filmSlice,
    sliceGenreList: genreListSlice,
    sliceCurrentFilm: filmCurrentSlice,
    sliceUser: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export default store
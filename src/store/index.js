import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import filmSlice from "./slices/filmsPopularSlice";
import filmCurrentSlice from "./slices/filmCurrentSlice";

const rootReducer = combineReducers({
    sliceFilms: filmSlice,
    sliceCurrentFilm: filmCurrentSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export default store
import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import filmSlice from "./slices/filmsPopularSlice";
import filmCurrentSlice from "./slices/filmCurrentSlice";
import countSlice from "./slices/countSlice";

const rootReducer = combineReducers({
    sliceFilms: filmSlice,
    sliceCurrentFilm: filmCurrentSlice,
    sliceCount: countSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export default store
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FilterSliceState} from "../filter/types";
import {AddMovieTofavoriteMoviesProps, MovieDataProps, MoviesResultsProps} from "./types";

export const fetchFavoriteMovies = createAsyncThunk<MoviesResultsProps, FilterSliceState>(
    'discoverMovies/fetchDiscoverMovies',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`
      const {data} = await axios.get<MoviesResultsProps>(`${urlPath}`, {params})
      return data
    }
)

export const AddFavoriteMovie = createAsyncThunk<MovieDataProps, AddMovieTofavoriteMoviesProps>(
    'discoverMovies/addFavoriteMovie',
    async (body) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/account/${process.env.REACT_APP_ACCOUNT_ID}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`
      const {data} = await axios.post<MovieDataProps>(`${urlPath}`, body)
      return data
    }
)

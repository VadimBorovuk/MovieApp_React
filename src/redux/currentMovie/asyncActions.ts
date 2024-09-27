import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {currentMovieDataProps, fetchParamsMovie} from "./types";

export const fetchCurrentMovie = createAsyncThunk<currentMovieDataProps, fetchParamsMovie>(
    'currentMovie/fetchCurrentMovie',
    async (params) => {
      const urlPath =  `${process.env.REACT_APP_API_PATH}/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=${params.language}`
      const {data} = await axios.get<currentMovieDataProps>(`${urlPath}`)
      return data
    }
)

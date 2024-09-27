import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FilterSliceState} from "../filter/types";
import {MoviesResultsProps} from "./types";

export const fetchSearchMovies = createAsyncThunk<MoviesResultsProps, FilterSliceState>(
    'searchMovies/fetchSearchMovies',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`
      const {data} = await axios.get<MoviesResultsProps>(`${urlPath}`, {params})
      return data
    }
)

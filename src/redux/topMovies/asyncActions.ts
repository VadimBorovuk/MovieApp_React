import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FilterSliceState} from "../filter/types";
import {MoviesResultsProps} from "./types";

export const fetchTopMovie = createAsyncThunk<MoviesResultsProps, FilterSliceState>(
    'topMovies/fetchTopMovies',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      const {data} = await axios.get<MoviesResultsProps>(`${urlPath}`, {params})
      return data
    }
)


import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FilterSliceState} from "../filter/types";
import {MoviesResultsProps} from "./types";

export const fetchDiscoverMovies = createAsyncThunk<MoviesResultsProps, FilterSliceState>(
    'discoverMovies/fetchDiscoverMovies',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
      const {data} = await axios.get<MoviesResultsProps>(`${urlPath}`, {params})
      return data
    }
)

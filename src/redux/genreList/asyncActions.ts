import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GenresProps} from "./types";

export const fetchGenres = createAsyncThunk<{genres: GenresProps[]}>(
    'fetchGenres',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      const {data} = await axios.get<{genres: GenresProps[]}>(`${urlPath}`, {params})
      return data
    }
)

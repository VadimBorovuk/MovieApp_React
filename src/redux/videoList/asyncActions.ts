import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FetchParamsVideos, VideosDataApiProps} from "./types";

export const fetchVideoList = createAsyncThunk<VideosDataApiProps, FetchParamsVideos>(
    'videosList/fetchVideoList',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/movie/${params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=${params.language}`
      const {data} = await axios.get<VideosDataApiProps>(`${urlPath}`, {params})
      return data
    }
)

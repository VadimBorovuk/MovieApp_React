import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {ActorsFullData, FetchParamsActors} from "./types";

export const fetchActorsList = createAsyncThunk<ActorsFullData, FetchParamsActors>(
    'actorsList/fetchActorsList',
    async (params) => {
      const urlPath = `${process.env.REACT_APP_API_PATH}/movie/${params.id}/casts?api_key=${process.env.REACT_APP_API_KEY}&language=${params.language}`
      const {data} = await axios.get<ActorsFullData>(`${urlPath}`)
      return data
    }
)

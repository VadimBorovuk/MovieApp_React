import {GenresProps} from "../genreList/types";

export type productionCompaniesProps = {
  id?: number
  logo_path?: string
  name?: string
  origin_country?: string
}

export type currentMovieDataProps = {
  id?: number
  runtime?: number
  genres?: GenresProps[]
  production_companies?: productionCompaniesProps[]
  genre_ids?: number[]
  release_date?: string
  poster_path?: string
  title?: string
  overview?: string
  vote_average?: number
  vote_count?: number
  backdrop_path?: number
}

export type fetchParamsMovie = {
  id: string | undefined
  language: string
}

export type FetchParamsQuery = {
  page: number
  language: string
}

export interface currentMovieApi {
  loading: boolean,
  error: string,
  current: currentMovieDataProps
}

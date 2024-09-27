export type MovieDataProps = {
  id: number
  genre_ids: number[]
  release_date: string
  poster_path: string
  title: string
  overview: string
  vote_average: number
  vote_count?: number
  backdrop_path?: number
}


export type MoviesResultsProps = {
  page: number
  results: MovieDataProps[]
  total_results: number
  total_pages: number
}

export interface MoviesApi {
  loading: boolean,
  error: string,
  movies: MoviesResultsProps
}


export type AddMovieTofavoriteMoviesProps = {
  favorite: boolean
  media_id: number
  media_type: string
}

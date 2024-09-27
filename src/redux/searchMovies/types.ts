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

type searchingMoviesProps = {
  total_results: number
  results: MovieDataProps[]
}

export type MoviesResultsProps = {
  page: number
  results: MovieDataProps[]
  total_results: number
  total_pages: number
}

export interface SearchApi {
  loading: boolean
  error: string
  page: number
  countItems: number
  searchingFilms: searchingMoviesProps
}



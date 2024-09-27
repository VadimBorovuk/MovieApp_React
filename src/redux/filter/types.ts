export interface FilterSliceState {
  page?: number
  with_genres?: number[] | string
  primary_release_year?: number | string
  sort_by?: string
  language?: string
  query?: string
}

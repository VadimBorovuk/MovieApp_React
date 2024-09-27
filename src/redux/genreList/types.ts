export type GenresProps = {
  id: number
  name: string
}

export type GenresApi = {
  loading: boolean,
  error: string,
  genres: GenresProps[],
}


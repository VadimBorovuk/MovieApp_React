export type VideoDataProps = {
  key: string
  type?: string
}

export type FetchParamsVideos = {
  id: string | undefined
  language: string
}

export interface VideosApi {
  loading: boolean,
  error: string,
  results: string[]
}

export interface VideosDataApiProps {
  id: number
  results: VideoDataProps[]
}

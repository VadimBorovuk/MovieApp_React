export type ActorDataProps = {
  id?: number
  original_name?: string
  profile_path?: string
  character?: string
  known_for_department?: string
}

export type FetchParamsActors = {
  id: string | undefined
  language: string
}

export type ActorsFullData = {
  id: number
  cast: ActorDataProps[]
  crew: ActorDataProps[]
}


export interface ActorsApiProps {
  loading: boolean,
  error: string,
  results: ActorDataProps[]
}

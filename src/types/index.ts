import { Database } from './supabase'

export type OGS = Database['public']['Tables']['ogs']['Row']
export type URLS = Database['public']['Tables']['urls']['Row']
export type URLS_INFOS = Database['public']['Views']['url_infos']['Row']

export type NextPageProps<
  Params extends Record<string, string> | null = null,
  SearhParams extends Record<string, string> | null = null
> = {
  params: Params
  searchParams: SearhParams
}

export type LinkState = {
  description: string
  image: string
  site_name: string
  title: string
  type: string
  url: string
  link: string
}

export type CreateLinkState = LinkState & {
  customURL: string | null
  isLoading: boolean
  isError: boolean
}

export type CreateLinkAction =
  | { type: 'INIT'; payload: Partial<CreateLinkState> }
  | { type: 'SET_IMAGE'; payload: string }
  | { type: 'SET_URL'; payload: string }
  | { type: 'SET_LINK'; payload: string }
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'SET_CUSTOM_URL'; payload: string }
  | { type: 'SET_ISLOADING'; payload: boolean }

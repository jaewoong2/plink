export type User = {
  id: number
  username: string
  email: string
  refresh_token: string
  access_token: string
}

export type Link = {
  id: number
  image: string
  title: string
  description: string
  origin_url: string
  custom_url: string
  user: User
}

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
} & Partial<Link>

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

interface Link {
  name?: string
  href?: string
  templated?: boolean
}

export interface Category {
  id: number
  count?: number
  description?: string
  link?: string
  name: string
  slug?: string
  taxonomy?: string
  parent?: number
  meta?: Array<any>
  _links?: {
    self?: Link[]
    collection?: Link[]
    about?: Link[]
    'wp:post_type'?: Link[]
    curies?: Link[]
  }
}

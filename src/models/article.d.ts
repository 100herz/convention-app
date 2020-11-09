export declare interface Article {
  id: number
  date_gmt: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  categories: number[]
  acf: {
    sponsored_by: string
    should_push: boolean
    featured_slider: boolean
    news_slider: boolean
  }
  _links: unknown
  _embedded: {
    [key: string]: unknown
    'wp:featuredmedia'?: {
      [key: string]: unknown
      source_url: string
    }[]

    'wp:term': {
      [key: string]: unknown
      id: number
      name: string
    }[][]
  }
}

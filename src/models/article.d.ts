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
  excerpt: {
    rendered: string
    protected: boolean
  }
  featured_media: number | null
  categories: number[]
  acf?: {
    sponsored_by?: string | null
    should_push?: boolean | null
    pinned?: boolean | null
    featured_slider?: boolean | null
    news_slider?: boolean | null
  }
  featured_image_thumb: string
  featured_image_medium: string
  categories_names: string[]
  _links?: unknown
}

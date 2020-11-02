export interface Article {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
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
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: unknown[]
  categories: number[]
  tags: unknown[]
  acf: {
    sponsored_by: string
    should_push: boolean
    featured_slider: boolean
    news_slider: boolean
  }
  _links: unknown
  _embedded: {
    'wp:featuredmedia': [{ source_url: string }]
    'wp:term': [
      [
        {
          id: number
          name: string
        }
      ]
    ]
  }
}

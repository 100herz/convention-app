import { Category } from '@models/category'

export const category: Category = {
  id: 1,
  count: 2257,
  description: '',
  link: 'https://www.convention-net.de/news/',
  name: 'News',
  slug: 'news',
  taxonomy: 'category',
  parent: 0,
  meta: [],
  acf: [],
  _links: {
    self: [
      {
        href: 'https://www.convention-net.de/wp-json/wp/v2/categories/1',
      },
    ],
    collection: [
      {
        href: 'https://www.convention-net.de/wp-json/wp/v2/categories',
      },
    ],
    about: [
      {
        href: 'https://www.convention-net.de/wp-json/wp/v2/taxonomies/category',
      },
    ],
    'wp:post_type': [
      {
        href: 'https://www.convention-net.de/wp-json/wp/v2/posts?categories=1',
      },
    ],
    curies: [
      {
        name: 'wp',
        href: 'https://api.w.org/{rel}',
        templated: true,
      },
    ],
  },
}

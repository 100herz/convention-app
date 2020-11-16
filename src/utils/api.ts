// TODO: Maybe add a test file for the api.

const API_URL_WP = 'https://www.convention-net.de/wp-json/wp/v2/'

enum API_WP_TYPE {
  CATEGORIES = 'categories/',
  PAGES = 'pages/',
  POSTS = 'posts/',
}

enum API_WP_FIELDS {
  CATEGORIES = '?_fields=id,description,name',
  PAGES = '?_fields=id,title,content',
  POSTS = '?_fields=id,date_gmt,title,content,excerpt,featured_media,categories,acf,featured_image_thumb,featured_image_medium,categories_names',
}

/**
 * Fetches the page from the WordPress REST API with the given id.
 *
 * @param pageId The id of the pages, which should fetched.
 */
export const fetchPageAsync = async (pageId: number): Promise<Response> => {
  return await fetch(API_URL_WP + API_WP_TYPE.PAGES + pageId + API_WP_FIELDS.PAGES)
}

/**
 * Fetches the post from the WordPress REST API with the given id.
 *
 * @param postId The id of the posts, which should fetched.
 */
export const fetchPostAsync = async (postId: number): Promise<Response> => {
  return await fetch(API_URL_WP + API_WP_TYPE.POSTS + postId + API_WP_FIELDS.POSTS)
}

/**
 * Fetches the posts from the WordPress API.
 *
 * @param parameter The parameter for the WordPress REST API query.
 */
export const fetchPostsAsync = async (parameter?: {
  categoryId?: number | string
  page?: number | string
  perPage?: number | string
}): Promise<Response> => {
  const categoryQuery = parameter?.categoryId ? '&categories=' + parameter.categoryId : ''
  const perPageQuery = '&per_page=' + (parameter?.perPage ? parameter.perPage : '20')
  const pageQuery = parameter?.page ? '&page=' + parameter.page : ''
  return await fetch(API_URL_WP + API_WP_TYPE.POSTS + API_WP_FIELDS.POSTS + categoryQuery + perPageQuery + pageQuery)
}

/**
 * Fetches the categories from the WordPress API.
 *
 * @param parameter The parameter for the WordPress REST API query.
 */
export const fetchCategoriesAsync = async (parameter?: {
  perPage?: number | string
  orderBy?: string
}): Promise<Response> => {
  const perPageQuery = '&per_page=' + (parameter?.perPage ? parameter.perPage : '99')
  const orderByQuery = '&orderby=' + (parameter?.orderBy ? parameter.orderBy : 'description')
  return await fetch(API_URL_WP + API_WP_TYPE.CATEGORIES + API_WP_FIELDS.CATEGORIES + perPageQuery + orderByQuery)
}

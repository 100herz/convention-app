// TODO: Maybe add a test file for the api.

const API_URL_WP = 'https://www.convention-net.de/wp-json/wp/v2/'

enum API_WP_TYPE {
  CATEGORIES = 'categories/',
  PAGES = 'pages/',
  POSTS = 'posts/',
}

const API_WP_PAGES = '?_fields=id,title,content'

const API_WP_POSTS =
  '?_fields=id,date_gmt,title,content,excerpt,featured_media,categories,acf,featured_image_thumb,featured_image_medium,categories_names'

const API_WP_CATEGORIES = '?_fields=id,description,name'

/**
 * Fetches the page from the WordPress API with the given id.
 *
 * @param pageId The id of the pages, which should fetched.
 */
export const fetchPageAsync = async (pageId: number): Promise<Response> => {
  return await fetch(API_URL_WP + API_WP_TYPE.PAGES + pageId + API_WP_PAGES)
}

/**
 * Fetches the post from the WordPress API with the given id.
 *
 * @param postId The id of the posts, which should fetched.
 */
export const fetchPostAsync = async (postId: number): Promise<Response> => {
  return await fetch(API_URL_WP + API_WP_TYPE.POSTS + postId + API_WP_POSTS)
}

/**
 * Fetches the posts from the WordPress API.
 *
 * @param categoryId optional - Only the posts with this category id.
 * @param perPage default `15` - The number of the loaded posts.
 */
export const fetchPostsAsync = async (categoryId?: number, perPage = 15): Promise<Response> => {
  const categoryQuery = categoryId ? '&categories=' + categoryId : ''
  const perPageQuery = '&per_page=' + perPage
  return await fetch(API_URL_WP + API_WP_TYPE.POSTS + API_WP_POSTS + categoryQuery + perPageQuery)
}

/**
 * Fetches the categories from the WordPress API.
 *
 * @param perPage default `99` - The number of the loaded categories.
 * @param orderBy default: `description` - The order of the categories.
 */
export const fetchCategoriesAsync = async (perPage = 99, orderBy = 'description'): Promise<Response> => {
  const perPageQuery = '&per_page=' + perPage
  const orderByQuery = '&orderby=' + orderBy
  return await fetch(API_URL_WP + API_WP_TYPE.CATEGORIES + API_WP_CATEGORIES + perPageQuery + orderByQuery)
}

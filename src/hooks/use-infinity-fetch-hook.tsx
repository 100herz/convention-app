import { useCallback, useEffect, useState } from 'react'

import { fetchPostsAsync } from '@utils/api'
import { Article } from '@models/article'

interface Settings {
  categoryId?: string | number
  perPage?: string | number
}

export const useInfinityFetchHook = ({ categoryId, perPage }: Settings = {}): {
  articles: Article[]
  fetchMore: () => void
  isLoading: boolean
} => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setLoading] = useState(true)
  const [maxPages, setMaxPages] = useState(1)
  const [page, setPage] = useState(1)
  const [shouldFetch, setShouldFetch] = useState(true)

  const fetchMore = useCallback(() => {
    setShouldFetch(true)
  }, [])

  useEffect(() => {
    if (!shouldFetch || maxPages < page) return

    const getArticlesAsync = async () => {
      try {
        const response = await fetchPostsAsync({ categoryId, perPage, page })
        const articleResponse: Article[] = await response.json()
        const totalPages = await response.headers.get('X-WP-TotalPages')
        setArticles(currentArticles => [...currentArticles, ...articleResponse])
        setMaxPages(totalPages !== null ? +totalPages : 1)
        setPage(page + 1)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
        setShouldFetch(false)
      }
    }
    getArticlesAsync()
  }, [page, shouldFetch])

  return { articles, fetchMore, isLoading }
}

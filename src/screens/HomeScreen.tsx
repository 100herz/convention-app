import React, { useEffect, useState } from 'react'
import { SectionList, StyleSheet, View, ViewStyle } from 'react-native'

import FeaturedCarousel from '@components/Articles/FeaturedCarousel'
import NewsCarousel from '@components/Articles/NewsCarousel'
import ArticleList from '@components/Articles/ArticleList'
import ArticlePreview from '@components/Articles/ArticlePreview'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import Text from '@components/UI/Text'
import { API_WP_ARTICLE, API_URL_WP } from 'constants/api'
import { Article } from '@models/article'
import { DefaultStyles, defaultStyles } from '@styles/theme'

const HomeScreen: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [newsArticles, setNewsArticles] = useState<Article[]>([])
  const [lastSponsoredArticle, setLastSponsoredArticle] = useState<Article>()

  useEffect(() => {
    const getArticlesAsync = async () => {
      try {
        // TODO: Lazyload all posts instead of hardcoded 25 like now
        const response = await fetch(`${API_URL_WP}${API_WP_ARTICLE}&per_page=25&categories=1`)
        const lastArticles: Article[] = await response.json()
        if (lastArticles[0].acf.sponsored_by !== null && lastArticles[0].acf.sponsored_by.length > 0) {
          lastArticles.shift()
        }
        setArticles(lastArticles)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getArticlesAsync()
  }, [])

  useEffect(() => {
    const getFeaturedArticlesAsync = async () => {
      try {
        const response = await fetch(API_URL_WP + API_WP_ARTICLE)
        const lastArticles: Article[] = await response.json()
        setFeaturedArticles(lastArticles.filter(article => article.acf.featured_slider))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getFeaturedArticlesAsync()
  }, [])

  useEffect(() => {
    const getNewsArticlesAsync = async () => {
      try {
        const response = await fetch(API_URL_WP + API_WP_ARTICLE)
        const lastArticles: Article[] = await response.json()
        setNewsArticles(lastArticles.filter(article => article.acf.news_slider))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getNewsArticlesAsync()
  }, [])

  useEffect(() => {
    const getLastSponsoredArticleAsync = async () => {
      try {
        const response = await fetch(API_URL_WP + API_WP_ARTICLE)
        const lastArticles: Article[] = await response.json()
        setLastSponsoredArticle(
          lastArticles.find(article => article.acf.sponsored_by !== null && article.acf.sponsored_by.length > 0)
        )
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getLastSponsoredArticleAsync()
  }, [])

  const SectionHeader = () => (
    <View style={styles.sectionHeaderContainer}>
      <FeaturedCarousel articles={featuredArticles} />
      <Text style={styles.title}>News</Text>
      <NewsCarousel articles={newsArticles} />
      {lastSponsoredArticle && <ArticlePreview article={lastSponsoredArticle} />}
    </View>
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SectionList
          keyExtractor={item => item.id.toString()}
          stickySectionHeadersEnabled={false}
          sections={[{ data: articles }]}
          renderItem={({ item }: { item: Article }) => <ArticlePreview article={item} />}
          renderSectionHeader={() => <SectionHeader />}
        >
          <ArticleList data={articles} />
        </SectionList>
      )}
    </View>
  )
}

interface Style extends DefaultStyles {
  sectionHeaderContainer: ViewStyle
}

const styles = StyleSheet.create<Style>({
  ...defaultStyles,
  sectionHeaderContainer: {},
  title: {
    ...defaultStyles.title,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 15,
  },
})

export default HomeScreen

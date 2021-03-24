import React, { useEffect, useState } from 'react'
import { SectionList, StyleSheet, View } from 'react-native'

import FeaturedCarousel from '@components/Articles/FeaturedCarousel'
import NewsCarousel from '@components/Articles/NewsCarousel'
import ArticleList from '@components/Articles/ArticleList'
import ArticlePreview from '@components/Articles/ArticlePreview'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import Text from '@components/UI/Text'
import { useInfinityFetchHook } from '@hooks/use-infinity-fetch-hook'
import { Article } from '@models/article'
import { DefaultStyles, defaultStyles } from '@styles/theme'

const HomeScreen: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true)
  const [newsArticles, setNewsArticles] = useState<Article[]>([])
  const [featuredSliderArticles, setFeaturedSliderArticles] = useState<Article[]>([])
  const [newsSliderArticles, setNewsSliderArticles] = useState<Article[]>([])
  const [pinnedArticle, setPinnedArticle] = useState<Article>()

  const { articles, fetchMore, isLoading } = useInfinityFetchHook()

  const isSponsored = (sponsoredProperty: string | null | undefined) =>
    sponsoredProperty !== undefined && sponsoredProperty !== null && sponsoredProperty.length > 0

  useEffect(() => {
    const filteredNewsArticle = articles.filter(article => article.categories.includes(1) && !article.acf?.pinned)

    if (filteredNewsArticle.length === 0) return

    if (isSponsored(filteredNewsArticle[0].acf?.sponsored_by)) filteredNewsArticle.shift()

    setNewsArticles(filteredNewsArticle)

    if (featuredSliderArticles.length > 0 || newsSliderArticles.length > 0 || pinnedArticle) return

    setFeaturedSliderArticles(articles.filter(article => article.acf?.featured_slider).slice(0, 5))
    setNewsSliderArticles(articles.filter(article => article.acf?.news_slider).slice(0, 10))
    setPinnedArticle(articles.find(article => article.acf?.pinned))
    setInitialLoading(false)
  }, [articles])

  const SectionHeader = () => (
    <View>
      <FeaturedCarousel articles={featuredSliderArticles} />
      <Text style={styles.title}>News</Text>
      <NewsCarousel articles={newsSliderArticles} />
      {pinnedArticle && <ArticlePreview article={pinnedArticle} />}
    </View>
  )

  return (
    <View style={styles.container}>
      {isLoading || initialLoading ? (
        <LoadingSpinner />
      ) : (
        <SectionList
          keyExtractor={item => item.id.toString()}
          stickySectionHeadersEnabled={false}
          sections={[{ data: newsArticles }]}
          renderItem={({ item }: { item: Article }) => <ArticlePreview article={item} />}
          renderSectionHeader={() => <SectionHeader />}
          initialNumToRender={10}
          onEndReachedThreshold={2}
          onEndReached={fetchMore}
        >
          <ArticleList data={newsArticles} />
        </SectionList>
      )}
    </View>
  )
}

const styles = StyleSheet.create<DefaultStyles>({
  ...defaultStyles,
  title: {
    ...defaultStyles.title,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 15,
  },
})

export default HomeScreen

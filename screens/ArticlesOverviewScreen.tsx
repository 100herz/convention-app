import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import ArticleList from '@components/Lists/ArticleList'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { API_URL_WP } from 'constants/api'
import { Article } from '@models/article'
import { defaultStyles } from '@styles/theme'

const ArticlesOverviewScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ArticlesOverviewScreen'>>()

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Article[]>([])

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        // TODO: Lazyload all posts instead of hardcoded 25 like now
        const response = await fetch(`${API_URL_WP}posts?_embed&per_page=25&categories=${route.params.categoryId}`)
        setData(await response.json())
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCategoriesAsync()
  }, [])

  return <View style={styles.container}>{isLoading ? <ActivityIndicator /> : <ArticleList data={data} />}</View>
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default ArticlesOverviewScreen

import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import ArticleList from '@components/Articles/ArticleList'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { fetchPostsAsync } from '@utils/api'
import { Article } from '@models/article'
import { DefaultStyles, defaultStyles } from '@styles/theme'

const ArticlesOverviewScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParamList | CategoriesStackParamList, 'ArticlesOverviewScreen'>>()

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Article[]>([])

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const response = await fetchPostsAsync(route.params.categoryId)
        setData(await response.json())
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCategoriesAsync()
  }, [])

  return <View style={styles.container}>{isLoading ? <LoadingSpinner /> : <ArticleList data={data} />}</View>
}

type Style = DefaultStyles

const styles = StyleSheet.create<Style>({
  ...defaultStyles,
})

export default ArticlesOverviewScreen

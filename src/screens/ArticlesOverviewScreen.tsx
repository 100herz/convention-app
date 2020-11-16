import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import ArticleList from '@components/Articles/ArticleList'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import { useInfinityFetchHook } from '@hooks/use-infinity-fetch-hook'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { DefaultStyles, defaultStyles } from '@styles/theme'

const ArticlesOverviewScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParamList | CategoriesStackParamList, 'ArticlesOverviewScreen'>>()

  const { articles, fetchMore, isLoading } = useInfinityFetchHook({ categoryId: route.params.categoryId })

  return (
    <View style={styles.container}>
      {isLoading ? <LoadingSpinner /> : <ArticleList data={articles} onEndReached={fetchMore} />}
    </View>
  )
}

type Style = DefaultStyles

const styles = StyleSheet.create<Style>({
  ...defaultStyles,
})

export default ArticlesOverviewScreen

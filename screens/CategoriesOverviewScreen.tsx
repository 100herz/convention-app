import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import LinkList from '@components/Lists/LinkList'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { defaultStyles } from '@styles/theme'
import { Category } from '@models/category'
import { API_URL_WP } from 'constants/api'

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Category[]>([])

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const response = await fetch(`${API_URL_WP}categories?per_page=99&orderby=description`)
        const categories: Category[] = await response.json()
        setData(categories.filter(category => category.description !== ''))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCategoriesAsync()
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <LinkList data={data} navigation={navigation} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    paddingHorizontal: 25,
  },
})

export default CategoryScreen

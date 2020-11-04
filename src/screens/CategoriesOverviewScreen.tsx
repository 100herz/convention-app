import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import LinkList from '@components/Lists/LinkList'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import { defaultStyles } from '@styles/theme'
import { Category } from '@models/category'
import { API_URL_WP } from 'constants/api'

const CategoryScreen: React.FC = () => {
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

  return <View style={styles.container}>{isLoading ? <LoadingSpinner /> : <LinkList data={data} />}</View>
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    paddingHorizontal: 25,
  },
})

export default CategoryScreen

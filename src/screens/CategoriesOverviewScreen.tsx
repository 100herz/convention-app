import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import CategoryList from '@components/Articles/CategoryList'
import LoadingSpinner from '@components/UI/LoadingSpinner'
import { fetchCategoriesAsync } from '@utils/api'
import { Category } from '@models/category'
import { DefaultStyles, defaultStyles } from '@styles/theme'

const CategoryScreen: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Category[]>([])

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const response = await fetchCategoriesAsync()
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

  return <View style={styles.container}>{isLoading ? <LoadingSpinner /> : <CategoryList data={data} />}</View>
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
})

export default CategoryScreen

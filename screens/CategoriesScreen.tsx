import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import LinkList from '@components/LinkList'
import { defaultStyles } from '@styles/theme'
import { Category } from '@models/categories'

import categoryData from '../data/categories.json'

const categories: Category[] = categoryData

interface Props {}

const CategoryScreen: React.FC<Props> = props => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Category[]>([])

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const response = await fetch('https://www.convention-net.de/wp-json/wp/v2/categories?per_page=99')
        setData(await response.json())
      } catch (error) {
        console.error(error)
        // TODO: Remove this step after development.
        // Load the categories currently from a json file if they can't fetch from the server
        setData(categories)
      } finally {
        setLoading(false)
      }
    }
    getCategoriesAsync()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategorien</Text>
      {isLoading ? <ActivityIndicator /> : <LinkList data={data} />}
    </View>
  )
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default CategoryScreen

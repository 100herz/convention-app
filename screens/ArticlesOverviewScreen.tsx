import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { defaultStyles } from '@styles/theme'
import Text from '@components/UI/Text'
import { RootStackParamList } from '@navigations/ArticleNavigator'

const ArticlesOverviewScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ArticlesOverviewScreen'>>()

  return (
    <View style={styles.container}>
      <Text>ArticlesOverviewScreen</Text>
      <Text>categoryId: {route.params.categoryId}</Text>
      <Text>categoryName: {route.params.categoryName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default ArticlesOverviewScreen

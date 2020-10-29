import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/UI/Text'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@navigations/ArticleNavigator'

interface Props {}

const ArticleScreen: React.FC<Props> = props => {
  const route = useRoute<RouteProp<RootStackParamList, 'ArticleScreen'>>()

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'open-sans-bold', marginVertical: 15, color: 'blue' }}>from ArticleScreen.tsx</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default ArticleScreen

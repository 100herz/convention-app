import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '@navigations/ArticleNavigator'

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'open-sans-bold', marginVertical: 15, color: 'blue' }}>from HomeScreen.tsx</Text>
      <Button title="Go to Categories Screen" onPress={() => navigation.navigate('CategoriesOverviewScreen')} />
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

export default HomeScreen

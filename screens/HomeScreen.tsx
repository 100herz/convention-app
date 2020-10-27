import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '@navigations/ArticleNavigator'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Categories'>
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Here comes the Articles component.</Text>
      <Text style={{ fontFamily: 'open-sans-bold', marginTop: 15, color: 'blue' }}>from HomeScreen.tsx</Text>
      <Button title="Go to Categories Screen" onPress={() => navigation.navigate('Categories')} />
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

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {}

const CategoriesScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>Hello from convention app!</Text>
      <Text style={{ fontFamily: 'open-sans-bold', marginTop: 15, color: 'blue' }}>App.tsx - File</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CategoriesScreen

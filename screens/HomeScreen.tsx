import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Here comes the Articles component.</Text>
      <Text style={{ fontFamily: 'open-sans-bold', marginTop: 15, color: 'blue' }}>from HomeScreen.tsx</Text>
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

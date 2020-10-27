import React from 'react'
import { StyleSheet, Text as DefaultText } from 'react-native'

import { defaultStyles } from '@styles/theme'

interface Props {}

const Text: React.FC<Props> = ({ children }) => {
  return <DefaultText style={styles.text}>{children}</DefaultText>
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default Text

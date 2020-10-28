import React from 'react'
import { StyleSheet, Text as DefaultText, TextStyle } from 'react-native'

import { defaultStyles } from '@styles/theme'

interface Props {
  style?: TextStyle
}

const Text: React.FC<Props> = ({ children, style }) => {
  return <DefaultText style={{ ...styles.text, ...style }}>{children}</DefaultText>
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default Text

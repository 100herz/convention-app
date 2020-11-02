import React from 'react'
import { StyleSheet, Text as DefaultText, TextStyle } from 'react-native'

import { defaultStyles } from '@styles/theme'

interface Props {
  style?: TextStyle
  testID?: string
}

const Text: React.FC<Props> = ({ children, style, testID }) => {
  return (
    <DefaultText style={{ ...styles.text, ...style }} testID={testID}>
      {children}
    </DefaultText>
  )
}

const styles = StyleSheet.create({
  ...defaultStyles,
})

export default Text

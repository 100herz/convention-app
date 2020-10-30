import React from 'react'
import { GestureResponderEvent, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'

import Touchable from '@components/UI/Touchable'
import Text from '@components/UI/Text'
import { colors, fonts } from '@styles/theme'

interface Props {
  onPress: (event: GestureResponderEvent) => void
  title: string
  style?: ViewStyle
  textStyle?: TextStyle
}

const Button: React.FC<Props> = ({ onPress, title, style, textStyle }) => {
  return (
    <Touchable onPress={onPress}>
      <View style={{ ...styles.container, ...style }}>
        <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
      </View>
    </Touchable>
  )
}

interface Styles {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.accentColor,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: fonts.sansBold,
  },
})

export default Button

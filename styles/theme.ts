import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export const colors = {
  primaryColor: '#333333',
  accentColor: '#872232',
  gray: '#838e9d',
  grayLight: '#dfe3e8',
}

interface DefaultStyles {
  container: ViewStyle
  title: TextStyle
  text: TextStyle
}

export const defaultStyles = StyleSheet.create<DefaultStyles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textTransform: 'uppercase',
    color: colors.accentColor,
  },
  text: {
    fontFamily: 'open-sans',
    color: colors.primaryColor,
  },
})

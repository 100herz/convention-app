import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export const colors = {
  primaryColor: '#333333',
  accentColor: '#872232',
  gray: '#838e9d',
  grayLight: '#dfe3e8',
}

export const fonts = {
  sans: 'sans',
  sansBold: 'sans-bold',
  serifBold: 'serif-bold',
}

export interface DefaultStyles {
  container: ViewStyle
  title: TextStyle
  text: TextStyle
  dateContainer: ViewStyle
  date: TextStyle
}

export const defaultStyles = StyleSheet.create<DefaultStyles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.sansBold,
    textTransform: 'uppercase',
    color: colors.accentColor,
  },
  text: {
    fontFamily: fonts.sans,
    color: colors.primaryColor,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  date: {
    color: colors.accentColor,
    fontSize: 10,
    marginLeft: 5,
  },
})

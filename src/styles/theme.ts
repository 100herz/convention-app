import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'

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

export const htmlBodyTagStyles: HTML.StylesDictionary = {
  a: {
    color: colors.accentColor,
    textDecorationLine: 'none',
  },
  img: {
    borderRadius: 15,
  },
}

export interface DefaultStyles {
  container: ViewStyle
  title: TextStyle
  text: TextStyle
  dateContainer: ViewStyle
  date: TextStyle
  listContainer: ViewStyle
  listItemContainer: ViewStyle
  switch: ViewStyle
  backgroundImage: ViewStyle
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
  listContainer: {
    paddingTop: 15,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  switch: {
    transform: Platform.OS === 'ios' ? [{ scaleX: 0.7 }, { scaleY: 0.7 }] : [],
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
})

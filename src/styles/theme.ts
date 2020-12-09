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

export const htmlBodyClassesStyles: HTML.StylesDictionary = {
  'post-tslideshow-nav-outer': { display: 'none' },
  'post-tslideshow-nav-outer-bottom': { display: 'none' },
}

export const htmlBodyTagStyles: HTML.StylesDictionary = {
  a: {
    color: colors.accentColor,
    textDecorationLine: 'none',
  },
  img: {
    borderRadius: 15,
  },
  figure: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontStyle: 'italic',
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
  sponsoredArticleContainer: ViewStyle
  sponsoredTextContainer: ViewStyle
  sponsoredText: TextStyle
  sponsoredTitleContainer: ViewStyle
  sponsoredTitle: TextStyle
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
    fontSize: 15,
    lineHeight: 15 * 1.5,
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
    flex: 1,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sponsoredArticleContainer: {
    padding: 15,
    borderRadius: 10,
  },
  sponsoredTextContainer: {
    alignSelf: 'flex-start',
    maxWidth: '70%',
    marginTop: 50,
    marginLeft: -15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primaryColor,
  },
  sponsoredText: {
    color: colors.grayLight,
    fontSize: 14,
    lineHeight: 14 * 1.25,
  },
  sponsoredTitleContainer: {
    padding: 15,
  },
  sponsoredTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.25,
    fontFamily: fonts.serifBold,
  },
  switch: {
    transform: Platform.OS === 'ios' ? [{ scaleX: 0.7 }, { scaleY: 0.7 }] : [],
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
})

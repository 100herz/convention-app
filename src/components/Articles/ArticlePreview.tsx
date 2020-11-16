import React from 'react'
import { Dimensions, Image, ImageBackground, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import LogoRound from '@components/UI/LogoRound'
import Text from '@components/UI/Text'
import Button from '@components/UI/Button'
import Touchable from '@components/UI/Touchable'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { getLocaleLongDate } from '@utils/date-time'
import { hexToRgb } from '@utils/styling'
import { Article } from '@models/article'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  article: Article
  hasImage?: boolean
  ignoreSponsored?: boolean
}

const ArticlePreview: React.FC<Props> = ({ article, hasImage = true, ignoreSponsored = false }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList | CategoriesStackParamList>>()

  const defaultArticle = (
    <View style={styles.articleContainer}>
      {hasImage && (
        <View style={styles.imageColumn}>
          {article.featured_media ? (
            <Image style={styles.image as ImageStyle} source={{ uri: article.featured_image_thumb }} />
          ) : (
            <View style={styles.image as ViewStyle} testID="no-image">
              <LogoRound />
            </View>
          )}
        </View>
      )}
      <View style={styles.textColumn}>
        <HTML baseFontStyle={styles.title} html={article.title.rendered} />
        <View style={styles.dateContainer}>
          <Ionicons name="ios-clock" size={12} color={colors.accentColor} />
          <Text style={styles.date}>{getLocaleLongDate(new Date(article.date_gmt))}</Text>
        </View>
        <Button
          textStyle={{ fontSize: 12 }}
          title="Details"
          onPress={() => navigation.navigate('ArticleScreen', { postId: article.id })}
          testID="button"
        />
      </View>
    </View>
  )

  const sponsoredArticle = (
    <Touchable onPress={() => navigation.navigate('ArticleScreen', { postId: article.id })}>
      <View style={styles.sponsoredArticleContainer}>
        <ImageBackground
          source={{ uri: article.featured_image_medium }}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.sponsoredTextContainer}>
            <Text style={styles.sponsoredText}>
              Sponsored by <Text style={{ fontFamily: fonts.sansBold }}>{article.acf?.sponsored_by}</Text>
            </Text>
          </View>
          <View style={styles.sponsoredTitleContainer}>
            <HTML baseFontStyle={styles.sponsoredTitle} html={article.title.rendered} />
          </View>
        </ImageBackground>
      </View>
    </Touchable>
  )

  return ignoreSponsored || !article.acf?.sponsored_by || article.acf?.sponsored_by === ''
    ? defaultArticle
    : sponsoredArticle
}

interface Styles extends DefaultStyles {
  articleContainer: ViewStyle
  imageColumn: ViewStyle
  image: ImageStyle | ViewStyle
  textColumn: ViewStyle
  sponsoredArticleContainer: ViewStyle
  sponsoredTextContainer: ViewStyle
  sponsoredText: TextStyle
  sponsoredTitleContainer: ViewStyle
  sponsoredTitle: TextStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  backgroundImage: {
    ...defaultStyles.backgroundImage,
    justifyContent: 'space-between',
  },
  articleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  imageColumn: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 15,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
  textColumn: {
    width: Dimensions.get('screen').width - 130,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fonts.sans,
    fontSize: 13,
    color: colors.primaryColor,
  },
  sponsoredArticleContainer: {
    padding: 10,
    height: Dimensions.get('screen').width - 10,
    borderRadius: 10,
  },
  sponsoredTextContainer: {
    alignItems: 'flex-end',
    backgroundColor: `rgba(${hexToRgb(colors.grayLight)}, 0.7)`,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sponsoredText: {
    fontSize: 14,
    textAlign: 'right',
  },
  sponsoredTitleContainer: {
    justifyContent: 'flex-end',
    backgroundColor: `rgba(${hexToRgb(colors.grayLight)}, 0.7)`,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  sponsoredTitle: {
    fontSize: 16,
    fontFamily: fonts.sans,
  },
})

export default ArticlePreview

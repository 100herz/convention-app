import React from 'react'
import { Dimensions, Image, ImageBackground, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import LogoRound from '@components/UI/LogoRound'
import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { getLocaleLongDate } from '@utils/date-time'
import { Article } from '@models/article'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  article: Article
  hasImage?: boolean
  ignoreSponsored?: boolean
}

const ArticlePreview: React.FC<Props> = ({ article, hasImage = true, ignoreSponsored = false }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList | CategoriesStackParamList>>()
  const isSponsored = () => !!(article.acf?.sponsored_by && article.acf?.sponsored_by.length > 0 && !ignoreSponsored)
  const isPinned = () => !!(article.acf?.pinned && !ignoreSponsored)

  const defaultArticle = (
    <Touchable onPress={() => navigation.navigate('ArticleScreen', { postId: article.id })}>
      <View style={styles.articleContainer} testID="default-article">
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
            <Ionicons name="time" size={12} color={colors.accentColor} />
            <Text style={styles.date}>{getLocaleLongDate(new Date(article.date_gmt))}</Text>
          </View>
        </View>
      </View>
    </Touchable>
  )

  const sponsoredArticle = (
    <Touchable onPress={() => navigation.navigate('ArticleScreen', { postId: article.id })}>
      <View style={styles.sponsoredArticleContainer} testID="sponsored-article">
        <ImageBackground
          source={{ uri: article.featured_image_medium }}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 15 }}
        >
          {isSponsored() && (
            <View style={styles.sponsoredTextContainer} testID="sponsored-text-container">
              <Text style={styles.sponsoredText}>
                Sponsored by:{' '}
                <Text style={{ ...styles.sponsoredText, fontFamily: fonts.sansBold }}>{article.acf?.sponsored_by}</Text>
              </Text>
            </View>
          )}
        </ImageBackground>
        <View style={styles.sponsoredTitleContainer}>
          <HTML baseFontStyle={styles.sponsoredTitle} html={article.title.rendered} />
        </View>
      </View>
    </Touchable>
  )

  return isSponsored() || isPinned() ? sponsoredArticle : defaultArticle
}

interface Styles extends DefaultStyles {
  articleContainer: ViewStyle
  imageColumn: ViewStyle
  image: ImageStyle | ViewStyle
  textColumn: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  backgroundImage: {
    ...defaultStyles.backgroundImage,
    height: Dimensions.get('screen').width - 100,
  },
  articleContainer: {
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
    lineHeight: 13 * 1.25,
    color: colors.primaryColor,
  },
})

export default ArticlePreview

import React from 'react'
import { Dimensions, Image, ImageBackground, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import Button from '@components/UI/Button'
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
          {article._embedded['wp:featuredmedia'] ? (
            <Image style={styles.image} source={{ uri: article._embedded['wp:featuredmedia'][0].source_url }} />
          ) : (
            <View style={styles.noImage} testID="no-image">
              <Text style={styles.noImageText}>NO</Text>
              <Text style={styles.noImageText}>IMAGE</Text>
              <Text style={styles.noImageText}>SET</Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.textColumn}>
        <HTML baseFontStyle={styles.title} html={`${article.title.rendered}`} />
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
    <View style={styles.sponsoredArticleContainer}>
      <ImageBackground
        source={{ uri: article._embedded['wp:featuredmedia'] && article._embedded['wp:featuredmedia'][0].source_url }}
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.sponsoredTextContainer}>
          <Text style={styles.sponsoredText}>
            Sponsored by <Text style={{ fontFamily: fonts.sansBold }}>{article.acf.sponsored_by}</Text>
          </Text>
        </View>
        <View style={styles.sponsoredTitleContainer}>
          <Text style={styles.sponsoredTitle}>{article.title.rendered}</Text>
        </View>
      </ImageBackground>
    </View>
  )

  return ignoreSponsored || !article.acf.sponsored_by || article.acf.sponsored_by === ''
    ? defaultArticle
    : sponsoredArticle
}

interface Styles extends DefaultStyles {
  articleContainer: ViewStyle
  imageColumn: ViewStyle
  image: ImageStyle
  noImage: ViewStyle
  noImageText: TextStyle
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
  noImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grayLight,
    borderRadius: 15,
  },
  noImageText: {
    color: 'black',
    fontFamily: fonts.sansBold,
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
    fontSize: 18,
  },
})

export default ArticlePreview

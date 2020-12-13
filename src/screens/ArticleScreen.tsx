import React, { useEffect, useState } from 'react'
import { Dimensions, Linking, ScrollView, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import HTML from 'react-native-render-html'
import { Ionicons } from '@expo/vector-icons'

import LoadingSpinner from '@components/UI/LoadingSpinner'
import Text from '@components/UI/Text'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { fetchPostAsync } from '@utils/api'
import { getLocaleLongDate } from '@utils/date-time'
import { Article } from '@models/article'
import { colors, DefaultStyles, defaultStyles, fonts, htmlBodyClassesStyles, htmlBodyTagStyles } from '@styles/theme'

const ArticleScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParamList | CategoriesStackParamList, 'ArticleScreen'>>()

  const [isLoading, setLoading] = useState(true)
  const [article, setArticle] = useState<Article | undefined>(undefined)
  const [isSponsored, setIsSponsored] = useState(false)

  useEffect(() => {
    const getArticlesAsync = async () => {
      try {
        const articleResponse = await fetchPostAsync(route.params.postId)
        const respondedArticle = await articleResponse.json()
        setArticle(respondedArticle)
        setIsSponsored(
          respondedArticle.acf?.sponsored_by !== undefined &&
            respondedArticle.acf.sponsored_by !== null &&
            respondedArticle.acf.sponsored_by.length > 0
        )
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getArticlesAsync()
  }, [])

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        article && (
          <ScrollView style={styles.container}>
            <View style={styles.categoriesContainer}>
              {article.categories_names
                .map<React.ReactNode>(category => (
                  <Text key={category} style={styles.category}>
                    {category}
                  </Text>
                ))
                .reduce((prev, curr) => [prev, <Text style={{ fontSize: 10 }}> | </Text>, curr])}
            </View>
            <View style={styles.titleContainer}>
              <HTML baseFontStyle={styles.title} html={article.title.rendered} />
            </View>
            <View style={styles.dateContainer}>
              <Ionicons name="time" size={12} color={colors.accentColor} />
              <Text style={styles.date}>{getLocaleLongDate(new Date(article.date_gmt || Date.now.toString()))}</Text>
            </View>
            <HTML baseFontStyle={styles.teaser} html={article.excerpt.rendered} />
            {isSponsored && (
              <View style={styles.sponsoredTextContainer}>
                <Text style={styles.sponsoredText}>Dieser Artikel wird präsentiert von:</Text>
                <Text style={{ ...styles.sponsoredText, fontFamily: fonts.sansBold, paddingTop: 8 }}>
                  {article.acf?.sponsored_by}
                </Text>
              </View>
            )}
            <HTML
              containerStyle={styles.htmlContainer}
              baseFontStyle={styles.text}
              tagsStyles={htmlBodyTagStyles}
              classesStyles={htmlBodyClassesStyles}
              html={article.content.rendered}
              ignoredStyles={['height', 'width']}
              imagesMaxWidth={Dimensions.get('window').width - 30}
              onLinkPress={(_, href) => Linking.openURL(href)}
            />
          </ScrollView>
        )
      )}
    </React.Fragment>
  )
}

interface Styles extends DefaultStyles {
  categoriesContainer: ViewStyle
  category: TextStyle
  titleContainer: ViewStyle
  teaser: TextStyle
  htmlContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    padding: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  category: {
    ...defaultStyles.title,
    fontSize: 10,
  },
  titleContainer: {
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.serifBold,
    lineHeight: 32,
    paddingTop: 10,
  },
  teaser: {
    color: colors.accentColor,
    fontSize: 18,
    lineHeight: 18 * 1.5,
  },
  sponsoredTextContainer: {
    ...defaultStyles.sponsoredTextContainer,
    alignSelf: 'auto',
    marginLeft: 0,
    marginTop: 0,
    maxWidth: '100%',
    borderRadius: 10,
  },
  htmlContainer: {
    paddingBottom: 15,
  },
})

export default ArticleScreen

import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import HTML from 'react-native-render-html'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { getLocaleLongDate } from '@utils/date-time'
import { API_URL_WP } from 'constants/api'
import { Article } from '@models/article'
import { colors, DefaultStyles, defaultStyles, fonts } from '@styles/theme'

interface Props {}

const ArticleScreen: React.FC<Props> = props => {
  const route = useRoute<RouteProp<RootStackParamList, 'ArticleScreen'>>()

  const [isLoading, setLoading] = useState(true)
  const [article, setArticle] = useState<Article | undefined>(undefined)

  useEffect(() => {
    const getArticlesAsync = async () => {
      try {
        const articleResponse = await fetch(`${API_URL_WP}posts/${route.params.postId}?_embed`)
        const articleData: Article = await articleResponse.json()
        setArticle(articleData)
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
        <ActivityIndicator />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.categoriesContainer}>
            {article?._embedded['wp:term'][0].map(category => (
              <Text key={category.id} style={styles.category}>
                {category.name}
              </Text>
            ))}
          </View>
          <View style={styles.titleContainer}>
            <HTML baseFontStyle={styles.title} html={`${article?.title.rendered}`} />
          </View>
          <View style={styles.dateContainer}>
            <Ionicons name="ios-clock" size={12} color={colors.accentColor} />
            <Text style={styles.date}>{getLocaleLongDate(new Date(article?.date_gmt || Date.now.toString()))}</Text>
          </View>
          <HTML baseFontStyle={styles.teaser} html={`${article?.excerpt.rendered}`} />
          <HTML
            baseFontStyle={styles.text}
            html={`${article?.content.rendered}`}
            ignoredStyles={['height', 'width']}
            imagesMaxWidth={Dimensions.get('window').width - 30}
            // style={{ width: '100%' }}
          />
        </ScrollView>
      )}
    </React.Fragment>
  )
}

interface Styles extends DefaultStyles {
  categoriesContainer: ViewStyle
  category: TextStyle
  titleContainer: ViewStyle
  teaser: TextStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    padding: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  category: {
    ...defaultStyles.title,
    fontSize: 10,
    marginTop: 5,
    paddingRight: 5,
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
  },
})

export default ArticleScreen

import React from 'react'
import { Dimensions, Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import Button from '@components/UI/Button'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { Article } from '@models/article'
import { getLocaleLongDate } from '@utils/date-time'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  article: Article
  hasImage?: boolean
}

const ArticlePreview: React.FC<Props> = ({ article, hasImage = true }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList | CategoriesStackParamList>>()

  return (
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
}

interface Styles extends DefaultStyles {
  articleContainer: ViewStyle
  imageColumn: ViewStyle
  image: ImageStyle
  noImage: ViewStyle
  noImageText: TextStyle
  textColumn: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
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
})

export default ArticlePreview

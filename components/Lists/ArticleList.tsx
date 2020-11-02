import React from 'react'
import { Dimensions, FlatList, Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import Button from '@components/UI/Button'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { Article } from '@models/article'
import { getLocaleLongDate } from '@utils/date-time'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  data: Article[]
}

const ArticleList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const ArticleComponent = ({ item }: { item: Article }) => (
    <View style={styles.articleContainer}>
      <View style={styles.imageColumn}>
        {item._embedded['wp:featuredmedia'] ? (
          <Image style={styles.image} source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }} />
        ) : (
          <View style={styles.noImage} testID="no-image">
            <Text style={styles.noImageText}>NO</Text>
            <Text style={styles.noImageText}>IMAGE</Text>
            <Text style={styles.noImageText}>SET</Text>
          </View>
        )}
      </View>
      <View style={styles.textColumn}>
        <HTML baseFontStyle={styles.title} html={`${item.title.rendered}`} />
        <View style={styles.dateContainer}>
          <Ionicons name="ios-clock" size={12} color={colors.accentColor} />
          <Text style={styles.date}>{getLocaleLongDate(new Date(item.date_gmt))}</Text>
        </View>
        <Button
          textStyle={{ fontSize: 12 }}
          title="Details"
          onPress={() => navigation.navigate('ArticleScreen', { postId: item.id })}
          testID="button"
        />
      </View>
    </View>
  )

  return (
    <FlatList<Article> keyExtractor={item => item.id.toString()} data={data} renderItem={ArticleComponent}></FlatList>
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

export default ArticleList

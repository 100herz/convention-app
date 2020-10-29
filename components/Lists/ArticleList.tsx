import React from 'react'
import { Dimensions, FlatList, Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import HTML from 'react-native-render-html'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import Button from '@components/UI/Button'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { Article } from '@models/article'
import { getLocaleLongDate } from '@utils/date-time'
import { colors } from '@styles/theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
  data: Article[]
}

const ArticleList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const Article = ({ item }: { item: Article }) => (
    <View style={styles.articleContainer}>
      <View style={styles.imageColumn}>
        {item._embedded['wp:featuredmedia'] ? (
          <Image style={styles.image} source={{ uri: item._embedded['wp:featuredmedia'][0].source_url }} />
        ) : (
          <View style={styles.noImage}>
            <Text style={{ color: 'black', fontFamily: 'open-sans-bold' }}>NO</Text>
            <Text style={{ color: 'black', fontFamily: 'open-sans-bold' }}>IMAGE</Text>
            <Text style={{ color: 'black', fontFamily: 'open-sans-bold' }}>SET</Text>
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
        />
      </View>
    </View>
  )

  return <FlatList<Article> keyExtractor={item => item.id.toString()} data={data} renderItem={Article}></FlatList>
}

interface Styles {
  articleContainer: ViewStyle
  imageColumn: ViewStyle
  image: ImageStyle
  noImage: ViewStyle
  textColumn: ViewStyle
  title: TextStyle
  dateContainer: ViewStyle
  date: TextStyle
}

const styles = StyleSheet.create<Styles>({
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
  textColumn: {
    width: Dimensions.get('screen').width - 130,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 13,
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

export default ArticleList

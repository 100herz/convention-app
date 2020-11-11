import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import HTML from 'react-native-render-html'
import Carousel from 'react-native-snap-carousel'

import Touchable from '@components/UI/Touchable'
import Text from '@components/UI/Text'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { hexToRgb } from '@utils/styling'
import { Article } from '@models/article'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  articles: Article[]
}

const FeaturedCarousel: React.FC<Props> = ({ articles }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()

  const screenWidth = Dimensions.get('screen').width

  const slideItem = ({ item }: { item: Article }) => (
    <Touchable onPress={() => navigation.navigate('ArticleScreen', { postId: item.id })}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: item.featured_image_thumb }} style={styles.backgroundImage}>
          <View
            style={{
              ...styles.slideContainer,
              justifyContent:
                item.acf.sponsored_by !== undefined &&
                item.acf.sponsored_by !== null &&
                item.acf.sponsored_by.length > 0
                  ? 'space-between'
                  : 'flex-end',
            }}
          >
            {item.acf.sponsored_by !== undefined && item.acf.sponsored_by !== null && item.acf.sponsored_by.length > 0 && (
              <Text style={styles.sponsored}>
                Sponsored by <Text style={{ fontFamily: fonts.sansBold }}>{item.acf.sponsored_by}</Text>
              </Text>
            )}
            <View style={styles.titleContainer}>
              <HTML baseFontStyle={styles.title} html={item.title.rendered} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Touchable>
  )
  return (
    <Carousel
      data={articles}
      renderItem={slideItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      inactiveSlideOpacity={0.5}
      inactiveSlideScale={0.8}
    />
  )
}

interface Styles extends DefaultStyles {
  slideContainer: ViewStyle
  sponsored: TextStyle
  titleContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    height: Dimensions.get('screen').height * 0.3,
  },
  slideContainer: {
    flex: 1,
  },
  sponsored: {
    width: 'auto',
    alignItems: 'flex-end',
    backgroundColor: `rgba(${hexToRgb(colors.grayLight)}, 0.7)`,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 14,
    textAlign: 'right',
  },
  titleContainer: {
    justifyContent: 'flex-end',
    backgroundColor: `rgba(${hexToRgb(colors.grayLight)}, 0.7)`,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.sans,
  },
})

export default FeaturedCarousel

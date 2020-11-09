import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Text from '@components/UI/Text'
import { hexToRgb } from '@utils/styling'
import { Article } from '@models/article'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  articles: Article[]
}

const FeaturedCarousel: React.FC<Props> = ({ articles }) => {
  const screenWidth = Dimensions.get('screen').width

  const slideItem = ({ item }: { item: Article }) => (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0].source_url }}
        style={styles.backgroundImage}
      >
        <View
          style={{
            ...styles.slideContainer,
            justifyContent:
              item.acf.sponsored_by !== null && item.acf.sponsored_by.length > 0 ? 'space-between' : 'flex-end',
          }}
        >
          {item.acf.sponsored_by !== null && item.acf.sponsored_by.length > 0 && (
            <Text style={styles.sponsored}>
              Sponsored by <Text style={{ fontFamily: fonts.sansBold }}>{item.acf.sponsored_by}</Text>
            </Text>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title.rendered}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    fontSize: 18,
  },
})

export default FeaturedCarousel

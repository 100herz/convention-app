import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import HTML from 'react-native-render-html'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import Touchable from '@components/UI/Touchable'
import Text from '@components/UI/Text'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { Article } from '@models/article'
import { colors, defaultStyles, DefaultStyles, fonts } from '@styles/theme'

interface Props {
  articles: Article[]
}

const FeaturedCarousel: React.FC<Props> = ({ articles }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()

  const [activeSlide, setActiveSlide] = useState(0)

  const screenWidth = Dimensions.get('screen').width

  /* istanbul ignore next */
  const handleOnSnap = (index: number) => setActiveSlide(index)

  const slideItem = ({ item }: { item: Article }) => {
    const isSponsored = () =>
      !!(item.acf?.sponsored_by !== undefined && item.acf.sponsored_by !== null && item.acf.sponsored_by.length > 0)

    return (
      <Touchable
        onPress={() => navigation.navigate('ArticleScreen', { postId: item.id })}
        testID="featuredCarouselItem"
      >
        <View style={styles.container}>
          <ImageBackground source={{ uri: item.featured_image_thumb }} style={styles.backgroundImage}>
            {isSponsored() && (
              <View style={styles.sponsoredTextContainer}>
                <Text style={styles.sponsoredText}>Sponsored by:</Text>
                <Text style={{ ...styles.sponsoredText, fontFamily: fonts.sansBold }}>{item.acf?.sponsored_by}</Text>
              </View>
            )}
          </ImageBackground>
          <View style={styles.titleContainer}>
            <HTML baseFontStyle={isSponsored() ? styles.sponsoredTitle : styles.title} html={item.title.rendered} />
          </View>
        </View>
      </Touchable>
    )
  }

  return (
    <View>
      <Carousel
        data={articles}
        renderItem={slideItem}
        onSnapToItem={handleOnSnap}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.8}
      />

      <Pagination
        dotsLength={articles.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 0 }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.accentColor,
        }}
        inactiveDotStyle={{ backgroundColor: colors.gray }}
        inactiveDotOpacity={1}
      />
    </View>
  )
}

interface Styles extends DefaultStyles {
  titleContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    height: Dimensions.get('screen').width,
  },
  backgroundImage: {
    ...defaultStyles.backgroundImage,
    justifyContent: 'flex-end',
  },
  sponsoredTextContainer: {
    ...defaultStyles.sponsoredTextContainer,
    marginLeft: 0,
    maxWidth: '100%',
  },
  sponsoredText: {
    ...defaultStyles.sponsoredText,
    fontSize: 12,
    lineHeight: 12 * 1.25,
  },
  titleContainer: {
    ...defaultStyles.sponsoredTitleContainer,
  },
  title: {
    fontSize: 18,
    lineHeight: 18 * 1.5,
    fontFamily: fonts.sans,
  },
})

export default FeaturedCarousel

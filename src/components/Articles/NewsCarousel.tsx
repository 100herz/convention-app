import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import ArticlePreview from '@components/Articles/ArticlePreview'
import { Article } from '@models/article'

interface Props {
  articles: Article[]
}

const NewsCarousel: React.FC<Props> = ({ articles }) => {
  const screenWidth = Dimensions.get('screen').width

  const slideItem = ({ item }: { item: Article }) => <ArticlePreview article={item} hasImage={false} ignoreSponsored />

  return (
    <Carousel
      data={articles}
      renderItem={slideItem}
      sliderHeight={150}
      sliderWidth={screenWidth}
      itemWidth={screenWidth / 1.7}
      enableSnap={false}
      activeSlideAlignment="start"
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
    />
  )
}

export default NewsCarousel

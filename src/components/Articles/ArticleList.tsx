import React from 'react'
import { FlatList } from 'react-native'

import ArticlePreview from '@components/Articles/ArticlePreview'
import { Article } from '@models/article'

interface Props {
  data: Article[]
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | null
}

const ArticleList: React.FC<Props> = ({ data, onEndReached }) => {
  return (
    <FlatList<Article>
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={({ item }: { item: Article }) => <ArticlePreview article={item} />}
      initialNumToRender={10}
      onEndReachedThreshold={2}
      onEndReached={onEndReached}
    />
  )
}

export default ArticleList

import React from 'react'
import { FlatList } from 'react-native'

import ArticlePreview from '@components/Articles/ArticlePreview'
import { Article } from '@models/article'

interface Props {
  data: Article[]
}

const ArticleList: React.FC<Props> = ({ data }) => {
  return (
    <FlatList<Article>
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={({ item }: { item: Article }) => <ArticlePreview article={item} />}
    />
  )
}

export default ArticleList

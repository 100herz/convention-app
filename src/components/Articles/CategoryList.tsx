import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
import { HomeStackParamList } from '@navigations/HomeNavigator'
import { CategoriesStackParamList } from '@navigations/CategoriesNavigator'
import { Category } from '@models/category'
import { colors, defaultStyles, DefaultStyles } from '@styles/theme'

interface Props {
  data: Category[]
}

const CategoryList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList | CategoriesStackParamList>>()

  const Link = ({ item }: { item: Category }) => (
    <Touchable
      onPress={() => navigation.navigate('ArticlesOverviewScreen', { categoryId: item.id, categoryName: item.name })}
      testID="link"
    >
      <View style={styles.listItemContainer}>
        <Text>{item.name}</Text>
        <Ionicons name="arrow-forward" size={20} color={colors.gray} />
      </View>
    </Touchable>
  )

  return (
    <FlatList<Category>
      style={styles.listContainer}
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={Link}
    />
  )
}

const styles = StyleSheet.create<DefaultStyles>({
  ...defaultStyles,
})

export default CategoryList

import React from 'react'
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
import { RootStackParamList } from '@navigations/ArticleNavigator'
import { Category } from '@models/category'
import { colors } from '@styles/theme'

interface Props {
  data: Category[]
  navigation: StackNavigationProp<RootStackParamList>
}

const LinkList: React.FC<Props> = ({ data, navigation }) => {
  const Link = ({ item }: { item: Category }) => (
    <Touchable
      onPress={() => navigation.navigate('ArticlesOverviewScreen', { categoryId: item.id, categoryName: item.name })}
    >
      <View style={styles.linkContainer}>
        <Text>{item.name}</Text>
        <Ionicons name="ios-arrow-round-forward" size={20} color={colors.primaryColor} />
      </View>
    </Touchable>
  )

  return (
    <FlatList<Category>
      style={styles.listContainer}
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={Link}
    ></FlatList>
  )
}

interface Styles {
  listContainer: ViewStyle
  linkContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  listContainer: {
    paddingTop: 15,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
})

export default LinkList

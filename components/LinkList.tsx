import React from 'react'
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
import { Category } from '@models/categories'
import { colors } from '@styles/theme'

interface Props {
  data: Category[]
}

const LinkList: React.FC<Props> = ({ data }) => {
  const Link = ({ item }: { item: Category }) => (
    // TODO: Add the correct navigation to the singlle article
    <Touchable onPress={() => {}}>
      <View style={styles.linkContainer}>
        <Text>{item.name}</Text>
        <Ionicons name="ios-arrow-round-forward" size={20} color={colors.primaryColor} />
      </View>
    </Touchable>
  )

  return <FlatList<Category> data={data} renderItem={Link} style={styles.container}></FlatList>
}

interface Styles {
  container: ViewStyle
  linkContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginHorizontal: 0,
    marginVertical: 15,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
})

export default LinkList

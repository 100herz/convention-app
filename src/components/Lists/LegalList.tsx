import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// import { useNavigation } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'

import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
// import { RootStackParamList } from '@navigations/HomeNavigator'
import { Legal } from '@models/Legal'
import { colors, defaultStyles, DefaultStyles } from '@styles/theme'

interface Props {
  data: Legal[]
}

const LegalList: React.FC<Props> = ({ data }) => {
  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.listContainer}>
      {data.map(item => (
        <Touchable
          key={item.id}
          // onPress={() => navigation.navigate('ArticlesOverviewScreen', { LegalId: item.id, LegalName: item.name })}
          onPress={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
          testID="link"
        >
          <View style={styles.listItemContainer}>
            <Text>{item.name}</Text>
            <Ionicons name="ios-arrow-round-forward" size={20} color={colors.primaryColor} />
          </View>
        </Touchable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create<DefaultStyles>({
  ...defaultStyles,
})

export default LegalList

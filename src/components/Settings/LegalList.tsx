import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Text from '@components/UI/Text'
import Touchable from '@components/UI/Touchable'
import { SettingsStackParamList } from '@navigations/SettingsNavigator'
import { Legal } from '@models/Legal'
import { colors, defaultStyles, DefaultStyles } from '@styles/theme'

interface Props {
  data: Legal[]
}

const LegalList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<SettingsStackParamList>>()

  return (
    <View style={styles.listContainer}>
      {data.map(item => (
        <Touchable
          key={item.id}
          onPress={() => navigation.navigate('LegalScreen', { pageId: item.id, screenTitle: item.title.rendered })}
          testID={`link-${item.id}`}
        >
          <View style={styles.listItemContainer}>
            <Text>{item.title.rendered}</Text>
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

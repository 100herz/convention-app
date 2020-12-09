import React from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import HTML from 'react-native-render-html'

import Touchable from '@components/UI/Touchable'
import Text from '@components/UI/Text'
import { SettingsStackParamList } from '@navigations/SettingsNavigator'
import { Legal } from '@models/settings'
import { legalAddition } from '@data/settings'
import { colors, defaultStyles, DefaultStyles } from '@styles/theme'

interface Props {
  data: Legal[]
}

const LegalList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<StackNavigationProp<SettingsStackParamList>>()

  const linkIcon = () => <Ionicons name="ios-arrow-round-forward" size={20} color={colors.primaryColor} />

  return (
    <View style={styles.listContainer}>
      {data.map(item => (
        <Touchable
          key={item.id}
          onPress={() => navigation.navigate('LegalScreen', { pageId: item.id, screenTitle: item.title.rendered })}
          testID={`link-${item.id}`}
        >
          <View style={styles.listItemContainer}>
            <HTML baseFontStyle={styles.text} html={item.title.rendered} />
            {linkIcon()}
          </View>
        </Touchable>
      ))}

      <Touchable onPress={() => Linking.openURL(legalAddition.href)} testID="link-mail">
        <View style={styles.listItemContainer}>
          <Text>{legalAddition.name}</Text>
          {linkIcon()}
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create<DefaultStyles>({
  ...defaultStyles,
})

export default LegalList

import React from 'react'
import { Linking, StyleSheet, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Touchable from '@components/UI/Touchable'
import { Social } from '@models/social'
import { colors } from '@styles/theme'

interface Props {
  data: Social[]
}

const SocialList: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container} testID="social-list-container">
      {data.map(item => (
        <Touchable key={item.id} onPress={() => Linking.openURL(item.url)}>
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={35} color={colors.gray} />
          </View>
        </Touchable>
      ))}
    </View>
  )
}

interface Styles {
  container: ViewStyle
  iconContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 6,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
})

export default SocialList

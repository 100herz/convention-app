import React from 'react'
import { StyleSheet, Switch as DefaultSwitch, ViewStyle } from 'react-native'

import { colors, DefaultStyles, defaultStyles } from '@styles/theme'

interface Props {
  style?: ViewStyle
  testID?: string
  onValueChange: (value: boolean) => void
  value: boolean
}

const Switch: React.FC<Props> = ({ style, onValueChange, value, testID }) => {
  return (
    <DefaultSwitch
      style={{ ...styles.switch, ...style }}
      trackColor={{ false: colors.gray, true: colors.accentColor }}
      thumbColor={colors.grayLight}
      ios_backgroundColor={colors.gray}
      onValueChange={onValueChange}
      value={value}
      testID={testID}
    />
  )
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
})

export default Switch

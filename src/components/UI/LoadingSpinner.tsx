import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from 'react-native'

import { colors, defaultStyles, DefaultStyles } from '@styles/theme'

const LoadingSpinner: React.FC<ActivityIndicatorProps> = ({ color = colors.accentColor, size = 'large', ...rest }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...rest} color={color} size={size} />
    </View>
  )
}

const styles = StyleSheet.create<DefaultStyles>({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    justifyContent: 'center',
  },
})

export default LoadingSpinner

import React, { ComponentType } from 'react'
import {
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface Props {
  onPress: (event: GestureResponderEvent) => void
  testID?: string
}

const Touchable: React.FC<Props> = ({ children, onPress, testID }) => {
  const TouchableComponent: ComponentType<TouchableOpacityProps | TouchableNativeFeedbackProps> =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <TouchableComponent onPress={onPress} testID={testID}>
      {children}
    </TouchableComponent>
  )
}

export default Touchable

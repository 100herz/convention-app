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
}

const Touchable: React.FC<Props> = ({ children, onPress }) => {
  const TouchableComponent: ComponentType<TouchableOpacityProps | TouchableNativeFeedbackProps> =
    Platform.OS === 'android' && Platform.Version > 20 ? TouchableNativeFeedback : TouchableOpacity

  return <TouchableComponent onPress={onPress}>{children}</TouchableComponent>
}

export default Touchable

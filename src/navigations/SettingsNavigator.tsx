import React from 'react'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '@screens/SettingsScreen'
import { colors } from '@styles/theme'

export type RootStackParamList = {
  SettingsScreen: undefined
}

const CategoriesStack = createStackNavigator<RootStackParamList>()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerTintColor: colors.accentColor,
}

const CategoriesNavigator: React.FC = () => {
  return (
    <CategoriesStack.Navigator initialRouteName="SettingsScreen" screenOptions={defaultNavigatorOptions}>
      <CategoriesStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Einstellungen' }} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesNavigator

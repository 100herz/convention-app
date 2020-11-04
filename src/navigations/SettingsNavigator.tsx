import React from 'react'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '@screens/SettingsScreen'
import LegalScreen from '@screens/LegalScreen'
import { colors } from '@styles/theme'

export type SettingsStackParamList = {
  SettingsScreen: undefined
  LegalScreen: { pageId?: number; screenTitle?: string }
}

const SettingsStack = createStackNavigator<SettingsStackParamList>()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerTintColor: colors.accentColor,
}

const SettingsNavigator: React.FC = () => {
  return (
    <SettingsStack.Navigator initialRouteName="SettingsScreen" screenOptions={defaultNavigatorOptions}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Einstellungen' }} />
      <SettingsStack.Screen
        name="LegalScreen"
        component={LegalScreen}
        options={({ route }) => ({ title: route.params.screenTitle, headerBackTitle: '' })}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsNavigator

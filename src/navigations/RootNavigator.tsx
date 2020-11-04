import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeNavigator from '@navigations/HomeNavigator'
import CategoriesNavigator from '@navigations/CategoriesNavigator'
import SettingsNavigator from '@navigations/SettingsNavigator'
import { colors } from '@styles/theme'
import { Platform } from 'react-native'

export type RootTabParamList = {
  HomeNavigator: undefined
  CategoriesNavigator: undefined
  SettingsNavigator: undefined
}

const RootTab = createBottomTabNavigator<RootTabParamList>()

const defaultTabBarOptions: BottomTabBarOptions = {
  activeTintColor: colors.grayLight,
  inactiveTintColor: colors.gray,
  style: {
    backgroundColor: colors.primaryColor,
  },
  showLabel: false,
}

const RootNavigator: React.FC = () => {
  const os = Platform.OS === 'ios' ? 'ios' : 'md'

  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName="HomeNavigator" tabBarOptions={defaultTabBarOptions}>
        <RootTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            tabBarLabel: undefined,
            tabBarIcon: ({ size, color }) => <Ionicons name={`${os}-home`} size={size} color={color} />,
          }}
        />
        <RootTab.Screen
          name="CategoriesNavigator"
          component={CategoriesNavigator}
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name={`${os}-images`} size={size} color={color} />,
          }}
        />
        <RootTab.Screen
          name="SettingsNavigator"
          component={SettingsNavigator}
          options={{
            tabBarIcon: ({ size, color }) => <Ionicons name={`${os}-more`} size={size} color={color} />,
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

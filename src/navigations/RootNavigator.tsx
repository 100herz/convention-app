import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeNavigator from '@navigations/HomeNavigator'
import CategoriesNavigator from '@navigations/CategoriesNavigator'
import SettingsNavigator from '@navigations/SettingsNavigator'
import { colors } from '@styles/theme'

export type RootTabParamList = {
  HomeNavigator: undefined
  CategoriesNavigator: undefined
  SettingsNavigator: undefined
}

const RootTab = createBottomTabNavigator<RootTabParamList>()

const defaultTabBarOptions: BottomTabBarOptions = {
  activeTintColor: Platform.OS === 'ios' ? colors.grayLight : colors.gray,
  inactiveTintColor: Platform.OS === 'ios' ? colors.gray : colors.grayLight,
  style: {
    backgroundColor: Platform.OS === 'ios' ? colors.primaryColor : colors.accentColor,
  },
  showLabel: false,
}

const RootNavigator: React.FC = () => {
  const icon = (name: string, size?: number, color?: string) => {
    return <Ionicons name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`} size={size} color={color} />
  }

  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName="HomeNavigator" tabBarOptions={defaultTabBarOptions}>
        <RootTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            tabBarLabel: undefined,
            tabBarIcon: ({ size, color }) => icon('home', size, color),
          }}
        />
        <RootTab.Screen
          name="CategoriesNavigator"
          component={CategoriesNavigator}
          options={{
            tabBarIcon: ({ size, color }) => icon('images', size, color),
          }}
        />
        <RootTab.Screen
          name="SettingsNavigator"
          component={SettingsNavigator}
          options={{
            tabBarIcon: ({ size, color }) => icon('more', size, color),
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

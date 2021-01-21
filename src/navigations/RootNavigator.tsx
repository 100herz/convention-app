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
  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName="HomeNavigator" tabBarOptions={defaultTabBarOptions}>
        <RootTab.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            tabBarLabel: undefined,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name={Platform.OS === 'ios' ? 'home' : 'home-sharp'} size={size} color={color} />
            ),
          }}
        />
        <RootTab.Screen
          name="CategoriesNavigator"
          component={CategoriesNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name={Platform.OS === 'ios' ? 'images' : 'images-sharp'} size={size} color={color} />
            ),
          }}
        />
        <RootTab.Screen
          name="SettingsNavigator"
          component={SettingsNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ellipsis-horizontal' : 'ellipsis-vertical'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator

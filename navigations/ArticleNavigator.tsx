import React from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import { colors } from '@styles/theme'

export type RootStackParamList = {
  Home: undefined
  Categories: undefined
}

const RootStackNavigator = createStackNavigator<RootStackParamList>()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.accentColor,
  },
  headerTintColor: colors.grayLight,
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator initialRouteName="Home" screenOptions={defaultNavigatorOptions}>
        <RootStackNavigator.Screen name="Home" component={HomeScreen} />
        <RootStackNavigator.Screen name="Categories" component={CategoriesScreen} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

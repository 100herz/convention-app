import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'
import { theme } from '@styles/theme'

const ArticleNavigator = createStackNavigator()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: theme.colors.accentColor,
  },
  headerTintColor: theme.colors.grayLight,
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <ArticleNavigator.Navigator screenOptions={defaultNavigatorOptions}>
        <ArticleNavigator.Screen name="Home" component={HomeScreen} />
      </ArticleNavigator.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

import React from 'react'
import { View } from 'react-native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'
import ArticlesOverviewScreen from '@screens/ArticlesOverviewScreen'
import ArticleScreen from '@screens/ArticleScreen'
import Logo from '@components/UI/Logo'
import { colors } from '@styles/theme'

export type HomeStackParamList = {
  HomeScreen: undefined
  ArticlesOverviewScreen: { categoryId?: number; categoryName?: string }
  ArticleScreen: { postId: number }
}

const HomeStack = createStackNavigator<HomeStackParamList>()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerTintColor: colors.accentColor,
}

const MainNavigation: React.FC = () => {
  const HeaderLogo = () => (
    <View style={{ alignItems: 'center' }}>
      <Logo height={30} />
    </View>
  )

  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={defaultNavigatorOptions}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: HeaderLogo,
          title: 'News',
        }}
      />
      <HomeStack.Screen
        name="ArticlesOverviewScreen"
        component={ArticlesOverviewScreen}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <HomeStack.Screen name="ArticleScreen" component={ArticleScreen} options={{ headerTitle: HeaderLogo }} />
    </HomeStack.Navigator>
  )
}

export default MainNavigation

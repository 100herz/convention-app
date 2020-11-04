import React from 'react'
import { View } from 'react-native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'
import CategoriesOverviewScreen from '@screens/CategoriesOverviewScreen'
import ArticlesOverviewScreen from '@screens/ArticlesOverviewScreen'
import ArticleScreen from '@screens/ArticleScreen'
import Logo from '@components/UI/Logo'
import { colors } from '@styles/theme'

export type RootStackParamList = {
  HomeScreen: undefined
  CategoriesOverviewScreen: undefined
  ArticlesOverviewScreen: { categoryId?: number; categoryName?: string }
  ArticleScreen: { postId: number }
}

const HomeStack = createStackNavigator<RootStackParamList>()

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
        name="CategoriesOverviewScreen"
        component={CategoriesOverviewScreen}
        options={{ title: 'Kategorien' }}
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

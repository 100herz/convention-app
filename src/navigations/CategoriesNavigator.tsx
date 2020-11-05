import React from 'react'
import { View } from 'react-native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import Logo from '@components/UI/Logo'
import CategoriesOverviewScreen from '@screens/CategoriesOverviewScreen'
import ArticlesOverviewScreen from '@screens/ArticlesOverviewScreen'
import ArticleScreen from '@screens/ArticleScreen'
import { colors } from '@styles/theme'

export type CategoriesStackParamList = {
  CategoriesOverviewScreen: undefined
  ArticlesOverviewScreen: { categoryId?: number; categoryName?: string }
  ArticleScreen: { postId: number }
}

const CategoriesStack = createStackNavigator<CategoriesStackParamList>()

const defaultNavigatorOptions: StackNavigationOptions = {
  headerTintColor: colors.accentColor,
}

const CategoriesNavigator: React.FC = () => {
  const HeaderLogo = () => (
    <View style={{ alignItems: 'center' }}>
      <Logo height={30} />
    </View>
  )

  return (
    <CategoriesStack.Navigator initialRouteName="CategoriesOverviewScreen" screenOptions={defaultNavigatorOptions}>
      <CategoriesStack.Screen
        name="CategoriesOverviewScreen"
        component={CategoriesOverviewScreen}
        options={{ title: 'Kategorien' }}
      />
      <CategoriesStack.Screen
        name="ArticlesOverviewScreen"
        component={ArticlesOverviewScreen}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <CategoriesStack.Screen name="ArticleScreen" component={ArticleScreen} options={{ headerTitle: HeaderLogo }} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesNavigator

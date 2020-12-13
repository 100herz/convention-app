import React from 'react'
import { registerRootComponent } from 'expo'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { Vollkorn_700Bold } from '@expo-google-fonts/vollkorn'

import RootNavigator from '@navigations/RootNavigator'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    sans: OpenSans_400Regular,
    'sans-bold': OpenSans_700Bold,
    'serif-bold': Vollkorn_700Bold,
  })

  if (!fontsLoaded) return <AppLoading />

  return <RootNavigator />
}

export default registerRootComponent(App)

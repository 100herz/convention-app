import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading, registerRootComponent } from 'expo'

import RootNavigator from '@navigations/RootNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    sans: require('@assets/fonts/OpenSans-Regular.ttf'),
    'sans-bold': require('@assets/fonts/OpenSans-Bold.ttf'),
    'serif-bold': require('@assets/fonts/Vollkorn-Bold.ttf'),
  })
}

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return <RootNavigator />
}

export default registerRootComponent(App)

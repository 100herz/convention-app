import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import SettingsList from '@components/Lists/SettingsList'
import LegalList from '@components/Lists/LegalList'
import { defaultStyles, DefaultStyles } from '@styles/theme'
import { Legal } from '@models/legal'
import { Setting } from '@models/setting'

export const settingArray: Setting[] = [{ id: 1, name: 'Push Mitteilungen' }]

const legalScreens: Legal[] = [
  { id: 1, name: 'Impressum' },
  { id: 2, name: 'Datenschutz' },
]

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SettingsList data={settingArray} />
        <LegalList data={legalScreens} />
      </ScrollView>
    </View>
  )
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    paddingHorizontal: 25,
  },
})

export default SettingsScreen

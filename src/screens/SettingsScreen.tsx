import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import SettingsList from '@components/Lists/SettingsList'
import LegalList from '@components/Lists/LegalList'
import SocialList from '@components/Lists/SocialList'
import { socialMediaChannels } from '@data/social'
import { Setting } from '@models/setting'
import { Legal } from '@models/legal'
import { defaultStyles, DefaultStyles } from '@styles/theme'

export const settingArray: Setting[] = [{ id: 1, name: 'Push Mitteilungen' }]

const legalScreens: Legal[] = [
  { id: 79, name: 'Impressum' },
  { id: 1105, name: 'Datenschutz' },
]

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SettingsList data={settingArray} />
        <LegalList data={legalScreens} />
        <SocialList data={socialMediaChannels} />
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

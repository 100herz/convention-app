import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// TODO: Reactivate this setting after adding the push notifications
// import SettingsList from '@components/Settings/SettingsList'
import LegalList from '@components/Settings/LegalList'
import SocialList from '@components/Settings/SocialList'
import { socialMediaChannels } from '@data/social'
import { Setting } from '@models/setting'
import { Legal } from '@models/legal'
import { defaultStyles, DefaultStyles } from '@styles/theme'

export const settingArray: Setting[] = [{ id: 1, name: 'Push Mitteilungen' }]

const legalScreens: Legal[] = [
  { id: 79, title: { rendered: 'Impressum' }, content: { rendered: '' } },
  { id: 1105, title: { rendered: 'Datenschutz' }, content: { rendered: '' } },
]

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <SettingsList data={settingArray} /> */}
        <LegalList data={legalScreens} />
        <SocialList data={socialMediaChannels} />
      </ScrollView>
    </View>
  )
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
})

export default SettingsScreen

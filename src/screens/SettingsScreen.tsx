import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// TODO: Reactivate this setting after adding the push notifications
// import SettingsList from '@components/Settings/SettingsList'
import LegalList from '@components/Settings/LegalList'
import SocialList from '@components/Settings/SocialList'
import { socialMediaChannels } from '@data/social'
import { legalScreens /*, settingArray*/ } from '@data/settings'
import { defaultStyles, DefaultStyles } from '@styles/theme'

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*
        // TODO: Reactivate this setting after adding the push notifications
        <SettingsList data={settingArray} />
        */}
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

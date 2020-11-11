import React, { useEffect, useState } from 'react'
import { Dimensions, Linking, ScrollView, StyleSheet } from 'react-native'
import HTML from 'react-native-render-html'
import { RouteProp, useRoute } from '@react-navigation/native'

import LoadingSpinner from '@components/UI/LoadingSpinner'
import { SettingsStackParamList } from '@navigations/SettingsNavigator'
import { fetchPageAsync } from '@utils/api'
import { Legal } from '@models/Legal'
import { defaultStyles, DefaultStyles, htmlBodyTagStyles } from '@styles/theme'

const LegalScreen: React.FC = () => {
  const route = useRoute<RouteProp<SettingsStackParamList, 'LegalScreen'>>()

  const [isLoading, setLoading] = useState(true)
  const [legalPage, setLegalPage] = useState<Legal>({ id: 0, title: { rendered: '' }, content: { rendered: '' } })

  useEffect(() => {
    const getArticlesAsync = async () => {
      try {
        const articleResponse = await fetchPageAsync(route.params.pageId)
        setLegalPage(await articleResponse.json())
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getArticlesAsync()
  }, [])

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ScrollView style={styles.container}>
          <HTML
            baseFontStyle={styles.text}
            tagsStyles={htmlBodyTagStyles}
            html={`${legalPage.content.rendered}`}
            ignoredStyles={['height', 'width']}
            imagesMaxWidth={Dimensions.get('window').width - 30}
            onLinkPress={(_, href) => Linking.openURL(href)}
          />
        </ScrollView>
      )}
    </React.Fragment>
  )
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    padding: 15,
  },
})

export default LegalScreen

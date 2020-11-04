import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Text from '@components/UI/Text'
import Switch from '@components/UI/Switch'
import { Setting } from '@models/setting'
import { DefaultStyles, defaultStyles } from '@styles/theme'

interface Props {
  data: Setting[]
}

const LinkList: React.FC<Props> = ({ data }) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.listContainer}>
      {data.map(item => (
        <View style={styles.listItemContainer} key={item.id}>
          <Text>{item.name}</Text>
          <Switch style={styles.switch} onValueChange={toggleSwitch} value={isEnabled} testID={`switch-${item.id}`} />
        </View>
      ))}
    </View>
  )
}

type Styles = DefaultStyles

const styles = StyleSheet.create<Styles>({
  ...defaultStyles,
  listItemContainer: {
    ...defaultStyles.listItemContainer,
    marginRight: -8,
    paddingVertical: 5,
  },
})

export default LinkList

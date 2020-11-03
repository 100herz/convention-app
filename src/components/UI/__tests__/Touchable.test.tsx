/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Platform, Text } from 'react-native'
import { render } from '@testing-library/react-native'

import Touchable from '../Touchable'

describe('<Touchable />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Touchable onPress={() => {}} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('uses android', () => {
    const os = 'android'
    Platform.OS = os
    const { getByTestId } = render(
      <Touchable onPress={() => {}} testID={os}>
        <Text>ANDROID</Text>
      </Touchable>
    )
    expect(getByTestId(os)).toHaveProp('nativeBackgroundAndroid')
  })

  it('uses ios', () => {
    const os = 'ios'
    Platform.OS = os
    const { getByTestId } = render(
      <Touchable onPress={() => {}} testID={os}>
        <Text>IOS</Text>
      </Touchable>
    )
    expect(getByTestId(os)).toHaveProp('style')
  })
})

import React from 'react'
import { act, fireEvent, render } from '@testing-library/react-native'

import SettingsList from '../SettingsList'
import { settingArray } from '@__mocks__/settings'

describe('<SettingsList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SettingsList data={settingArray} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('sets the value correctly', () => {
    const { getByTestId } = render(<SettingsList data={settingArray} />)

    act(() => {
      fireEvent(getByTestId('switch-1'), 'valueChange')
    })

    // TODO: Add the expect
    // expect(toggleSwitch).toHaveBeenCalledTimes(1)
  })
})

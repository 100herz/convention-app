/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render } from '@testing-library/react-native'

import Switch from '../Switch'

describe('<Switch />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Switch onValueChange={() => {}} value={true} />)
    expect(toJSON()).toMatchSnapshot()
  })
})

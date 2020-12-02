import React from 'react'
import { render } from '@testing-library/react-native'

import LogoRound from '../LogoRound'

describe('<LogoRound />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<LogoRound />)
    expect(toJSON()).toMatchSnapshot()
  })
})

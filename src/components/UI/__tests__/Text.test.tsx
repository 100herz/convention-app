import React from 'react'
import { render } from '@testing-library/react-native'

import Text from '../Text'

describe('<Text />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Text />)
    expect(toJSON()).toMatchSnapshot()
  })
})

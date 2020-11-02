/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render } from '@testing-library/react-native'

import Button from '../Button'

const titleMock = 'Button title'

describe('<Button />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button title={titleMock} onPress={() => {}} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('has no image and renders a View with three texts instead', () => {
    const { getByTestId } = render(<Button title={titleMock} onPress={() => {}} />)
    expect(getByTestId('text-output')).toHaveTextContent(titleMock)
  })
})

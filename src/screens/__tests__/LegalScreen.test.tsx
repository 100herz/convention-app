import React from 'react'
import { render } from '@testing-library/react-native'

import LegalScreen from '../LegalScreen'

export const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useRoute: () => ({
      params: { postId: 1 },
    }),
  }
})

describe('<LegalScreen />', () => {
  it('renders correctly', () => {
    // const { toJSON } = render(<LegalScreen />)
    // expect(toJSON()).toMatchSnapshot()
  })
})

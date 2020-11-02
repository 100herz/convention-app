import React from 'react'
import { render } from '@testing-library/react-native'

import HomeScreen from '../HomeScreen'

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

describe('<Button />', () => {
  // TODO: Add the tests
  it('renders correctly', () => {
    //   const { toJSON } = render(<HomeScreen />)
    //   expect(toJSON()).toMatchSnapshot()
  })
})

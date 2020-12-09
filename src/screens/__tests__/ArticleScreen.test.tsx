import React from 'react'
import { render } from '@testing-library/react-native'

import ArticleScreen from '../ArticleScreen'

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

describe('<ArticleScreen />', () => {
  // TODO: Add the tests
  it('renders correctly', () => {
    //   const { toJSON } = render(<ArticleScreen />)
    //   expect(toJSON()).toMatchSnapshot()
  })
})

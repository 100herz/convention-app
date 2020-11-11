import React from 'react'
import { render } from '@testing-library/react-native'

import NewsCarousel from '../NewsCarousel'
import { article, articleWithoutEmbedded } from '@__mocks__/article'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

export const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useNavigationParam: jest.fn(jest.requireActual('@react-navigation/native').useNavigationParam),
  }
})

describe('<NewsCarousel />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<NewsCarousel articles={[article, articleWithoutEmbedded]} />)
    expect(toJSON()).toMatchSnapshot()
  })
})

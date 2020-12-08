import React from 'react'
import { render } from '@testing-library/react-native'

import CategoriesOverviewScreen from '../CategoriesOverviewScreen'

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

describe('<CategoriesOverviewScreen />', () => {
  it('renders correctly', () => {
    // const { toJSON } = render(<CategoriesOverviewScreen />)
    // expect(toJSON()).toMatchSnapshot()
  })
})

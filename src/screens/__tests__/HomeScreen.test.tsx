import React from 'react'
import { act, fireEvent, render } from '@testing-library/react-native'

import HomeScreen from '../HomeScreen'

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

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<HomeScreen />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<HomeScreen />)

    act(() => {
      fireEvent.press(getByTestId('button-1'))
    })

    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<HomeScreen />)

    act(() => {
      fireEvent.press(getByTestId('button-2'))
    })

    expect(mockedNavigate).toHaveBeenCalledTimes(2)
  })
})

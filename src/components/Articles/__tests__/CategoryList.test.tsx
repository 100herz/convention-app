import React from 'react'
import { act, fireEvent, render } from '@testing-library/react-native'

import CategoryList from '../CategoryList'
import { category } from '@__mocks__/category'

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

describe('<CategoryList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<CategoryList data={[category]} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<CategoryList data={[category]} />)

    act(() => {
      fireEvent.press(getByTestId('link'))
    })

    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
})

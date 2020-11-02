import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import LinkList from '../LinkList'
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

describe('<LinkList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<LinkList data={[category]} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<LinkList data={[category]} />)
    fireEvent.press(getByTestId('link'))
    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
})

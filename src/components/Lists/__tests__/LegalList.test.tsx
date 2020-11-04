import React from 'react'
import { act, fireEvent, render } from '@testing-library/react-native'

import LegalList from '../LegalList'
import { legalArray } from '@__mocks__/legal'

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

describe('<LegalList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<LegalList data={legalArray} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<LegalList data={legalArray} />)

    act(() => {
      fireEvent.press(getByTestId('link-1'))
    })

    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
})

import React from 'react'
import { render } from '@testing-library/react-native'

import ArticleList from '../ArticleList'
import { article } from '@__mocks__/article'

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

describe('<ArticleList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ArticleList data={[article]} />)
    expect(toJSON()).toMatchSnapshot()
  })
})

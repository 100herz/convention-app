import React from 'react'
import { act, fireEvent, render } from '@testing-library/react-native'

import ArticlePreview from '../ArticlePreview'
import { article, articleWithoutFeatured, articleWithoutSponsored } from '@__mocks__/article'

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
    const { toJSON } = render(<ArticlePreview article={article} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('has no image and renders a View with three texts instead', () => {
    const { getByTestId } = render(<ArticlePreview article={articleWithoutFeatured} />)
    expect(getByTestId('no-image').children).toHaveLength(3)
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<ArticlePreview article={articleWithoutSponsored} />)

    act(() => {
      fireEvent.press(getByTestId('button'))
    })

    expect(mockedNavigate).toHaveBeenCalledTimes(1)
  })
})

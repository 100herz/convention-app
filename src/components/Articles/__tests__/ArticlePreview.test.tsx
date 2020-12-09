import React from 'react'
import { render } from '@testing-library/react-native'

import ArticlePreview from '../ArticlePreview'
import { article, articlePinned, articleWithoutFeatured, articleWithoutSponsored } from '@__mocks__/article'

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

  it('renders a sponsored preview as a pinned article', () => {
    const { getByTestId } = render(<ArticlePreview article={articlePinned} />)
    expect(getByTestId('sponsored-article').children).toHaveLength(2)
  })

  it('has no image and renders a View with three texts instead', () => {
    const { getByTestId } = render(<ArticlePreview article={articleWithoutFeatured} />)
    expect(getByTestId('no-image').children).toHaveLength(1)
  })

  it('should call the navigate function once', () => {
    const { getByTestId } = render(<ArticlePreview article={articleWithoutSponsored} />)
    expect(getByTestId('default-article').children).toHaveLength(2)
  })
})

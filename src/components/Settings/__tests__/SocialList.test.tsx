import React from 'react'
import { render } from '@testing-library/react-native'

import SocialList from '../SocialList'
import { socialMediaChannels } from '@data/social'

describe('<SocialList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SocialList data={socialMediaChannels} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders 4 components', () => {
    const { getByTestId } = render(<SocialList data={socialMediaChannels} />)
    expect(getByTestId('social-list-container').children).toHaveLength(4)
  })
})

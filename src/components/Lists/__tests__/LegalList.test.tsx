import React from 'react'
import { render } from '@testing-library/react-native'

import LegalList from '../LegalList'
import { legalArray } from '@__mocks__/legal'

describe('<LegalList />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<LegalList data={legalArray} />)
    expect(toJSON()).toMatchSnapshot()
  })
})

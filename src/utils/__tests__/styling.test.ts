import { hexToRgb } from '../styling'

describe('Styling utils Testings', () => {
  it('return the rgb colors as comma separated string', () => {
    expect(hexToRgb('#00ff00')).toBe('0, 255, 0')
  })

  it('return the rgb colors as comma separated string', () => {
    expect(hexToRgb('#ggDDTT')).toBeNull()
  })
})

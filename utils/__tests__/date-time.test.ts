import { getLocaleLongDate, getLocaleShortDate, getLocaleShortTime } from '@utils/date-time'

export const dummyDate = new Date('2020-07-02T20:23:00.000Z')

describe('Date utils testings', () => {
  it('convert the current time to a locale date in a german long format', () => {
    const date = getLocaleLongDate()
    expect(date).toBe(getLocaleLongDate(new Date()))
  })

  it('convert a ISO date string to a locale date in a german long format', () => {
    const date = getLocaleLongDate(dummyDate)
    expect(date).toBe('2. Juli 2020')
  })

  it('convert a ISO date string to a locale date in a english (US) long format', () => {
    const date = getLocaleLongDate(dummyDate, 'en-US')
    expect(date).toBe('July 2, 2020')
  })

  it('convert the current time to a locale date in a german short format', () => {
    const date = getLocaleShortDate()
    expect(date).toBe(getLocaleShortDate(new Date()))
  })

  it('convert a ISO date string to a locale date in a german short format', () => {
    const date = getLocaleShortDate(dummyDate)
    expect(date).toBe('02.07.2020')
  })

  it('convert a ISO date string to a locale date in a english (US) short format', () => {
    const date = getLocaleShortDate(dummyDate, 'en-US')
    expect(date).toBe('07/02/2020')
  })

  it('convert the current time to a locale  time in a german short format', () => {
    const date = getLocaleShortTime()
    expect(date).toBe(getLocaleShortTime(new Date()))
  })

  it('convert a ISO date string to a locale  time in a german short format', () => {
    const date = getLocaleShortTime(dummyDate)
    expect(date).toBe('22:23')
  })

  it('convert a ISO date string to a locale  time in a english (US) short format', () => {
    const date = getLocaleShortTime(dummyDate, 'en-US')
    expect(date).toBe('10:23 PM')
  })
})

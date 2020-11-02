import moment from 'moment' // see: https://momentjs.com/docs/
import 'moment/locale/de'

export enum Locale {
  'DE' = 'de',
  'EN' = 'en-US',
}

/**
 * Returns a date in the locale long format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export const getLocaleLongDate = (date = new Date(), locale = Locale.DE): string => {
  moment.locale(locale)
  return moment(date).format('LL')
}

/**
 * Returns a date in the locale short format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export const getLocaleShortDate = (date = new Date(), locale = Locale.DE): string => {
  moment.locale(locale)
  return moment(date).format('L')
}

/**
 * Returns a time in the locale short format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export const getLocaleShortTime = (date = new Date(), locale = Locale.DE): string => {
  moment.locale(locale)
  return moment(date).format('LT')
}

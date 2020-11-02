import moment from 'moment' // see: https://momentjs.com/docs/
import 'moment/locale/de'

/**
 * Returns a date in the locale long format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export function getLocaleLongDate(date = new Date(), locale = 'de'): string {
  moment.locale(locale)
  return moment(date).format('LL')
}

/**
 * Returns a date in the locale short format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export function getLocaleShortDate(date = new Date(), locale = 'de'): string {
  moment.locale(locale)
  return moment(date).format('L')
}

/**
 * Returns a time in the locale short format
 *
 * @param date The date to convert
 * @param locale The locale
 */
export function getLocaleShortTime(date = new Date(), locale = 'de'): string {
  moment.locale(locale)
  return moment(date).format('LT')
}

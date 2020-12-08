import { Legal, LegalAddition, Setting } from '@models/settings'

export const legalScreens: Legal[] = [
  {
    id: 79,
    title: { rendered: 'Impressum' },
    content: { rendered: '' },
  },
  {
    id: 1105,
    title: { rendered: 'Datenschutz' },
    content: { rendered: '' },
  },
]

export const legalAddition: LegalAddition = {
  id: 1,
  name: 'Anfrage stellen',
  href: 'mailto:anfrage@convention-net.de',
}

export const settingArray: Setting[] = [
  {
    id: 1,
    name: 'Push Mitteilungen',
  },
]

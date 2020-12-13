import { Ionicons } from '@expo/vector-icons'

type IconTypes = ExtractIonicons<Ionicons>

export declare interface Social {
  id: number
  name: string
  icon: Extract<typeof Ionicons>
  url: string
}

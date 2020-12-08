export declare interface Setting {
  id: number
  name: string
}

export declare interface Legal {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
}

export declare interface LegalAddition {
  id: number
  name: string
  href: string
}

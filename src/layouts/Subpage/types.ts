import {ReactNode} from 'react'

export type SubpageProps = {
  title: string
  children: ReactNode
  actionButton?: boolean
  actionButtonTitle?: string
  actionButtonCallback?: () => void
}

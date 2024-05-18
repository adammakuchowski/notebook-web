import {ReactNode} from 'react'

export type SubpageProps = {
  title: string
  children: ReactNode
  actionButton?: boolean
  actionButtonDisabled?: boolean
  actionButtonTitle?: string
  actionButtonCallback?: () => void
}

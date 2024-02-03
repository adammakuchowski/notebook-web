import {IconArrowsRight, IconListCheck, IconCalendarMonth, IconNote} from '@tabler/icons-react'

import {AlertIconCount} from '../../../../../../../components/icons/alertIconCount/AlertIconCount'
import {MenuTaskOption} from './types'

export const menuTaskOptions: MenuTaskOption[] = [
  {
    icon: IconArrowsRight,
    label: 'Upcoming',
    rightSection: AlertIconCount,
    path: 'upcoming'
  },
  {
    icon: IconListCheck,
    label: 'Today',
    rightSection: AlertIconCount,
    path: 'today'
  },
  {
    icon: IconCalendarMonth,
    label: 'Calendar',
    rightSection: AlertIconCount,
    path: 'calendar'
  },
  {
    icon: IconNote,
    label: 'Note',
    rightSection: AlertIconCount,
    path: 'note'
  }
]

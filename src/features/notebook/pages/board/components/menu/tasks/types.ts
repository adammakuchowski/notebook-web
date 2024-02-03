import {TablerIconsProps} from '@tabler/icons-react'

import {AlertIconCountProps} from '../../../../../../../components/icons/alertIconCount/AlertIconCount'

export type MenuTaskOption = {
  icon: ({size, stroke}: TablerIconsProps) => JSX.Element | null;
  label: string;
  rightSection: ({alertCount}: AlertIconCountProps) => JSX.Element | null;
  path: string;
  defaultOpened?: boolean;
}

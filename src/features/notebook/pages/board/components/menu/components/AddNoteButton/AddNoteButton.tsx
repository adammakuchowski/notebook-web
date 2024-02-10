import {ActionIcon} from '@mantine/core'
import {IconAdjustments} from '@tabler/icons-react'

import {AddNoteContainer} from './addNoteButtonStyled'

export const AddNoteButton = (): JSX.Element => {
  return (
    <AddNoteContainer>
      <ActionIcon variant='filled' color='gray' size='xl' radius='xl' aria-label='Settings'>
        <IconAdjustments style={{width: '70%', height: '70%'}} stroke={1.5} />
      </ActionIcon>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </AddNoteContainer>
  )
}

import {SidePanel} from 'features'
import {BoardContainer} from './boardStyled'

export const Board = (): JSX.Element => {
  return (
    <BoardContainer>
      <SidePanel/>
    </BoardContainer>
  )
}

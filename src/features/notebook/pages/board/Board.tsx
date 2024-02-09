
import {BoardContainer} from './boardStyled'
import {Menu} from './components/menu/Menu'
import {Notes} from './components/notes/Notes'

export const Board = (): JSX.Element => {
  return (
    <BoardContainer>
      <Menu/>
      <Notes/>
    </BoardContainer>
  )
}

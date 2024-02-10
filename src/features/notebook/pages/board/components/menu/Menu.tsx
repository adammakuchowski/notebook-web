import {MenuContainer} from './menuStyled'
import {AddNoteButton} from './components/AddNoteButton/AddNoteButton'

export const Menu = (): JSX.Element => {
  return (
    <MenuContainer>
      <AddNoteButton/>
    </MenuContainer>
  )
}

import {BoardPageContainer} from './boardStyled'
import {Header} from './components/header/Header'

export const Board = (): JSX.Element => {
  return (
    <BoardPageContainer>
      <Header/>
    </BoardPageContainer>
  )
}

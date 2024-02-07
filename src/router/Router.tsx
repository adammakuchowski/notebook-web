import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {Board as BoardPage} from '../features/notebook/pages/board/Board'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/board' element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

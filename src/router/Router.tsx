import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {About as AboutPage} from '../features/static/pages/about/About'
import {Board as BoardPage} from '../features/notebook/pages/board/Board'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

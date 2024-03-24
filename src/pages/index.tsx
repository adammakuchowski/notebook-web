import {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

const BoardPage = lazy(async () => await import('./board/index'))
const LoginPage = lazy(async () => await import('./login/index'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
        <Route path='/' element={<BoardPage />} />
        <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

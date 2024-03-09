import {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

const HomePage = lazy(async () => await import('./home/index'))
const LoginPage = lazy(async () => await import('./login/index'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

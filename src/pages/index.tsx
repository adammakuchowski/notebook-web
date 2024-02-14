import {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

const HomePage = lazy(() => import('./home/index'))
const TestPage = lazy(() => import('./test/index'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/test' element={<TestPage/>} />
    </Routes>
  )
}

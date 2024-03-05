import {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

const HomePage = lazy(async () => await import('./home/index'))
const TestPage = lazy(async () => await import('./test/index'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/test' element={<TestPage/>} />
    </Routes>
  )
}

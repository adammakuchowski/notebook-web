import {CenterPositionLoader} from 'components'
import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const withRouter = (Component: () => JSX.Element) => () => (
  <BrowserRouter>
    <Suspense fallback={<CenterPositionLoader />}>
      <Component />
    </Suspense>
  </BrowserRouter>
)

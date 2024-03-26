import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Loader} from '@mantine/core'

export const withRouter = (Component: () => JSX.Element) => () => (
  <BrowserRouter>
    <Suspense fallback={<Loader color='blue' />}>
      <Component />
    </Suspense>
  </BrowserRouter>
)

import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Loader} from '@mantine/core'
import {withCenterPosition} from 'hocs/withCenterPosition'

const CenterPositionLoader = withCenterPosition(Loader)

export const withRouter = (Component: () => JSX.Element) => () => (
  <BrowserRouter>
    <Suspense fallback={<CenterPositionLoader />}>
      <Component />
    </Suspense>
  </BrowserRouter>
)

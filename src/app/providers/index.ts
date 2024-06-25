import compose from 'compose-function'

import {withMantineCore} from './with-mantine-core'
import {withMantineDates} from './with-mantine-dates'
import {withRouter} from './with-router'
import {withQueryClient} from './with-query-client'

export const withProviders = compose(withMantineCore, withMantineDates, withRouter, withQueryClient)

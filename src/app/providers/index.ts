import compose from 'compose-function'

import {withRouter} from './with-router'
import {withMantine} from './with-mantine'
import {withQueryClient} from './with-query-client'

export const withProviders = compose(withRouter, withMantine, withQueryClient)

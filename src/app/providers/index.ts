import compose from 'compose-function'

import {withMantine} from './with-mantine'
import {withRouter} from './with-router'
import {withQueryClient} from './with-query-client'

export const withProviders = compose(withMantine, withRouter, withQueryClient)

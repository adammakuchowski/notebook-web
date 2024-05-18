import type {AxiosPromise} from 'axios'

import {apiInstance} from '../base'

import {GET_KANBAN_TASKS} from './constants'
import {GetKanbanTasksParams} from './types'
import {KanbanTasks} from 'types'

export const getKanbanTasks = async ({
  token,
}: GetKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await apiInstance.get(GET_KANBAN_TASKS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

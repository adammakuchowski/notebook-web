import type {AxiosPromise} from 'axios'

import {apiInstance} from '../base'

import {GET_KANBAN_TASKS, UPDATE_KANBAN_TASKS} from './constants'
import {GetKanbanTasksParams, UpdateKanbanTasksParams} from './types'
import {KanbanTasks} from 'types'

export const getKanbanTasks = async ({
  token,
}: GetKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await apiInstance.get(GET_KANBAN_TASKS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const updateKanbanTasks = async ({
  token,
  kanbanTasks,
}: UpdateKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await apiInstance.put(UPDATE_KANBAN_TASKS, kanbanTasks, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

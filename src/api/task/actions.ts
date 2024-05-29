import type {AxiosPromise} from 'axios'
import {axiosInstance} from '../base'
import {GET_KANBAN_TASKS, UPDATE_KANBAN_TASKS} from './constants'
import {UpdateKanbanTasksParams} from './types'
import {KanbanTasks} from 'types'

export const getKanbanTasks = async (): AxiosPromise<KanbanTasks> =>
  await axiosInstance.get(GET_KANBAN_TASKS)

export const updateKanbanTasks = async ({
  kanbanTasks,
}: UpdateKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(UPDATE_KANBAN_TASKS, kanbanTasks)

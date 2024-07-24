import type {AxiosPromise} from 'axios'
import {axiosInstance} from '../base'
import {CREATE_TASK, GET_KANBAN_TASKS, UPDATE_KANBAN_TASKS} from './constants'
import {CreateTaskParams, UpdateKanbanTasksParams} from './types'
import {KanbanTasks, Task} from 'types'

export const getKanbanTasks = async (): AxiosPromise<KanbanTasks> =>
  await axiosInstance.get(GET_KANBAN_TASKS)

export const updateKanbanTasks = async ({
  kanbanTasks,
}: UpdateKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(UPDATE_KANBAN_TASKS, kanbanTasks)

export const createTask = async ({
  task,
  columnId
}: CreateTaskParams): AxiosPromise<Task> =>
  await axiosInstance.post(CREATE_TASK, {task, columnId})

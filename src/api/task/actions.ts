import type {AxiosPromise} from 'axios'
import {axiosInstance} from '../base'
import {
  CREATE_COLUMN,
  CREATE_TASK,
  DELETE_COLUMN,
  EDIT_COLUMN,
  GET_KANBAN_TASKS,
  GET_TASK,
  UPDATE_KANBAN_TASKS,
} from './constants'
import {
  CreateColumnParams,
  CreateTaskParams,
  UpdateKanbanTasksParams,
  DeleteColumnParams,
  EditColumnParams,
  GetTaskDetailsParams,
} from './types'
import {KanbanTasks, Task} from 'types'

export const getKanbanTasks = async (): AxiosPromise<KanbanTasks> =>
  await axiosInstance.get(GET_KANBAN_TASKS)

export const updateKanbanTasks = async ({
  kanbanTasks,
}: UpdateKanbanTasksParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(UPDATE_KANBAN_TASKS, kanbanTasks)

export const createTask = async ({
  task,
  columnId,
}: CreateTaskParams): AxiosPromise<Task> =>
  await axiosInstance.post(CREATE_TASK, {task, columnId})

export const getTaskDetails = async ({
  taskId,
}: GetTaskDetailsParams): AxiosPromise<Task> =>
  await axiosInstance.get(`${GET_TASK}/${taskId}`)

export const deleteColumn = async ({
  columnId,
}: DeleteColumnParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(DELETE_COLUMN, {columnId})

export const createColumn = async ({
  title,
}: CreateColumnParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(CREATE_COLUMN, {title})

export const editColumn = async ({
  columnId,
  title,
}: EditColumnParams): AxiosPromise<KanbanTasks> =>
  await axiosInstance.put(EDIT_COLUMN, {columnId, title})

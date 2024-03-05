import type {AxiosPromise} from 'axios'
import {apiInstance} from './base'
import type {Note} from './models'

const BASE_URL = '/note'

export type GetAllNotesParams = {
  userId?: number;
  completed?: boolean;
}

export const getAllNotes = async (params?: GetAllNotesParams): AxiosPromise<Note[]> => {
  return await apiInstance.get(BASE_URL, {params})
}

export type GetNoteParams = {
  id: number;
}

export const getNote = async ({id, ...params}: GetNoteParams): AxiosPromise<Note> => {
  return await apiInstance.get(`${BASE_URL}/${id}`, {params})
}

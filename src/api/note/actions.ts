import type {AxiosPromise} from 'axios'

import {axiosInstance} from '../base'
import {Note, GetAllNotesParams, GetNoteParams} from './types'
import {GET_ALL_NOTES_URL, GET_NOTE_URL} from './constants'

export const getAllNotes = async (
  params: GetAllNotesParams,
): AxiosPromise<Note[]> => await axiosInstance.get(GET_ALL_NOTES_URL, {params})

export const getNote = async ({
  id,
  ...params
}: GetNoteParams): AxiosPromise<Note> =>
  await axiosInstance.get(`${GET_NOTE_URL}/${id}`, {params})

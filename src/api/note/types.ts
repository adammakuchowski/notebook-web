export type Note = {
  id: string;
  title: string;
  text: string;
  userId: string;
  deletedAt?: Date;
}

export type GetAllNotesParams = {
  userId: number;
  completed?: boolean;
}

export type GetNoteParams = {
  id: number;
}

export enum Priority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  highest = 'highest',
}

export interface Task {
  _id?: string
  title: string
  description: string
  priority?: Priority | string | null
  eventDate?: Date | null;
  [key: string]: unknown
}

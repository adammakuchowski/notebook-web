export enum Priority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  highest = 'highest',
}

export interface Task {
  title: string
  description: string
  priority: Priority | null
  eventDate: Date | null
}

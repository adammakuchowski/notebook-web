import {InitKanbanData} from 'components/Kanban'

export const initData: InitKanbanData = {
  tasks: {
    task1: {id: 'task1', content: 'Take out'},
    task2: {id: 'task2', content: 'Make breakfest'},
    task3: {id: 'task3', content: 'Ride bike'},
    task4: {id: 'task4', content: 'Clean house'}
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'To do',
      taskIds: ['task1', 'task2', 'task3', 'task4']
    }
  },
  columnOrder: ['column1']
}

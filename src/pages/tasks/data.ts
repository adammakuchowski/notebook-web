import {InitKanbanData} from 'components/Kanban'

export const initData: InitKanbanData = {
  tasks: {
    task1: {id: 'task1', content: 'Take out'},
    task2: {id: 'task2', content: 'Make breakfest'},
    task3: {id: 'task3', content: 'Ride bike'},
    task4: {id: 'task4', content: 'Clean house'},
    task5: {id: 'task5', content: 'Buy laptop'},
    task6: {id: 'task6', content: 'Learn English'},
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'To do',
      taskIds: ['task1', 'task2', 'task3'],
    },
    column2: {
      id: 'column2',
      title: 'Blocked',
      taskIds: ['task4'],
    },
    column3: {
      id: 'column3',
      title: 'In progess',
      taskIds: ['task5'],
    },
    column4: {
      id: 'column4',
      title: 'Done',
      taskIds: ['task6'],
    },
  },
  columnOrder: ['column1', 'column2', 'column3', 'column4'],
}

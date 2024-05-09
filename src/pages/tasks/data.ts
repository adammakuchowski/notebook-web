import {InitKanbanData} from 'components/kanban'

export const initData: InitKanbanData = {
  tasks: {
    task1: {id: 'task1', title: 'Take out'},
    task2: {id: 'task2', title: 'Make breakfest'},
    task3: {id: 'task3', title: 'Ride bike'},
    task4: {id: 'task4', title: 'Clean house'},
    task5: {id: 'task5', title: 'Buy laptop'},
    task6: {id: 'task6', title: 'Learn English'},
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

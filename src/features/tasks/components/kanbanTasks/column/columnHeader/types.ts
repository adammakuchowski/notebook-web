import {DraggableProvided} from 'react-beautiful-dnd'
import {ColumnType} from 'types/kanban'

export interface ColumnHeaderProps {
  provided: DraggableProvided
  column: ColumnType
}

import {lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

const BoardPage = lazy(async () => await import('./board/index'))
const LoginPage = lazy(async () => await import('./login/index'))
const NotesPage = lazy(async () => await import('./notes/index'))
const TasksPage = lazy(async () => await import('./tasks/index'))
const SettingsPage = lazy(async () => await import('./settings/index'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/board' element={<BoardPage />}>
        <Route path='/board/notes' element={<NotesPage />} />
        <Route path='/board/tasks' element={<TasksPage />} />
        <Route path='/board/settings' element={<SettingsPage />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Navigate to='/board/notes' replace />} />
    </Routes>
  )
}

import {lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {RouteGuardian} from 'middlewares'

const BoardPage = lazy(async () => await import('./board'))
const LoginPage = lazy(async () => await import('./login'))
const NotesPage = lazy(async () => await import('./notes'))
const TasksPage = lazy(async () => await import('./tasks'))
const SettingsPage = lazy(async () => await import('./settings'))

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<RouteGuardian />}>
        <Route path="/board" element={<BoardPage />}>
          <Route path="/board/tasks" element={<TasksPage />} />
          <Route path="/board/notes" element={<NotesPage />} />
          <Route path="/board/settings" element={<SettingsPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/board/tasks" replace />} />
    </Routes>
  )
}

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {About as AboutPage} from '../features/static/pages/about/About'

import {Board as BoardPage} from '../features/notebook/pages/board/Board'
import {Upcoming as UpcomingPage} from '../features/notebook/pages/board/subpages/upcoming/Upcoming'
import {Today as TodayPage} from '../features/notebook/pages/board/subpages/today/Today'
import {Calendar as CalendarPage} from '../features/notebook/pages/board/subpages/calendar/Calendar'
import {Note as NotePage} from '../features/notebook/pages/board/subpages/note/Note'

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/board' element={<BoardPage />}>
          <Route index element={<TodayPage />} />
          <Route path='upcoming' element={<UpcomingPage />} />
          <Route path='today' element={<TodayPage />} />
          <Route path='calendar' element={<CalendarPage />} />
          <Route path='note' element={<NotePage />} />
        </Route>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

import 'dayjs/locale/pl'
import 'dayjs/locale/en'
import '@mantine/dates/styles.css'
import {DatesProvider} from '@mantine/dates'
import {useTranslation} from 'react-i18next'

export const withMantineDates = (Component: () => JSX.Element) => () => {
  const {i18n} = useTranslation()

  return (
    <DatesProvider settings={{locale: i18n.resolvedLanguage as 'pl' | 'en'}}>
      <Component />
    </DatesProvider>
  )
}

import ReactOnRails from 'react-on-rails'
import MainCoreApp from './MainCoreApp'

import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'

// Initizalize all locales for react-intl.
addLocaleData([...en, ...ru])

ReactOnRails.register({
  MainCoreApp
})

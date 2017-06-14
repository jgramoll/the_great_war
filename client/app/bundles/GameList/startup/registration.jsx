import ReactOnRails from 'react-on-rails';
import GameListApp from './GameListApp';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
// import { translations } from 'path_to/i18n/translations';
// import { defaultLocale } from 'path_to/i18n/default';

// Initizalize all locales for react-intl.
addLocaleData([...en, ...ru]);

// set locale and messages for IntlProvider.
// const locale = method_to_get_current_locale() || defaultLocale;
// const messages = translations[locale];

ReactOnRails.register({
  GameListApp,
});

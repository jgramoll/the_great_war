import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/gameListStore';
import GameListContainer from '../containers/GameListContainer';

import { translations } from 'libs/i18n/translations';
import { defaultLocale } from 'libs/i18n/default';

import { IntlProvider } from 'react-intl';

const locale = defaultLocale;
// const locale = 'ru';
const messages = translations[locale];

const GameListApp = (props, _railsContext) => (
  <IntlProvider locale={locale} key={locale} messages={messages}>
    <Provider store={configureStore(props)}>
      <GameListContainer />
    </Provider>
  </IntlProvider>
);

export default GameListApp;

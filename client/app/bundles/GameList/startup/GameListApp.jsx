import React from 'react'
// import configureStore from '../store/gameListStore'
import routes from '../routes/routes'
import { translations } from 'libs/i18n/translations'
import { defaultLocale } from 'libs/i18n/default'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routerStore from '../store/routerStore';

const locale = defaultLocale
const messages = translations[locale]

const GameListApp = (props, _railsContext) => {
  const store = routerStore(props)

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(
    browserHistory,
    store,
  )
  
  return (
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    </IntlProvider>
  )
}

export default GameListApp

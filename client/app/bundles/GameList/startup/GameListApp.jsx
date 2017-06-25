import React from 'react'
import routes from '../routes/routes'
import routerStore from '../store/routerStore'
import { translations } from 'libs/i18n/translations'
import { defaultLocale } from 'libs/i18n/default'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const GameListApp = (props, _railsContext) => {
  const store = routerStore(props)
  const history = syncHistoryWithStore(
    browserHistory,
    store
  )
  const locale = defaultLocale
  const messages = translations[locale]

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

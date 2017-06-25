import reducers, { initialStates } from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { camelizeKeys } from 'humps'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default (props, _railsContext) => {
  const initialGames = props.games
  const { $$gamesState } = initialStates

  const initialState = {
    $$gamesStore: Object.assign($$gamesState, {
      $$games: camelizeKeys(initialGames)
    })
  }

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const middleware = routerMiddleware(browserHistory)

  // Sync dispatched route actions to the history
  const finalCreateStore = applyMiddleware(
    thunkMiddleware,
    middleware
  )(createStore)
  return finalCreateStore(reducer, initialState)
}

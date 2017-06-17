import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import { browserHistory } from 'react-router'

import reducers, { initialStates } from '../reducers';

export default (props, _railsContext) => {
  const initialGames = props.games;
  const { $$gamesState } = initialStates;

  const initialState = {
    $$gamesStore: Object.assign($$gamesState, {
      $$games: initialGames,
    })
  }

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  })

  const middleware = routerMiddleware(browserHistory)

  // Sync dispatched route actions to the history
  const finalCreateStore = applyMiddleware(
    thunkMiddleware,
    middleware
  )(createStore);
  return finalCreateStore(reducer, initialState)
}

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import GameListContainer from '../containers/gameListContainer'
import NewGameContainer from '../containers/newGameContainer'

export default (
  <Route path="/">
    <IndexRoute
      component={GameListContainer}
    />
    <Route
      path="/games"
      component={GameListContainer}
    />
    <Route
      path="/games/new"
      component={NewGameContainer}
    />
  </Route>
)

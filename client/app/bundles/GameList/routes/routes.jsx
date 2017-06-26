import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Containers from '../containers'

export default (
  <Route path="/">
    <IndexRoute
      component={Containers.gameListContainer}
    />
    <Route path="games">
      <IndexRoute
        component={Containers.gameListContainer}
      />
      <Route
        path="new"
        component={Containers.newGameContainer}
      />
      <Route
        path=":id"
        component={Containers.gameDetailsContainer}
      />
    </Route>
  </Route>
)

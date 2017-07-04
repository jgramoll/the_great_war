import React from 'react'
import routerStore from '../store/routerStore'
import { Provider } from 'react-redux'

const GameListApp = (props) => {
  return (
    <Provider store={routerStore}>
      {props.children}
    </Provider>
  )
}
export default GameListApp

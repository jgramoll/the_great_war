import reducers, { initialStates } from '../reducers'
import { RouterStore } from 'libs/StoreManager'

export default RouterStore({
  initialState (props) {
    const { games, selectedGame } = props
    const { $$gamesState } = initialStates

    return {
      $$gamesStore: Object.assign({}, $$gamesState, {
        $$games: games || [],
        gamesLoaded: games !== null,
        selectedGame
      })
    }
  },

  reducers
})

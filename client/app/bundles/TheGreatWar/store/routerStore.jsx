import reducers, { initialStates } from '../reducers'
import { RouterStore } from 'libs/StoreManager'

export default RouterStore({
  initialState (_props) {
    const { $$theGreatWarState } = initialStates

    return {
      $$gamesStore: Object.assign({}, $$theGreatWarState, {
      })
    }
  },

  reducers
})

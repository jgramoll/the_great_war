import * as actionTypes from '../constants/gameListContants'

export const $$initialState = {
  $$games: [],
  submitGameError: null,
  isSaving: false
}

export default function gameListReducer ($$state = $$initialState, action) {
  switch (action.type) {
    case actionTypes.SET_IS_SAVING: {
      return Object.assign({}, $$state, {
        isSaving: true
      })
    }

    case actionTypes.SUBMIT_GAME_SUCCESS: {
      return Object.assign({}, $$state, {
        isSaving: false,
        $$games: [action.game].concat($$state.$$games)
      })
    }

    case actionTypes.SUBMIT_GAME_FAILURE: {
      return Object.assign({}, $$state, {
        submitGameError: action.error,
        isSaving: false
      })
    }

    default:
      return $$state
  }
}

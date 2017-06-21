import * as actionTypes from '../constants/gameListContants'
import requestsManager from 'libs/requestsManager'
import { push } from 'react-router-redux'
import { defaultMessages } from 'libs/i18n/default'

export function setIsSaving() {
  return {
    type: actionTypes.SET_IS_SAVING,
  };
}

export function submitGameSuccess(game) {
  return {
    type: actionTypes.SUBMIT_GAME_SUCCESS,
    game,
  };
}

export function submitGameFailure(error) {
  return {
    type: actionTypes.SUBMIT_GAME_FAILURE,
    error,
  };
}

export function createGame(game, intl) {
  return (dispatch) => {
    dispatch(setIsSaving());
    return requestsManager.post('/games.json', { game })
      .then(game => {
        dispatch(submitGameSuccess(game))
        dispatch(push('/games'))
      })
      .catch(_error => {
        const message = intl.formatMessage(defaultMessages.somethingWentWrong)
        dispatch(submitGameFailure(message))
      })
  }
}

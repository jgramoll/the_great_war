import requestsManager from 'libs/requestsManager'
import { push } from 'react-router-redux'
import * as actionTypes from '../constants/gameListContants';

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

export function createGame(game) {
  return (dispatch) => {
    dispatch(setIsSaving());
    return requestsManager.post('/games.json', { game })
      .then(game => {
        dispatch(submitGameSuccess(game))
        dispatch(push('/games'))
      })
      .catch(error => dispatch(submitGameFailure(error)))
  }
}

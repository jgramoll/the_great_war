import * as actionTypes from '../constants/gameListContants'
import requestsManager from 'libs/requestsManager'
import { push } from 'react-router-redux'
import { defaultMessages } from 'libs/i18n/default'

export function setIsFetching () {
  return {
    type: actionTypes.SET_IS_FETCHING
  }
}

export function setIsSaving () {
  return {
    type: actionTypes.SET_IS_SAVING
  }
}

export function fetchGamesSuccess (games) {
  return {
    type: actionTypes.FETCH_GAMES_SUCCESS,
    games: games
  }
}

export function fetchGamesFailure (error) {
  return {
    type: actionTypes.FETCH_GAMES_FAILURE,
    error
  }
}

export function submitGameSuccess (game) {
  return {
    type: actionTypes.SUBMIT_GAME_SUCCESS,
    game
  }
}

export function submitGameFailure (error) {
  return {
    type: actionTypes.SUBMIT_GAME_FAILURE,
    error
  }
}

export function selectGame (game) {
  return {
    type: actionTypes.SELECT_GAME,
    game
  }
}

export function fetchGames (intl) {
  return (dispatch) => {
    dispatch(setIsFetching())
    return requestsManager.get('/games')
      .then(games => {
        dispatch(fetchGamesSuccess(games))
      })
      .catch(_error => {
        const message = intl.formatMessage(defaultMessages.somethingWentWrong)
        dispatch(fetchGamesFailure(message))
      })
  }
}

export function createGame (game, intl) {
  return (dispatch) => {
    dispatch(setIsSaving())
    return requestsManager.post('/games', { game })
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

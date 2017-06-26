import Subject, { $$initialState } from '../gameListReducer'
import * as actionTypes from '../../constants/gameListContants'
import 'babel-polyfill'

describe('NewGame::reducers::gameListReducer', function () {
  it('uses default state', function () {
    expect(Subject(undefined, {})).to.eq($$initialState)
  })

  it('returns state by default', function () {
    expect(Subject($$initialState, {})).to.eq($$initialState)
  })

  describe('SET_IS_SAVING', function () {
    const action = {
      type: actionTypes.SET_IS_SAVING
    }

    it('sets isSaving', function () {
      expect(Subject($$initialState, action).isSaving).to.eql(true)
    })
  })

  describe('SUBMIT_GAME_SUCCESS', function () {
    const game = { id: '1' }
    const action = {
      type: actionTypes.SUBMIT_GAME_SUCCESS,
      game
    }

    resetsIsSaving(action)

    it('prepends game', function () {
      const existingGame = { id: '2' }
      expect(Subject(state({$$games: [existingGame]}), action).$$games).to.eql([
        game,
        existingGame
      ])
    })
  })

  describe('SUBMIT_GAME_FAILURE', function () {
    const error = 'bad'
    const action = {
      type: actionTypes.SUBMIT_GAME_FAILURE,
      error
    }

    resetsIsSaving(action)

    it('sets submitGameError', function () {
      expect(Subject($$initialState, action).submitGameError)
        .to.eql(error)
    })
  })

  describe('SELECT_GAME', function () {
    const game = {id: '1'}
    const action = {
      type: actionTypes.SELECT_GAME,
      game
    }

    it('sets selectedGame', function () {
      expect(Subject($$initialState, action).selectedGame)
        .to.eql(game)
    })
  })

  function state (attrs) {
    return Object.assign({}, $$initialState, attrs)
  }

  function resetsIsSaving (action) {
    it('resets isSaving', function () {
      expect(Subject(state({isSaving: true}), action).isSaving)
        .to.eql(false)
    })
  }
})

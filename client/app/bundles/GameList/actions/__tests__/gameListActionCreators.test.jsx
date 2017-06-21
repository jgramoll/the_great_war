import * as Subject from '../gameListActionCreators'
import * as actionTypes from '../../constants/gameListContants'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import { push } from 'react-router-redux'
import { defaultMessages } from 'libs/i18n/default'
import { IntlProvider } from 'react-intl'

describe('NewGame::actions::gameListActionCreators', function() {
  const mockStore = configureMockStore([thunk])
  const intlProvider = new IntlProvider({locale: 'en'})
  const { intl } = intlProvider.getChildContext()

  describe('setIsSaving', function() {
    it('returns correct hash', function() {
      expect(Subject.setIsSaving()).to.eql({
        type: actionTypes.SET_IS_SAVING
      })
    })
  })

  describe('submitGameSuccess', function() {
    const game = { id: '1' }

    returnsCorrectHash(Subject.submitGameSuccess(game), {
      type: actionTypes.SUBMIT_GAME_SUCCESS,
      game
    })
  })

  describe('submitGameFailure', function() {
    const error = "no name"

    returnsCorrectHash(Subject.submitGameFailure(error), {
      type: actionTypes.SUBMIT_GAME_FAILURE,
      error
    })
  })

  describe('createGame', function() {
    const game = { id: '1' }

    beforeEach(function() {
      this.server = sinon.fakeServer.create({ autoRespond: true })
      this.store = mockStore({})
    })

    afterEach(function() {
      this.server.restore();
    })

    it('posts game content', function() {
      this.server.respondWith("POST", "/games.json",
        [200, { "Content-Type": "application/json" },
          JSON.stringify(game)])

      const subject = Subject.createGame({}, intl)
      return this.store.dispatch(subject).then(() => {
        expect(this.store.getActions()).to.eql([
          { type: actionTypes.SET_IS_SAVING },
          {
            type: actionTypes.SUBMIT_GAME_SUCCESS,
            game
          },
          push('/games')
        ])
      })
    })

    it('sets error', function() {
      this.server.respondWith("POST", "/games.json")

      const subject = Subject.createGame({}, intl)
      return this.store.dispatch(subject).then(() => {
        expect(this.store.getActions()).to.eql([
          { type: actionTypes.SET_IS_SAVING },
          {
            type: actionTypes.SUBMIT_GAME_FAILURE,
            error: 'Oops, something went wrong'
          },
        ])
      })
    })
  })

  function returnsCorrectHash(func, expected) {
    it('returns correct hash', function() {
      expect(func).to.eql(expected)
    })
  }
})
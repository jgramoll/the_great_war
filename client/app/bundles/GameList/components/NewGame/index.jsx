import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import css from './index.scss'
import Header from '../Header'
import { injectIntl, intlShape } from 'react-intl'
import { defaultMessages } from 'libs/i18n/default'

const NewGame = createReactClass({
  render () {
    const { intl, submitGameError } = this.props
    return (
      <div>
        <Header intl={intl} />
        <h1>{intl.formatMessage(defaultMessages.newGame)}</h1>
        <div className={css['create-game-error']}>
          {submitGameError}
        </div>
        <form >
          <label htmlFor="name">
            {intl.formatMessage(defaultMessages.name)}
          </label>
          <input ref={elm => { this.name = elm } } id="name" />
          <input
            type="submit"
            value={intl.formatMessage(defaultMessages.create)}
            onClick={this._submitCreateGame}
          />
        </form>
      </div>
    )
  },

  _submitCreateGame (e) {
    const { intl, createGame, submitGameFailure } = this.props
    e.preventDefault()

    const name = this.name.value
    if (name) {
      createGame({ name, gameType: 'demo' })
    } else {
      const error = intl.formatMessage(defaultMessages.missingName)
      submitGameFailure(error)
    }
  }
})

NewGame.propTypes = {
  intl: intlShape.isRequired,
  submitGameError: PropTypes.string,
  createGame: PropTypes.func.isRequired,
  submitGameFailure: PropTypes.func.isRequired
}

export default injectIntl(NewGame)

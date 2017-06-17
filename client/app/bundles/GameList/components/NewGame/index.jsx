import PropTypes from 'prop-types'
import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const NewGame = React.createClass({
  render() {
    const { intl, submitGameError } = this.props
    return (
      <div>
        <header>
          <Link to="/games">
            {intl.formatMessage(defaultMessages.games)}
          </Link>
          <div>
            {submitGameError}
          </div>
        </header>
        <h1>{intl.formatMessage(defaultMessages.newGame)}</h1>
        <form >
          <label htmlFor="name">
            {intl.formatMessage(defaultMessages.name)}
          </label>
          <input ref={elm => this.name = elm} id="name" />
          <input
            type="submit"
            value={intl.formatMessage(defaultMessages.create)}
            onClick={this._submitCreateGame}
          />
        </form>
      </div>
    )
  },

  _submitCreateGame(e) {
    e.preventDefault()
    const name = this.name.value
    if (name) {
      this.props.createGame({name})
    } else {
      console.error('no name')
    }
  }
})

NewGame.propTypes = {
  intl: intlShape.isRequired,
  submitGameError: PropTypes.string,
  createGame: PropTypes.func.isRequired,
}

export default injectIntl(NewGame)

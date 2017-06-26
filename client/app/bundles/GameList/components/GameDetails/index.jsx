import React from 'react'
import createReactClass from 'create-react-class'
import css from './index.scss'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const GameDetails = createReactClass({
  render () {
    const { intl, game } = this.props

    // TODO shared header
    return (
      <div>
        <header>
          <Link to="/games">
            {intl.formatMessage(defaultMessages.games)}
          </Link>
        </header>
        <h1 className={css.gameTitle}>{game.name}</h1>
      </div>
    )
  }
})

GameDetails.propTypes = {
  intl: intlShape.isRequired,
  game: gameSchema.isRequired
}

export default injectIntl(GameDetails)

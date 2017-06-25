import React from 'react'
import PropTypes from 'prop-types'
import GameRow from './GameRow'
import css from './index.scss'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router'
import { defaultMessages } from 'libs/i18n/default'

const GameList = ({ games, intl }) => (
  <div className={css['game-list']}>
    <h1>
      {intl.formatMessage(defaultMessages.games)}
    </h1>
    <ul>
      {games.map(renderGame)}
    </ul>
    <Link
      to="/games/new"
      activeClassName="active"
      className={css['game-list__new-game']}
    >
      {intl.formatMessage(defaultMessages.newGame)}
    </Link>
  </div>
)

function renderGame (game) {
  return (
    <GameRow
      key={game.id}
      game={game}
    />
  )
}

GameList.propTypes = {
  games: PropTypes.arrayOf(gameSchema).isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(GameList)

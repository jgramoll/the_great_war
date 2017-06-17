import PropTypes from 'prop-types'
import React from 'react'
import GameRow from './GameRow'
import css from './index.scss'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { IndexLink, Link } from 'react-router'
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
      className={css['game-list__new-game']
    }>
      {intl.formatMessage(defaultMessages.newGame)}
    </Link>
  </div>
)

function renderGame(game) {
  return (
    <GameRow
      key={game.id}
      game={game}
    />
  )
}

GameList.propTypes = {
  //TODO game schema
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(GameList);

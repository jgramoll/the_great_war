import PropTypes from 'prop-types'
import React from 'react'
import { defaultMessages } from 'libs/i18n/default'
import { injectIntl, intlShape } from 'react-intl';
import { FormattedMessage } from 'react-intl';

import GameRow from './GameRow'
import css from './GameList.scss'

const GameList = ({ games, intl, createGame }) => (
  <div className={css['game-list']}>
    <h1>
      {intl.formatMessage(defaultMessages.games)}
    </h1>
    <ul>
      {games.map(renderGame)}
    </ul>
    <button
      className={css['game-list__new-game']}
      onClick={createGame}
    >
      {intl.formatMessage(defaultMessages.newGame)}
    </button>
  </div>
)

function createGame() {
  console.log('gamelist.createGame')
}

function renderGame(game) {
  return (
    <GameRow
      key={game.id}
      game={game}
    />
  )
}

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
  createGame: PropTypes.func.isRequired,
}

export default injectIntl(GameList);

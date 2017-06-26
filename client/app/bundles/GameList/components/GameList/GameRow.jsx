import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import css from './GameRow.scss'
import gameSchema from '../../schemas/game'

import { Link } from 'react-router'

const GameRow = createReactClass({
  render () {
    const { game } = this.props
    return (
      <li className={css['game-row']}>
        <h2>
          <Link className={css['game-row__title']}
            to={`/games/${game.id}`}
            onClick={this._setSelectedGame}
          >
            ({game.gameType}) {game.name}
          </Link>
        </h2>
      </li>
    )
  },

  _setSelectedGame () {
    const { selectGame, game } = this.props
    selectGame(game)
  }
})

GameRow.propTypes = {
  game: gameSchema.isRequired,
  selectGame: PropTypes.func.isRequired
}

export default GameRow

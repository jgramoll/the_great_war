import React from 'react'
import css from './GameRow.scss'
import gameSchema from '../../schemas/game'

const GameRow = ({ game }) => (
  <li className={css['game-row']}>
    <h2 className={css['game-row__title']}>({game.gameType}) {game.name}</h2>
  </li>
)

GameRow.propTypes = {
  game: gameSchema.isRequired
}

export default GameRow

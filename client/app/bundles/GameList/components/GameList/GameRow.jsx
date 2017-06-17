import PropTypes from 'prop-types';
import React from 'react';
import css from './GameRow.scss';

const GameRow = ({ game }) => (
  <li className={css['game-row']}>
    <h2 className={css['game-row__title']}>{game.name}</h2>
  </li>
);

GameRow.propTypes = {
  // TODO game schema
  game: PropTypes.object.isRequired,
};

export default GameRow;

import React from 'react'
import createReactClass from 'create-react-class'
import css from './index.scss'
import Header from '../Header'
import gameSchema from '../../schemas/game'
import { injectIntl, intlShape } from 'react-intl'

const GameDetails = createReactClass({
  render () {
    const { intl, game } = this.props

    return (
      <div>
        <Header intl={intl} />
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

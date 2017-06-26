import GameDetails from '../components/GameDetails'
import { connect } from 'react-redux'
import * as actions from '../actions/gameListActionCreators'

const mapStateToProps = (state) => {
  console.log('state', state)
  return { game: state.$$gamesStore.selectedGame }
}

export default connect(mapStateToProps, actions)(GameDetails)

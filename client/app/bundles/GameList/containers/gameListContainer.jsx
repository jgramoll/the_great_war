import { connect } from 'react-redux'
import GameList from '../components/GameList'
import * as actions from '../actions/gameListActionCreators'

const mapStateToProps = (state) => {
  return { games: state.$$gamesStore.$$games }
}

export default connect(mapStateToProps, actions)(GameList)

import NewGame from '../components/NewGame'
import { connect } from 'react-redux'
import * as actions from '../actions/gameListActionCreators'

const mapStateToProps = (state) => {
  return { submitGameError: state.$$gamesStore.submitGameError }
}

export default connect(mapStateToProps, actions)(NewGame)

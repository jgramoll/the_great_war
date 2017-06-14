import { connect } from 'react-redux';
import GameList from '../components/GameList';
import * as actions from '../actions/gameListActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ games: state.games });

export default connect(mapStateToProps, actions)(GameList);

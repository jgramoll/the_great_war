import React from 'react'
import NewGame from '../components/NewGame';
import { connect } from 'react-redux'
import * as actions from '../actions/gameListActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return { submitCommentError: state.submitCommentError }
}


export default connect(mapStateToProps, actions)(NewGame)

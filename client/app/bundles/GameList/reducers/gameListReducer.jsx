import { combineReducers } from 'redux';
// import { GAME_LIST_NAME_UPDATE } from '../constants/gameListConstants';

const games = (state = '', action) => {
  // console.log('games reducer')
  // console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    // case HELLO_WORLD_NAME_UPDATE:
    //   return action.text;
    default:
      return state;
  }
};

const gameListReducer = combineReducers({ games });

export default gameListReducer;

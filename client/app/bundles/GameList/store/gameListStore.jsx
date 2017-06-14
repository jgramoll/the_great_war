import { createStore } from 'redux';
import gameListReducer from '../reducers/gameListReducer';

const configureStore = (railsProps) => (
  createStore(gameListReducer, railsProps)
);

export default configureStore;

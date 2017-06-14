import { GAME_CREATE } from '../constants/gameListContants';

export const createGame = (name) => ({
  type: GAME_CREATE,
  name,
});

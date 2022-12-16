import { ACTION } from './userTypes';
import { createAction } from '../../utils/reducer/reducerUtils';

export const setCurrentUser = (user) =>
  createAction(ACTION.SET_CURRENT_USER, user);
import { DELETE_FRIEND } from './actionsTypes';

export const deleteFriend = (id) => ({
  type: DELETE_FRIEND,
  payload: id,
});

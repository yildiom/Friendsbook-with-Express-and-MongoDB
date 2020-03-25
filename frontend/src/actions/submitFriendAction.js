import { SUBMIT_FRIEND } from './actionsTypes';

export const submitFriend = (id) => (dispatch, getState) =>
  dispatch({
    type: SUBMIT_FRIEND,
    payload: { ...getState().friend, id },
  });


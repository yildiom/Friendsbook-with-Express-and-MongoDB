import { SUBMIT_UPDATE } from './actionsTypes';

export const submitUpdate = (id) => (dispatch, getState) =>
  dispatch({
    type: SUBMIT_UPDATE,
    payload: { ...getState().friend, id },
  });

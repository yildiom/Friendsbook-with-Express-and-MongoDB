// @flow

import { friendState } from '../store/friendState';

export const friendInfoReducer = (
  state = friendState,
  action
) => {
  switch (action.type) {
    case 'ADD_FIRSTNAME':
      return {
        ...state,
        firstname: action.payload,
      };
    case 'ADD_LASTNAME':
      return {
        ...state,
        lastname: action.payload,
      };
    case 'ADD_AGE':
      return {
        ...state,
        age: action.payload,
      };

    default:
      return state;
  }
};

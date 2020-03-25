import { submitFriendState } from '../store/submitFriendState';
import {
  SUBMIT_FRIEND,
  DELETE_FRIEND,
  SORT_FRIENDS,
  SUBMIT_UPDATE,
} from '../actions/actionsTypes';

export const friendReducer = (
  state = submitFriendState,
  action
) => {
  switch (action.type) {
    case SUBMIT_FRIEND:
      return [...state, action.payload];
    case SUBMIT_UPDATE:
      return [
        ...state.map(el => {
          if (el.id === action.payload.id) {
            el.firstName = action.payload.firstName;
            el.lastName = action.payload.lastName;
            el.age = action.payload.age;
          }
          return el;
        }),
      ];
    case DELETE_FRIEND:
      return [...state.filter(el => el.id !== action.payload)];
    case SORT_FRIENDS:
      return [...state.sort((a, b) => a.age - b.age)];
    default:
      return state;
  }
};

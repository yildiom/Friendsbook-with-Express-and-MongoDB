import {
  ADD_FIRSTNAME,
  ADD_LASTNAME,
  ADD_AGE,
} from './actionsTypes';

export const addFirstName = (firstname) => ({
  type: ADD_FIRSTNAME,
  payload: firstname,
});

export const addLastName = (lastname) => ({
  type: ADD_LASTNAME,
  payload: lastname,
});

export const addAge = (age) => ({
  type: ADD_AGE,
  payload: age,
});


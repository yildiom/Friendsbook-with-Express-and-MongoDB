// @flow

import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_AGE } from './actionsTypes';

export const updateFirstName = (updatedFirstname) => ({
  type: UPDATE_FIRSTNAME,
  payload: updatedFirstname,
});

export const updateLastName = (updatedLastname) => ({
  type: UPDATE_LASTNAME,
  payload: updatedLastname,
});

export const updateAge = (updatedAge) => ({
  type: UPDATE_AGE,
  payload: updatedAge,
});

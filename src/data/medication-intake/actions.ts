import { ADD, EDIT, REMOVE } from './actionTypes';

export const addIntake = payload => {
  return { type: ADD, payload };
};

export const editIntake = payload => {
  return { type: EDIT, payload };
};

export const removeIntake = payload => {
  return { type: REMOVE, payload };
};

import { ADD, REMOVE } from './actionTypes';

export const addMedication = payload => {
  return { type: ADD, payload };
};

export const removeMedication = payload => {
  return { type: REMOVE, payload };
};

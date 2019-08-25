import { ADD, REMOVE } from './actionTypes';

export const addLog = payload => {
  return { type: ADD, payload };
};

export const removeLog = payload => {
  return { type: REMOVE, payload };
};

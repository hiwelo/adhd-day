import { EMPTY, SET } from './actionTypes';

/**
 * UserActions creators
 */

export const resetUser = () => {
  return { type: EMPTY };
};

export const setUser = payload => {
  return { type: SET, payload };
};

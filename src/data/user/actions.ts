import { SET } from './actionTypes';

/**
 * UserActions creators
 */

export const setUser = payload => {
  return { type: SET, payload };
};

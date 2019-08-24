/**
 * UserActions defines all actions related to the User of our application
 */

/**
 * UserActions types
 */

export const SET_USER = 'SET_USER';

/**
 * UserActions creators
 */

export const setUser = userName => {
  return { type: SET_USER, userName };
};

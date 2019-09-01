import { EMPTY, SET, User, UserAction } from './types';

export const resetUser = (): UserAction => {
  return { type: EMPTY };
};

export const setUser = (payload: User): UserAction => {
  return { type: SET, payload };
};

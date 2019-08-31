export interface User {
  /**
   * Specify the name of the current user
   */
  name: string;
}

// Describes reducer's actions

export const EMPTY = 'user/EMPTY';
export const SET = 'user/SET';

interface EmptyUser {
  type: typeof EMPTY;
}

interface SetUser {
  type: typeof SET;

  /**
   * Information about the current user
   */
  payload: User;
}

export type UserAction = EmptyUser | SetUser;

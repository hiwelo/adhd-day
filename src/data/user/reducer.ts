import { EMPTY, SET, User, UserAction } from './types';

/**
 * Defines the initial shape for this data point
 */
const INITIAL_STATE: User = {
  name: undefined,
};

export const reducer = (state = INITIAL_STATE, action?: UserAction): User => {
  const request = action || { type: '' };

  switch (request.type) {
    case SET:
      return {
        ...state,
        ...request.payload,
      };

    case EMPTY:
      return INITIAL_STATE;

    default:
      return state;
  }
};

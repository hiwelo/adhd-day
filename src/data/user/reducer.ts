import * as actionTypes from './actionTypes';

/**
 * Defines the initial shape for this data point
 */
const INITIAL_STATE = {
  name: undefined
};

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET:
      return {
        ...state,
        ...payload
      };

    case actionTypes.EMPTY:
      return INITIAL_STATE;

    default:
      return state;
  }
};

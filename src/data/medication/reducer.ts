import * as actionTypes from './actionTypes';

const INITIAL_STATE = [];

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD:
      return [...state, ...payload];

    default:
      return state;
  }
};

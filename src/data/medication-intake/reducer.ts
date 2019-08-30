import { filter, findIndex } from 'lodash';

import * as actionTypes from './actionTypes';
import MedicationIntakeInterface from './interface';

const INITIAL_STATE = [];

export const reducer = (
  state: MedicationIntakeInterface[] = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.ADD: {
      return [...state, ...payload];
    }

    case actionTypes.EDIT: {
      const updatedState = state;
      const editedItemIndex = findIndex(
        state,
        item => item.medicationId === payload.medicationId,
      );
      updatedState[editedItemIndex] = payload;

      return updatedState;
    }

    case actionTypes.REMOVE: {
      return filter(state, item => item.medicationId !== payload.medicationId);
    }

    default:
      return state;
  }
};
